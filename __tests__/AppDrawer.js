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

        let resultDOM = TestUtils.findRenderedDOMComponentWithClass(appDrawer, 'closed');
        expect(resultDOM).not.toBe(undefined);
        expect(resultDOM).not.toBe(null);
    }


    it('allows disabled state', () => {
        const enabledApp = TestUtils.renderIntoDocument(
            <AppDrawer enabled={false} />
        );

        let list = TestUtils.findRenderedDOMComponentWithClass(enabledApp, 'sidebar');

        isSidebarClosed(enabledApp, "left");
        
        let resultDOM = TestUtils.findRenderedDOMComponentWithClass(enabledApp, 'closed');

        enabledApp.openSidebar();
        isSidebarClosed(enabledApp, "left");

    });

})