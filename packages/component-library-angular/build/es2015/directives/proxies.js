/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';
/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function proxyInputs(Cmp, inputs) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.el[item] = val; },
        });
    }));
}
/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function proxyMethods(Cmp, methods) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.el.componentOnReady().then((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el[methodName].apply(el, args)));
        });
    }));
}
/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function proxyOutputs(instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
}
export class DemoComponent {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['slideChanged']);
    }
}
DemoComponent.decorators = [
    { type: Component, args: [{ selector: 'demo-component', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['advanced', 'max', 'min', 'value'] },] },
];
/** @nocollapse */
DemoComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    DemoComponent.prototype.slideChanged;
    /**
     * @type {?}
     * @protected
     */
    DemoComponent.prototype.el;
}
proxyInputs(DemoComponent, ['advanced', 'max', 'min', 'value']);
