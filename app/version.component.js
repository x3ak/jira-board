System.register(["angular2/core", "./swim-lane.component", "./issue-list.component", "./issue.pipe"], function(exports_1, context_1) {
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
    var core_1, swim_lane_component_1, issue_list_component_1, issue_pipe_1;
    var VersionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (swim_lane_component_1_1) {
                swim_lane_component_1 = swim_lane_component_1_1;
            },
            function (issue_list_component_1_1) {
                issue_list_component_1 = issue_list_component_1_1;
            },
            function (issue_pipe_1_1) {
                issue_pipe_1 = issue_pipe_1_1;
            }],
        execute: function() {
            VersionComponent = (function () {
                function VersionComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VersionComponent.prototype, "version", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], VersionComponent.prototype, "statuses", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], VersionComponent.prototype, "issues", void 0);
                VersionComponent = __decorate([
                    core_1.Component({
                        selector: 'version',
                        template: "\n        <h2>{{version}}</h2>\n        <swim-lane *ngFor=\"#issue of issues|swimLane\" [subtasks]=\"issues|subTaskOf:issue\" [statuses]=\"statuses\" [issue]=\"issue\">...</swim-lane>\n        <status-columns [issues]=\"issues|firstLevelIssue\" [statuses]=\"statuses\">...</status-columns>\n    ",
                        directives: [swim_lane_component_1.SwimLaneComponent, issue_list_component_1.StatusColumnsComponent],
                        pipes: [issue_pipe_1.SwimLanePipe, issue_pipe_1.FirstLevelIssuePipe, issue_pipe_1.SubTaskOfPipe],
                        styles: [
                            'swim-lane {margin-bottom: 25px;display: block}',
                            '.title {border-bottom: 1px solid silver;}',
                            'h2 {background-color: rgba(255, 149, 71, 0.17);border: 1px solid rgba(255, 149, 71, 0.17); margin-bottom: 4px; padding: 5px;}',
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], VersionComponent);
                return VersionComponent;
            }());
            exports_1("VersionComponent", VersionComponent);
        }
    }
});
//# sourceMappingURL=version.component.js.map