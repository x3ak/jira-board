import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueComponent} from "./issue.component";
@Component({
    selector: 'issue-list',
    template: `
<ul>
    <li *ngFor="#issue of issues">
        <jb-issue [issue]="issue">issue content</jb-issue>
    </li>
</ul>
    `,
    directives: [IssueComponent],
})
export class IssueListComponent {
    @Input() issues:Issue[];
}