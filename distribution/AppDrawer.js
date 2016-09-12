'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * class AppDrawer
 * The closing container div has no special function. It just binds the application together.
 * @important The Sidebar handles resizing and so on by itself.
 * @important Since the Sidebar is not animated via Javascript, it requires CSS transitions!
 */
var AppDrawer = function (_Component) {
    _inherits(AppDrawer, _Component);

    function AppDrawer(props) {
        _classCallCheck(this, AppDrawer);

        var _this = _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this, props));

        _this.state = {
            /**
             * this is OK since owner ownes stati of ownee
             */
            sideBarIsOpen: false,

            /**
             * determines the heigh of the sidebar
             */
            sidebarHeight: 0
        };

        _this.onWindowResize = _this.onWindowResize.bind(_this);
        _this.toggleSidebar = _this.toggleSidebar.bind(_this);
        return _this;
    }

    _createClass(AppDrawer, [{
        key: 'onWindowResize',
        value: function onWindowResize() {
            this.state.sidebarHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            //this.refs.sidebar.height = this.state.sidebarHeight; 
            this.forceUpdate();
        }

        /* installs resize-event-listener on window */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.onWindowResize);

            this.onWindowResize();
        }

        /* removes resize-event-listener on window */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.onWindowResize);
        }
    }, {
        key: 'isOpen',
        value: function isOpen() {
            return this.state.sideBarIsOpen;
        }
    }, {
        key: 'openSidebar',
        value: function openSidebar() {
            if (this.props.enabled) {
                this.state.sideBarIsOpen = true;
                this.forceUpdate();
            }
        }
    }, {
        key: 'closeSidebar',
        value: function closeSidebar() {
            if (this.props.enabled) {
                this.state.sideBarIsOpen = true;
                this.forceUpdate();
            }
        }
    }, {
        key: 'toggleSidebar',
        value: function toggleSidebar() {
            if (this.props.enabled) {
                this.state.sideBarIsOpen = !this.state.sideBarIsOpen;
                this.forceUpdate();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classname = "application " + this.props.className;
            var isOpen = this.state.sideBarIsOpen;

            try {
                document.title = this.props.title;
            } catch (e) {
                console.error(e);
            }

            var sidebar = null;

            if (!this.props.removeSidebar) {
                sidebar = _react2.default.createElement(
                    _Sidebar2.default,
                    { orientation: this.props.sidebarOrientation, height: this.state.sidebarHeight, isOpen: isOpen, wantsToggle: this.toggleSidebar, ref: 'sidebar' },
                    this.props.sidebarContent
                );
            }

            return _react2.default.createElement(
                'div',
                { ref: 'application', className: classname, id: this.props.id },
                sidebar,
                _react2.default.createElement(
                    'div',
                    { className: 'content', ref: 'content' },
                    this.props.children
                )
            );
        }
    }]);

    return AppDrawer;
}(_react.Component);

AppDrawer.propTypes = {
    title: _react2.default.PropTypes.string,
    id: _react2.default.PropTypes.string,
    sidebarContent: _react2.default.PropTypes.node,
    sidebarOrientation: _react2.default.PropTypes.string,
    /**
     * if enabled is false, it keeps it's state, no matter what happens.
     * */
    enabled: _react2.default.PropTypes.bool,
    /**
     * set this to true if you don't want to display a sidebar, i.e. if you have a big screen
     */
    removeSidebar: _react2.default.PropTypes.bool
};

AppDrawer.defaultProps = {
    title: "My Application",
    enabled: true,
    id: "",
    className: "",
    sidebarOrientation: "left",
    removeSidebar: false
};

module.exports = AppDrawer;