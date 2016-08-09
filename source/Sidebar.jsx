

import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import SidebarItem from './SidebarItem';

/**
 * Sidebar class.
 * In default mode, it represents a component which can be faded in and out of the left and right side of a screen.
 * In non-default mode (orientation != left|right), it's also possible to use it as overlay etc.
 */
export default class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        if(this.props.wantsToggle !== undefined) {
            this.props.wantsToggle();
        }
    }

    render() {
        let classname = `sidebar-group  ${this.props.isOpen ? 'open' : 'closed'}`;     

        const time = 100 - (React.Children.count(this.props.children) * 3);

        let delay = 0,
            index = 0, 
            children = React.Children.map(this.props.children, (child) => {                

                let ref = `item-${index++}`;
                let key = `sidebar-${ref}`;

                delay += time;

                return <SidebarItem ref={ref} key={key} transitionDelay={delay}>{child}</SidebarItem>;                
            });

        let overlayStyle = {
            height: this.props.height
        };

        let sidebarStyle = {
            height: this.props.height
        };

        if(!this.props.isOpen) {
            sidebarStyle.transitionDelay = delay + "ms";
            
        }

        let sideDetermination = `sidebar-${this.props.orientation}`;
        let sidebarClass = `fit sidebar ${sideDetermination}`;

        return <div className={classname}>
            
            <div style={overlayStyle} onClick={this.toggle} className="fit overlay"  />
            <div style={sidebarStyle} className={sidebarClass} ref="bar">                
                    {children}
            </div>
            
            </div>;
    }
}


Sidebar.propTypes = {
    onToggledSidebar: React.PropTypes.func,
    /**
     * determines the orientation of the sidebar (left|right)
     * If CSS-classes are provided, it also allows custom orientations (ie. top|center|...)
     * The render method merges automatically the classname: 'sidebar-{orientation}'
     */
    orientation: React.PropTypes.string,
    height: React.PropTypes.number,
    isOpen: React.PropTypes.bool,
    wantsToggle: React.PropTypes.func
}

Sidebar.defaultProps = {
    orientation: 'left',
    isOpen: false
}