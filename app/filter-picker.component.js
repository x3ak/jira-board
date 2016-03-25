System.register(["angular2/core", "./filter.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, filter_service_1;
    var FilterPickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filter_service_1_1) {
                filter_service_1 = filter_service_1_1;
            }],
        execute: function() {
            FilterPickerComponent = (function () {
                // @Output() filterId: number;
                function FilterPickerComponent(_filterService) {
                    this._filterService = _filterService;
                    // @Output() filterChanged = new EventEmitter();
                    this.filters = [];
                }
                FilterPickerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._filterService.getFilters().subscribe(function (filters) {
                        _this.filters = filters;
                    });
                    return null;
                };
                FilterPickerComponent = __decorate([
                    core_1.Component({
                        selector: 'filter-picker',
                        template: "\n        <select #selectItem class=\"form-control\" [(ngModel)]=\"filterId\" required >\n            <option>No value</option>\n            <option *ngFor=\"#filter of filters\" [value]=\"filter.id\" >{{filter.name}}</option>\n        </select>\n    ",
                        providers: [filter_service_1.FilterService],
                    }), 
                    __metadata('design:paramtypes', [filter_service_1.FilterService])
                ], FilterPickerComponent);
                return FilterPickerComponent;
            }());
            exports_1("FilterPickerComponent", FilterPickerComponent);
        }
    }
});
//# sourceMappingURL=filter-picker.component.js.map