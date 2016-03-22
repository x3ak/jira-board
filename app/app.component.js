System.register(['angular2/core', "./issue.service", "./status-filter.pipe", "./issue-list.component"], function(exports_1, context_1) {
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
    var core_1, issue_service_1, status_filter_pipe_1, issue_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_service_1_1) {
                issue_service_1 = issue_service_1_1;
            },
            function (status_filter_pipe_1_1) {
                status_filter_pipe_1 = status_filter_pipe_1_1;
            },
            function (issue_list_component_1_1) {
                issue_list_component_1 = issue_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_issueService) {
                    this._issueService = _issueService;
                }
                AppComponent.prototype.ngOnInit = function () { this.getIssues(); };
                AppComponent.prototype.getIssues = function () {
                    var _this = this;
                    this._issueService.getIssues()
                        .subscribe(function (issues) {
                        _this.issues = issues;
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h3>Board:</h3>\n\n<table>\n    <tr>\n        <td>Open</td>\n        <td>In Progress</td>\n        <td>Resolved</td>\n    </tr>\n    <tr>\n        <td>\n            <issue-list [issues]=\"issues|statusFilter:{name:'Open'}\"></issue-list>\n        </td>\n        <td>\n            <issue-list [issues]=\"issues|statusFilter:{name:'In Progress'}\"></issue-list>\n        </td>\n        <td>\n            <issue-list [issues]=\"issues|statusFilter:{name:'Resolved'}\"></issue-list>\n        </td>\n    </tr>\n</table>\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    ",
                        providers: [issue_service_1.IssueService],
                        directives: [issue_list_component_1.IssueListComponent],
                        pipes: [status_filter_pipe_1.StatusFilterPipe],
                    }), 
                    __metadata('design:paramtypes', [issue_service_1.IssueService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// // import {IssueService} from "../issue.service";
// // import {Issue} from "../issue";
//
// @Component({
//     selector: 'jira-board',
//     template: `
//   <h3>Board:</h3>
//   <ul>
//     <li *ngFor="#issue of issues">
//       {{ issue.key }}
//     </li>
//   </ul>
//   <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
//   `,
// })
// export class JiraBoardComponent // implements OnInit
// {
//     // constructor (private _service: IssueService) {}
//     // errorMessage: string;
//     // issues: Issue[];
//     // ngOnInit() { this.getIssues(); }
//     // getIssues() {
//     //     this._service.getIssues()
//     //         .subscribe(
//     //             issues => this.issues = issues,
//     //             error =>  this.errorMessage = <any>error);
//     // }
// } 
//# sourceMappingURL=app.component.js.map