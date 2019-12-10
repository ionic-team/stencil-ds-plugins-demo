import { Component, ChangeDetectorRef, ElementRef, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'component-library/loader';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class DemoComponent {
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
proxyInputs(DemoComponent, ['advanced', 'max', 'min', 'value']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ValueAccessor.propDecorators = {
    _handleBlurEvent: [{ type: HostListener, args: ['focusout',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        super.registerOnChange((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            fn(value === '' ? null : parseFloat(value));
        }));
    }
}
NumericValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'demo-component',
                host: {
                    '(slideChanged)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
NumericValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    // proxies
    DemoComponent,
    // Value Accessors
    NumericValueAccessor,
];
class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentLibraryModule, DemoComponent, NumericValueAccessor as ɵa, ValueAccessor as ɵb };
