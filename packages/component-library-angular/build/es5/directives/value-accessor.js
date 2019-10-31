/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener } from '@angular/core';
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
export { ValueAccessor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValueAccessor.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    ValueAccessor.prototype.onTouched;
    /**
     * @type {?}
     * @protected
     */
    ValueAccessor.prototype.lastValue;
    /**
     * @type {?}
     * @protected
     */
    ValueAccessor.prototype.el;
}
