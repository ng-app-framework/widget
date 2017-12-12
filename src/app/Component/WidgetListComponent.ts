import {Component, Input, ViewEncapsulation} from "@angular/core";
@Component({
    selector     : '.widget-list',
    templateUrl  : './widget-list.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls    : ['./widget.scss']
})
export class WidgetListComponent {
    @Input()
    type: string = 'horizontal';

    constructor() {
    }

    getClasses() {
        return {
            row          : this.isHorizontal(),
            'widget-row' : this.isHorizontal(),
            'flex-md-row': this.isHorizontal()
        };
    }

    isHorizontal() {
        return this.type === 'horizontal';
    }

}
