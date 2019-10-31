/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var SelectValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(SelectValueAccessor, _super);
    function SelectValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    SelectValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'kds-select',
                    host: {
                        '(change)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SelectValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return SelectValueAccessor;
}(ValueAccessor));
export { SelectValueAccessor };
