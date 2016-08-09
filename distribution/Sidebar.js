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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sidebar class.
 * In default mode, it represents a component which can be faded in and out of the left and right side of a screen.
 * In non-default mode (orientation != left|right), it's also possible to use it as overlay etc.
 */
var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'toggle',
        value: function toggle() {
            if (this.props.wantsToggle !== undefined) {
                this.props.wantsToggle();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classname = 'sidebar-group  ' + (this.props.isOpen ? 'open' : 'closed');

            var time = 100 - _react2.default.Children.count(this.props.children) * 3;

            var delay = 0,
                index = 0,
                children = _react2.default.Children.map(this.props.children, function (child) {

                var ref = 'item-' + index++;
                var key = 'sidebar-' + ref;

                delay += time;

                return _react2.default.createElement(
                    _SidebarItem2.default,
                    { ref: ref, key: key, transitionDelay: delay },
                    child
                );
            });

            var overlayStyle = {
                height: this.props.height
            };

            var sidebarStyle = {
                height: this.props.height
            };

            if (!this.props.isOpen) {
                sidebarStyle.transitionDelay = delay + "ms";
            }

            var sideDetermination = 'sidebar-' + this.props.orientation;
            var sidebarClass = 'fit sidebar ' + sideDetermination;

            return _react2.default.createElement(
                'div',
                { className: classname },
                _react2.default.createElement('div', { style: overlayStyle, onClick: this.toggle, className: 'fit overlay' }),
                _react2.default.createElement(
                    'div',
                    { style: sidebarStyle, className: sidebarClass, ref: 'bar' },
                    children
                )
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

exports.default = Sidebar;


Sidebar.propTypes = {
    onToggledSidebar: _react2.default.PropTypes.func,
    /**
     * determines the orientation of the sidebar (left|right)
     * If CSS-classes are provided, it also allows custom orientations (ie. top|center|...)
     * The render method merges automatically the classname: 'sidebar-{orientation}'
     */
    orientation: _react2.default.PropTypes.string,
    height: _react2.default.PropTypes.number,
    isOpen: _react2.default.PropTypes.bool,
    wantsToggle: _react2.default.PropTypes.func
};

Sidebar.defaultProps = {
    orientation: 'left',
    isOpen: false
};