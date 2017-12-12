import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetComponent} from "./Component/WidgetComponent";
import {WidgetListComponent} from "./Component/WidgetListComponent";

@NgModule({
    declarations: [
        WidgetComponent,
        WidgetListComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        WidgetComponent,
        WidgetListComponent
    ]
})
export class NgWidgetModule {

    constructor() {

    }
}
