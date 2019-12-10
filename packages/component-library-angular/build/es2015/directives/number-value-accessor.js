/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
export class NumericValueAccessor extends ValueAccessor {
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
