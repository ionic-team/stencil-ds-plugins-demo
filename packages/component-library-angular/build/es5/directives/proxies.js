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
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) { this.el[item] = val; },
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
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var args = arguments;
            return this.el.componentOnReady().then((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el[methodName].apply(el, args); }));
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
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
}
var DemoComponent = /** @class */ (function () {
    function DemoComponent(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['slideChanged']);
    }
    DemoComponent.decorators = [
        { type: Component, args: [{ selector: 'demo-component', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['advanced', 'max', 'min', 'value'] },] },
    ];
    /** @nocollapse */
    DemoComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return DemoComponent;
}());
export { DemoComponent };
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
