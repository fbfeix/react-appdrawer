jest.unmock('../source/AppDrawer.jsx');
jest.unmock('../source/Sidebar.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AppDrawer from '../source/AppDrawer';
import Sidebar from '../source/Sidebar';

describe('AppDrawer', () => {
    const app = TestUtils.renderIntoDocument(
        <AppDrawer title="Sample Test Title" />
    );

    
    const component = TestUtils.renderIntoDocument(<AppDrawer title="Sample Test Title" />);
    
    
    
    function isSidebarClosed(appDrawer, direction) {
        //console.error(appDrawer);

        expect(appDrawer.isOpen()).toBe(false);

        const sidebarDOMNode = TestUtils.findRenderedDOMComponentWithClass(appDrawer, 'sidebar');
        expect(sidebarDOMNode).not.toBe(undefined);
        expect(sidebarDOMNode).not.toBe(null);
    
    }


    it('allows multiple enabled states', () => {
        const enabledApp = TestUtils.renderIntoDocument(
            <AppDrawer enabled={false} />
        );

        let list = TestUtils.findRenderedDOMComponentWithClass(enabledApp, 'sidebar');

        isSidebarClosed(enabledApp, "left");

        enabledApp.open();
        isSidebarClosed(enabledApp, "left");

    });

    it('sidebar is fully hidden in closed-mode', () => {
        const appNode = ReactDOM.findDOMNode(app);
        
        let sidebar = TestUtils.scryRenderedDOMComponentsWithClass(app, "sidebar");
        
        //expect(sidebar).toBe(null);


        //expect(TestUtils.scryRenderedDOMComponentsWithClass(app, 'sidebar').length).toBe(1);

        //expect(appNode).not.toBe(null);
        //expect(appNode)
    });

    it('fires events and changes classNames if the window changes its size', () => {

    })
})