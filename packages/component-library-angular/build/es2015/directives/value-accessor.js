/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener } from '@angular/core';
export class ValueAccessor {
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
