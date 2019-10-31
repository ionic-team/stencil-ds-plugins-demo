/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from 'component-library/loader';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { DemoComponent } from './directives/proxies';
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
export { ComponentLibraryModule };
