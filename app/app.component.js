System.register(['angular2/core', "./issue.service", "./issue-list.component", "./issue.pipe"], function(exports_1, context_1) {
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
    var core_1, issue_service_1, issue_list_component_1, issue_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_service_1_1) {
                issue_service_1 = issue_service_1_1;
            },
            function (issue_list_component_1_1) {
                issue_list_component_1 = issue_list_component_1_1;
            },
            function (issue_pipe_1_1) {
                issue_pipe_1 = issue_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_issueService) {
                    this._issueService = _issueService;
                    this.statuses = [];
                    this.showSubTasks = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getIssues();
                };
                AppComponent.prototype.getIssues = function () {
                    var _this = this;
                    this._issueService.getIssues()
                        .subscribe(function (issues) {
                        _this.issues = issues;
                        _this.issues.forEach(function (issue) {
                            var status = issue.fields.status.name;
                            if (_this.statuses.indexOf(status) == -1) {
                                _this.statuses.push(status);
                            }
                        });
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<label>\n    <input type=\"checkbox\" [(ngModel)]=\"showSubTasks\"> include sub tasks\n</label>\n\n<div class=\"board\">\n    <issue-list *ngFor=\"#status of statuses\" [issues]=\"issues|includeSubTask:showSubTasks|statusFilter:{name:status}\" [title]=\"status\">\n        loading...\n    </issue-list>\n</div>\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    ",
                        providers: [issue_service_1.IssueService],
                        directives: [issue_list_component_1.IssueListComponent],
                        pipes: [issue_pipe_1.StatusFilterPipe, issue_pipe_1.NotSubTaskPipe],
                        styles: ['.board {display: flex; align-content:stretch;} issue-list {width: 100%}']
                    }), 
                    __metadata('design:paramtypes', [issue_service_1.IssueService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map