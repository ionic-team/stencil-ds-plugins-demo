import { Component, ChangeDetectorRef, ElementRef, HostListener, Directive, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'component-library/loader';
import { __extends } from 'tslib';
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
proxyInputs(DemoComponent, ['advanced', 'max', 'min', 'value']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValueAccessor = /** @class */ (function () {
    function ValueAccessor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.handleChangeEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    ValueAccessor.prototype._handleBlurEvent = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ValueAccessor.propDecorators = {
        _handleBlurEvent: [{ type: HostListener, args: ['focusout',] }]
    };
    return ValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumericValueAccessor = /** @class */ (function (_super) {
    __extends(NumericValueAccessor, _super);
    function NumericValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    NumericValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        _super.prototype.registerOnChange.call(this, (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            fn(value === '' ? null : parseFloat(value));
        }));
    };
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
    NumericValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NumericValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    // proxies
    DemoComponent,
    // Value Accessors
    NumericValueAccessor,
];
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: [],
                },] },
    ];
    return ComponentLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentLibraryModule, DemoComponent, NumericValueAccessor as ɵa, ValueAccessor as ɵb };
