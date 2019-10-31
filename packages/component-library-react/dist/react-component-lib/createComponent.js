var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import ReactDom from 'react-dom';
import { attachEventProps, createForwardRef, dashToPascalCase, isCoveredByReact, } from './utils/index';
export const createReactComponent = (tagName) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            const node = ReactDom.findDOMNode(this);
            attachEventProps(node, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            const propsToPass = Object.keys(cProps).reduce((acc, name) => {
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (isCoveredByReact(eventName)) {
                        acc[name] = cProps[name];
                    }
                }
                return acc;
            }, {});
            const newProps = Object.assign({}, propsToPass, { ref: forwardedRef, style,
                className });
            return React.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};
//# sourceMappingURL=createComponent.js.map