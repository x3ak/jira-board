import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueComponent} from "./issue.component";
@Component({
    selector: 'issue-list',
    template: `
        <jb-issue [issue]="issue" *ngFor="#issue of issues">issue content</jb-issue>
    `,
    directives: [IssueComponent],
    styles: [':host {display: flex; flex-direction: column;width: 100%}'],
})
export class IssueListComponent {
    @Input() issues:Issue[];
}