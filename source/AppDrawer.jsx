
import React, {Component, PropTypes} from 'react';

import Sidebar from './Sidebar';


/**
 * class AppDrawer
 * The closing container div has no special function. It just binds the application together.
 * @important The Sidebar handles resizing and so on by itself.
 * @important Since the Sidebar is not animated via Javascript, it requires CSS transitions!
 */
class AppDrawer extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            /**
             * this is OK since owner ownes stati of ownee
             */
            sideBarIsOpen: false,

            /**
             * determines the heigh of the sidebar
             */
            sidebarHeight: 0
        };

        this.onWindowResize = this.onWindowResize.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    onWindowResize() {
        this.state.sidebarHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log(this.state.sidebarHeight);
        this.refs.sidebar.height = this.state.sidebarHeight; 
        this.forceUpdate();
    }

    /* installs resize-event-listener on window */
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);

        this.onWindowResize();
    }

    /* removes resize-event-listener on window */
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    isOpen() {
        return this.state.sideBarIsOpen;
    }

    openSidebar() {
        if(this.props.enabled) {
            this.state.sideBarIsOpen = true;
            this.forceUpdate();
        }
    }

    closeSidebar() {
        if(this.props.enabled) {
            this.state.sideBarIsOpen = true;
            this.forceUpdate();
        }
    }

    toggleSidebar() {
        if(this.props.enabled) {
            this.state.sideBarIsOpen = !this.state.sideBarIsOpen;
            this.forceUpdate();
        }
    }


    render() {
        let classname = "application " + this.props.className;        
        let isOpen = this.state.sideBarIsOpen;


        return <div ref="application" className={classname} id={this.props.id}>
            <Sidebar height={this.state.sidebarHeight} isOpen={isOpen} wantsToggle={this.toggleSidebar} ref="sidebar">{this.props.sidebarContent}</Sidebar>
            <div className="content" ref="content">
                {this.props.children}
            </div>
        </div>;
    }
}

AppDrawer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    sidebarContent: PropTypes.node,
    /**
     * if enabled is false, it keeps it's state, no matter what happens.
     * */    
    enabled: PropTypes.bool
}

AppDrawer.defaultProps = {
    title: "My Application",
    enabled: true,
    id: "",
    className: ""
}


module.exports = AppDrawer;