import {Component, Input} from "angular2/core";
import {Issue, FixVersion} from "./issue";
import {IssueAssigneeComponent} from "./issue-assignee.component";
import {NgClass} from "angular2/common";
@Component({
    selector: 'jb-issue',
    host: {
        '[class]' : "issue.fields.issuetype.name",
    },
    template: `
        <div class="key"><img [src]="issue.fields.issuetype.iconUrl" /> <a href="//jira.cloud.rdlp/browse/{{issue.key}}" target="_jira">{{issue.key}}</a></div>
        <div class="summary">{{issue.fields.summary}}</div>
        <issue-assignee *ngIf="issue.fields.status.statusCategory.name != 'Complete' && issue.fields.assignee" [assignee]="issue.fields.assignee">.</issue-assignee>
    `,
    directives: [IssueAssigneeComponent, NgClass],
    styles: [
        ':host {border: 1px solid silver; position: relative; margin: 4px; padding: 4px;background-color: #E5EEFF}',
        'issue-assignee {position: absolute; top: 2px; right: 2px}',
        'issue-assignee {filter: grayscale(1);-webkit-filter: grayscale(1);}',
        ':host:hover issue-assignee {filter: grayscale(0);-webkit-filter: grayscale(0);}',
        'issue-assignee {transition: all .2s linear}',
        '.key {border-bottom: 1px solid silver; padding-bottom: 5px;margin-bottom: 5px}',
        ':host(.Bug) {background-color:#FFCEC9}',
    ]
})
export class IssueComponent {
    @Input() issue:Issue;

}