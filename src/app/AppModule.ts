import {Component, NgModule, ViewEncapsulation} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgWidgetModule} from "./NgWidgetModule";

@Component({
    selector     : 'app',
    encapsulation: ViewEncapsulation.None,

    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="widget">
                        <div class="widget-title">
                            <h2>Widget Component</h2>
                        </div>
                        <div class="widget-content">
                            This example was built around Bootstrap and the Widget components, which format content
                            so that there is space between elements. You can use bootstrap column classes on the widget
                            elements like you would any other element to restrict their sizing.
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget">
                <ul class=" nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#example" role="tab">Example</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#html" role="tab">HTML</a>
                    </li>
                </ul>
                <div class="tab-content card">
                    <div class="tab-pane active" id="example" role="tabpanel">

                        <div class="widget-list">
                            <div class="widget col-12">
                                <div class="widget-title">
                                    Full Span Widget
                                </div>
                            </div>
                            <ng-container *ngFor="let i of [1,2,3,4]">
                                <div class="widget col-12 col-sm-6">
                                    <div class="widget-title">
                                        Half Widget
                                    </div>
                                </div>
                            </ng-container>
                            <ng-container *ngFor="let i of [1,2,3,4,5,6]">
                                <div class="widget col-12 col-sm-4">
                                    <div class="widget-title">
                                        Third Widget
                                    </div>
                                </div>
                            </ng-container>

                            <ng-container *ngFor="let i of [1,2,3,4]">
                                <div class="widget col-12 col-sm-3">
                                    <div class="widget-title">
                                        Quarter Widget
                                    </div>
                                </div>
                            </ng-container>
                        </div>
                        <div class="widget-list" type="horizontal">
                            <ng-container *ngFor="let i of [1,2,3,4,5,6]">
                                <div class="widget">
                                    <div class="widget-title">
                                        Auto Adjusting Widget
                                    </div>
                                </div>
                            </ng-container>
                        </div>
                    </div>

                    <div class="tab-pane" id="html" role="tabpanel">
                        <pre>{{markup}}</pre>
                    </div>
                </div>
            </div>
        </div>

    `,
    styles  : [
            `
            #example, body {
                background-color: #efefef;
            }

            pre {
                padding: 10px;
            }
        `
    ]
})
export class AppComponent {

    showExample = false;
    showHtml    = false;
    markup      = `
<div class="widget-list">
    <div class="widget col-12">
        <div class="widget-title">
            Full Span Widget
        </div>
    </div>
    <ng-container *ngFor="let i of [1,2,3,4]">
        <div class="widget col-12 col-sm-6">
            <div class="widget-title">
                Half Widget
            </div>
        </div>
    </ng-container>
    <ng-container *ngFor="let i of [1,2,3,4,5,6]">
        <div class="widget col-12 col-sm-4">
            <div class="widget-title">
                Third Widget
            </div>
        </div>
    </ng-container>
    
    <ng-container *ngFor="let i of [1,2,3,4]">
        <div class="widget col-12 col-sm-3">
            <div class="widget-title">
                Quarter Widget
            </div>
        </div>
    </ng-container>
    </div>
    <div class="widget-list" type="horizontal">
    <ng-container *ngFor="let i of [1,2,3,4,5,6]">
        <div class="widget">
            <div class="widget-title">
                Auto Adjusting Widget
            </div>
        </div>
    </ng-container>
</div>
    `;
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgWidgetModule
    ],
    exports     : [AppComponent],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
