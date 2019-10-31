var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import ReactDOM from 'react-dom';
import { attachEventProps } from './utils/attachEventProps';
export function createOverlayComponent(displayName, controller) {
    const dismissEventName = `on${displayName}DidDismiss`;
    return class ReactOverlayComponent extends React.Component {
        constructor(props) {
            super(props);
            this.el = document.createElement('div');
        }
        static get displayName() {
            return displayName;
        }
        componentDidMount() {
            if (this.props.isOpen) {
                this.present();
            }
        }
        componentDidUpdate(prevProps) {
            return __awaiter(this, void 0, void 0, function* () {
                if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                    this.present(prevProps);
                }
                if (this.controller &&
                    prevProps.isOpen !== this.props.isOpen &&
                    this.props.isOpen === false) {
                    yield this.controller.dismiss();
                }
            });
        }
        present(prevProps) {
            return __awaiter(this, void 0, void 0, function* () {
                // tslint:disable-next-line:no-empty
                const _a = this.props, { children, isOpen, onDidDismiss = () => { } } = _a, cProps = __rest(_a, ["children", "isOpen", "onDidDismiss"]);
                const elementProps = Object.assign({}, cProps, { [dismissEventName]: onDidDismiss });
                this.controller = yield controller.create(Object.assign({}, elementProps, { component: this.el, componentProps: {} }));
                attachEventProps(this.controller, elementProps, prevProps);
                this.controller.present();
            });
        }
        render() {
            return ReactDOM.createPortal(this.props.children, this.el);
        }
    };
}
//# sourceMappingURL=createOverlayComponent.js.map