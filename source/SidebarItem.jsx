
import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class SidebarItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offscreen: true
        }
    }

    appear() {
        this.state.offscreen = false;
    }

    disappear() {
        this.state.offscreen = true;
    }

    toggleAppearance() {
        this.state.offscreen = !this.state.offscreen;
    }

    render() {
        let style = {
            transitionDelay: this.props.transitionDelay + "ms"
        }

        let classname = "sidebar-item ";

        if(this.state.offscreen) {
            classname += "disappeared";
        } else {
            classname += "appeared";
        }


        return <div className={classname} style={style}>{this.props.children}</div>;
    }
}


SidebarItem.propTypes = {
    transitionDelay: React.PropTypes.number
}