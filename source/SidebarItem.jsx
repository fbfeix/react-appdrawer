
import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

/**
 * Helper class SidebarItem
 * It's very own job is to add transitionDelays to all Items of the Sidebar
 */
export default class SidebarItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let style = {
            transitionDelay: this.props.transitionDelay + "ms"
        }

        let classname = "sidebar-item " + (this.props.className || "");


        return <div className={classname} style={style}>{this.props.children}</div>;
    }
}


SidebarItem.propTypes = {
    transitionDelay: React.PropTypes.number
}