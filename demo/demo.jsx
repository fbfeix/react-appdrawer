
import AppDrawer from '../source/AppDrawer';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../style/AppDrawer.scss';




class SampleApp extends Component {
    
    constructor(props) {
        super(props);

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.refs.appDrawer.toggleSidebar();
    }

    render() {
        let sidebarContent = [
            <li>item 1</li>,
            <li>item 2</li>,
            <li>item 3</li>,
            <li>item 4</li>
        ];

        let style={
            margin: "300px"
        };

        return <AppDrawer ref="appDrawer" sidebarContent={sidebarContent}>
            <button style={style} onClick={this.toggleSidebar}>ToggleSidebar</button>
        </AppDrawer>;
    }
}


ReactDOM.render(<SampleApp />, document.getElementById('react-app'));