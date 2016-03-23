import {Component, Input} from "angular2/core";
import {Issue, FixVersion} from "./issue";
import {IssueAssigneeComponent} from "./issue-assignee.component";
@Component({
    selector: 'jb-issue',
    template: `
        <div class="key">{{issue.key}}</div>
        <div class="summary">{{issue.fields.summary}}</div>
        <issue-assignee *ngIf="issue.fields.status.statusCategory.name != 'Complete' && issue.fields.assignee" [assignee]="issue.fields.assignee">.</issue-assignee>
    `,
    directives: [IssueAssigneeComponent],
    styles: [
        ':host {border: 1px solid silver; position: relative; margin: 4px; padding: 4px;background-color: #E5EEFF}',
        'issue-assignee {position: absolute; top: 2px; right: 2px}',
        'issue-assignee {filter: grayscale(1);-webkit-filter: grayscale(1);}',
        ':host:hover issue-assignee {filter: grayscale(0);-webkit-filter: grayscale(0);}',
        'issue-assignee {transition: all .2s linear}',
    ]
})
export class IssueComponent {
    @Input() issue:Issue;

}