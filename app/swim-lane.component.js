System.register(["angular2/core", "./issue-list.component", "./issue.component", "./issue.pipe"], function(exports_1, context_1) {
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
    var core_1, issue_list_component_1, issue_component_1, issue_pipe_1;
    var SwimLaneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_list_component_1_1) {
                issue_list_component_1 = issue_list_component_1_1;
            },
            function (issue_component_1_1) {
                issue_component_1 = issue_component_1_1;
            },
            function (issue_pipe_1_1) {
                issue_pipe_1 = issue_pipe_1_1;
            }],
        execute: function() {
            SwimLaneComponent = (function () {
                function SwimLaneComponent() {
                }
                SwimLaneComponent.prototype.ngOnInit = function () {
                    console.log(this.subtasks);
                    return null;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SwimLaneComponent.prototype, "issue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SwimLaneComponent.prototype, "subtasks", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SwimLaneComponent.prototype, "statuses", void 0);
                SwimLaneComponent = __decorate([
                    core_1.Component({
                        selector: 'swim-lane',
                        template: "\n    <div class=\"title\">{{issue.key}} : {{issue.fields.summary}}</div>\n    <div class=\"issue-lists\">\n        <issue-list *ngFor=\"#status of statuses\" [issues]=\"subtasks|statusFilter:{name:status}\">...</issue-list>\n    </div>\n    ",
                        styles: [
                            ':host {position: relative}',
                            '.issue-lists {display: flex; flex-direction: row}',
                            '.title {border-bottom: 1px solid silver;}',
                        ],
                        directives: [issue_list_component_1.IssueListComponent, issue_component_1.IssueComponent],
                        pipes: [issue_pipe_1.StatusFilterPipe],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwimLaneComponent);
                return SwimLaneComponent;
            }());
            exports_1("SwimLaneComponent", SwimLaneComponent);
        }
    }
});
//# sourceMappingURL=swim-lane.component.js.map