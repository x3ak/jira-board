System.register(["angular2/core", "./issue-assignee.component", "./issue-progress.component", "./jira-link.component"], function(exports_1, context_1) {
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
    var core_1, issue_assignee_component_1, issue_progress_component_1, jira_link_component_1;
    var IssueComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_assignee_component_1_1) {
                issue_assignee_component_1 = issue_assignee_component_1_1;
            },
            function (issue_progress_component_1_1) {
                issue_progress_component_1 = issue_progress_component_1_1;
            },
            function (jira_link_component_1_1) {
                jira_link_component_1 = jira_link_component_1_1;
            }],
        execute: function() {
            IssueComponent = (function () {
                function IssueComponent() {
                }
                IssueComponent.prototype.ngOnInit = function () {
                    // console.log(this.issue);
                    return null;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IssueComponent.prototype, "issue", void 0);
                IssueComponent = __decorate([
                    core_1.Component({
                        selector: 'jb-issue',
                        host: {
                            '[class]': "issue.fields.issuetype.name",
                        },
                        template: "\n        <div class=\"key\"><jira-link [issue]=\"issue\">.</jira-link></div>\n        <div class=\"summary\">{{issue.fields.summary}}</div>\n        <issue-assignee *ngIf=\"issue.fields.assignee\" [assignee]=\"issue.fields.assignee\">.</issue-assignee>\n        <issue-progress [issue]=\"issue\">progress</issue-progress>\n    ",
                        directives: [issue_assignee_component_1.IssueAssigneeComponent, issue_progress_component_1.IssueProgressComponent, jira_link_component_1.JiraLinkComponent],
                        styles: [
                            ':host {border: 1px solid silver; position: relative; margin: 4px; padding: 4px;background-color: #E5EEFF}',
                            'issue-assignee {position: absolute; top: 2px; right: 2px}',
                            'issue-assignee {filter: grayscale(1);-webkit-filter: grayscale(1);}',
                            ':host:hover issue-assignee {filter: grayscale(0);-webkit-filter: grayscale(0);}',
                            'issue-assignee {transition: all .2s linear}',
                            '.key {border-bottom: 1px solid silver; padding-bottom: 5px;margin-bottom: 5px}',
                            ':host(.Bug) {background-color:#FFCEC9}',
                            'issue-progress {margin-top: 5px}',
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IssueComponent);
                return IssueComponent;
            }());
            exports_1("IssueComponent", IssueComponent);
        }
    }
});
//# sourceMappingURL=issue.component.js.map