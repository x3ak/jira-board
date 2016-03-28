import {Component, Input, OnInit} from "angular2/core";
import {Issue, FixVersion, Progress} from "./issue";
import {IssueAssigneeComponent} from "./issue-assignee.component";
import {NgClass} from "angular2/common";
import {IssueProgressComponent} from "./issue-progress.component";
import {JiraLinkComponent} from "./jira-link.component";
@Component({
    selector: 'jb-issue',
    host: {
        '[class]' : "issue.fields.issuetype.name",
    },
    template: `
        <div class="key"><jira-link [issue]="issue">.</jira-link></div>
        <div class="summary">{{issue.fields.summary}}</div>
        <issue-assignee *ngIf="issue.fields.assignee" [assignee]="issue.fields.assignee">.</issue-assignee>
        <issue-progress [issue]="issue">progress</issue-progress>
    `,
    directives: [IssueAssigneeComponent, IssueProgressComponent, JiraLinkComponent],
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
})
export class IssueComponent implements OnInit {
    @Input() issue:Issue;


    ngOnInit():any {
        // console.log(this.issue);
        return null;
    }
}

