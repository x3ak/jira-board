import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueAssigneeComponent} from "./issue-assignee.component";
@Component({
    selector: 'jb-issue',
    template: `
    <div class="jb-issue">
        <div class="key">{{issue.key}}</div>
        <div class="summary">{{issue.fields.summary}}</div>
        <issue-assignee *ngIf="issue.fields.assignee" [assignee]="issue.fields.assignee">.</issue-assignee>
    </div>
    `,
    directives: [IssueAssigneeComponent],
    styles: ['.jb-issue {border: 1px solid silver; padding: 5px}']
})
export class IssueComponent {
    @Input() issue:Issue;

}