import { ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Components } from 'component-library';
export declare interface DemoComponent extends Components.DemoComponent {
}
export declare class DemoComponent {
    slideChanged: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef);
}
