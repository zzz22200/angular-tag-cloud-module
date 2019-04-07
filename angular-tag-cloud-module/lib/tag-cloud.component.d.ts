import { OnChanges, AfterContentInit, AfterContentChecked, EventEmitter, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { CloudData, ZoomOnHoverOptions } from './tag-cloud.interfaces';
export declare class TagCloudComponent implements OnChanges, AfterContentInit, AfterContentChecked {
    private el;
    private r2;
    data: CloudData[];
    width?: number;
    height?: number;
    overflow?: boolean;
    strict?: boolean;
    zoomOnHover?: ZoomOnHoverOptions;
    realignOnResize?: boolean;
    randomizeAngle?: boolean;
    clicked?: EventEmitter<CloudData>;
    dataChanges?: EventEmitter<SimpleChanges>;
    afterInit?: EventEmitter<void>;
    afterChecked?: EventEmitter<void>;
    private _dataArr;
    private _alreadyPlacedWords;
    private _options;
    private _timeoutId;
    constructor(el: ElementRef, r2: Renderer2);
    onResize(event: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    reDraw(changes?: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    descriptiveEntry(entry: CloudData): string;
    drawWordCloud(): void;
    hitTest(currentEl: HTMLElement, otherEl: HTMLElement[]): boolean;
    overlapping(a: HTMLElement, b: HTMLElement): boolean;
    drawWord(index: number, word: CloudData): void;
}
