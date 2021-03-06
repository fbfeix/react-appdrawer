
import React, {Component} from 'react';

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
        
        //this.refs.sidebar.height = this.state.sidebarHeight; 
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

        try {
            document.title = this.props.title;

        } catch (e) {
            console.error(e);
        }

        let sidebar = null;

        if(!this.props.removeSidebar) {
            sidebar = <Sidebar orientation={this.props.sidebarOrientation} height={this.state.sidebarHeight} isOpen={isOpen} wantsToggle={this.toggleSidebar} ref="sidebar">{this.props.sidebarContent}</Sidebar>
        } 

        return <div ref="application" className={classname} id={this.props.id}>
            {sidebar}
            <div className="content" ref="content">
                {this.props.children}
            </div>
        </div>;
    }
}

AppDrawer.propTypes = {
    title: React.PropTypes.string,
    id: React.PropTypes.string,
    sidebarContent: React.PropTypes.node,
    sidebarOrientation: React.PropTypes.string,
    /**
     * if enabled is false, it keeps it's state, no matter what happens.
     * */    
    enabled: React.PropTypes.bool,
    /**
     * set this to true if you don't want to display a sidebar, i.e. if you have a big screen
     */
    removeSidebar: React.PropTypes.bool
}

AppDrawer.defaultProps = {
    title: "My Application",
    enabled: true,
    id: "",
    className: "",
    sidebarOrientation: "left",
    removeSidebar: false
}


module.exports = AppDrawer;