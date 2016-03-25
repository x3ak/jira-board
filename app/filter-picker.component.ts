import {Component, OnInit, Output, EventEmitter} from "angular2/core";
import {FilterService} from "./filter.service";

@Component({
    selector: 'filter-picker',
    template: `
        <select #selectItem class="form-control" [(ngModel)]="filterId" required >
            <option>No value</option>
            <option *ngFor="#filter of filters" [value]="filter.id" >{{filter.name}}</option>
        </select>
    `,
    providers: [FilterService],
})
export class FilterPickerComponent implements OnInit {
    // @Output() filterChanged = new EventEmitter();
    filters:any[] = [];
    // @Output() filterId: number;

    constructor (private _filterService: FilterService) {}

    ngOnInit():any {
        this._filterService.getFilters().subscribe(filters => {
            this.filters = filters;
        });

        return null;
    }

}