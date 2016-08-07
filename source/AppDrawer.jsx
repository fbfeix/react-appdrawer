
import React, {Component, PropTypes} from 'react';

import Sidebar from './Sidebar';

class AppDrawer extends Component {
    render() {
        return <div ref="application" className="application">
            <Sidebar >{this.props.sidebarContent}</Sidebar>
            <div className="content" ref="content">
                {this.props.children}
            </div>
        </div>;
    }
}

AppDrawer.propTypes = {
    title: PropTypes.string,
    sidebarContent: PropTypes.node
}

AppDrawer.defaultProps = {
    title: "My Application"
}


module.exports = AppDrawer;