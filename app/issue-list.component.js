System.register(["angular2/core", "./issue.component", "./issue.pipe"], function(exports_1, context_1) {
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
    var core_1, issue_component_1, issue_pipe_1;
    var IssueListComponent, StatusColumnsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_component_1_1) {
                issue_component_1 = issue_component_1_1;
            },
            function (issue_pipe_1_1) {
                issue_pipe_1 = issue_pipe_1_1;
            }],
        execute: function() {
            IssueListComponent = (function () {
                function IssueListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], IssueListComponent.prototype, "issues", void 0);
                IssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'issue-list',
                        template: "\n        <jb-issue [issue]=\"issue\" *ngFor=\"#issue of issues\">issue content</jb-issue>\n    ",
                        directives: [issue_component_1.IssueComponent],
                        styles: [
                            ':host {display: flex; flex-direction: column;width: 100%;}',
                            'jb-issue {}',
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], IssueListComponent);
                return IssueListComponent;
            }());
            exports_1("IssueListComponent", IssueListComponent);
            StatusColumnsComponent = (function () {
                function StatusColumnsComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], StatusColumnsComponent.prototype, "issues", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], StatusColumnsComponent.prototype, "statuses", void 0);
                StatusColumnsComponent = __decorate([
                    core_1.Component({
                        selector: 'status-columns',
                        template: "\n        <issue-list *ngFor=\"#status of statuses\" [issues]=\"issues|statusFilter:{name:status}\">...</issue-list>\n    ",
                        directives: [IssueListComponent],
                        pipes: [issue_pipe_1.StatusFilterPipe],
                        styles: [':host {width: 100%; display: flex; flex-direction: row;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatusColumnsComponent);
                return StatusColumnsComponent;
            }());
            exports_1("StatusColumnsComponent", StatusColumnsComponent);
        }
    }
});
//# sourceMappingURL=issue-list.component.js.map