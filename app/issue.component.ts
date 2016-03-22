import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueStatusComponent} from "./issue-status.component";
@Component({
    selector: 'jb-issue',
    template: `
        <span>{{issue.key}} - {{issue.fields.summary}}</span>
        <issue-status [status]="issue.fields.status">status</issue-status>
    `,
    directives: [IssueStatusComponent]
})
export class IssueComponent {
    @Input() issue:Issue;

}