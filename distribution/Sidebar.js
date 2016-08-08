'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SidebarItem = require('./SidebarItem');

var _SidebarItem2 = _interopRequireDefault(_SidebarItem);

require('./Sidebar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));

        _this.state = {
            opened: false,
            height: 100
        };

        _this.toggle = _this.toggle.bind(_this);
        _this.triggerToggledSidebarCallback = _this.triggerToggledSidebarCallback.bind(_this);
        _this.onWindowResize = _this.onWindowResize.bind(_this);
        return _this;
    }

    /* installs resize-event-listener on window */


    _createClass(Sidebar, [{
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

        /* observes window resize and sets height of the sidebar */

    }, {
        key: 'onWindowResize',
        value: function onWindowResize() {
            this.state.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.forceUpdate();
        }
    }, {
        key: 'isOpened',
        value: function isOpened() {
            return this.state.opened;
        }
    }, {
        key: 'open',
        value: function open() {
            this.state.opened = true;
            this.triggerToggledSidebarCallback();
            this.forceUpdate();
        }
    }, {
        key: 'close',
        value: function close() {
            this.state.opened = false;
            this.triggerToggledSidebarCallback();
            this.forceUpdate();
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.state.opened = !this.state.opened;
            this.triggerToggledSidebarCallback();
            this.forceUpdate();
        }
    }, {
        key: 'triggerToggledSidebarCallback',
        value: function triggerToggledSidebarCallback() {
            if (this.props.onToggledSidebar != undefined) {
                this.props.onToggledSidebar({
                    isOpened: this.state.opened
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classname = "sidebar-group ";

            if (this.state.opened) {
                classname += "opened";
            } else {
                classname += "closed";
            }

            var time = 100 - _react2.default.Children.count(this.props.children) * 3;

            var delay = 0,
                index = 0,
                children = _react2.default.Children.map(this.props.children, function (child) {

                var ref = 'item-' + index++;

                delay += time;

                return _react2.default.createElement(
                    _SidebarItem2.default,
                    { ref: ref, transitionDelay: delay },
                    child
                );
            });

            var overlayStyle = {
                height: this.state.height
            };

            var sidebarStyle = {
                height: this.state.height
            };

            if (!this.state.opened) {
                sidebarStyle.transitionDelay = delay + "ms";
            }

            return _react2.default.createElement(
                'div',
                { className: classname },
                _react2.default.createElement('div', { style: overlayStyle, onClick: this.toggle, className: 'fit overlay' }),
                _react2.default.createElement(
                    'div',
                    { style: sidebarStyle, className: 'fit sidebar', ref: 'bar' },
                    children
                )
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

exports.default = Sidebar;


Sidebar.propTypes = {
    onToggledSidebar: _react2.default.PropTypes.func
};