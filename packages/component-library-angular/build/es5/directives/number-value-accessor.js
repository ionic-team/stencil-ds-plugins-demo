/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var NumericValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(NumericValueAccessor, _super);
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
export { NumericValueAccessor };
