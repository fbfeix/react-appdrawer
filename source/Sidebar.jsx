

import React, {Component, PropTypes} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import SidebarItem from './SidebarItem';

//import './Sidebar.scss';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let classname = "sidebar-group ";     

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

        let sideDetermination = `sidebar-${this.props.direction}`;
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
    onToggledSidebar: PropTypes.func,
    /**
     * determines the orientation of the sidebar (left|right)
     * If CSS-classes are provided, it also allows custom directions (ie. top|center|...)
     * The render method merges automatically the classname: 'sidebar-{direction}'
     */
    direction: PropTypes.string,
    height: PropTypes.number
}

Sidebar.defaultProps = {
    direction: 'left'
}