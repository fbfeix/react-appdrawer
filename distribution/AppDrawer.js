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

    function AppDrawer() {
        _classCallCheck(this, AppDrawer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppDrawer).apply(this, arguments));
    }

    _createClass(AppDrawer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'application', className: 'application' },
                _react2.default.createElement(
                    _Sidebar2.default,
                    null,
                    this.props.sidebarContent
                ),
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
    title: _react.PropTypes.string,
    sidebarContent: _react.PropTypes.node,
    router: _react.PropTypes.node,
    enabled: _react.PropTypes.bool
};

AppDrawer.defaultProps = {
    title: "My Application",
    enabled: true
};

module.exports = AppDrawer;