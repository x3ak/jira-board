import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueComponent} from "./issue.component";
@Component({
    selector: 'issue-list',
    template: `
        <div class="issue-list">
            <h2>{{title}}</h2>
            <jb-issue [issue]="issue" *ngFor="#issue of issues">issue content</jb-issue>
        </div>
    `,
    directives: [IssueComponent],
    styles: ['.issue-list {display: flex; flex-direction: column; margin-right: 10px} jb-issue {margin-bottom: 10px}'],
})
export class IssueListComponent {
    @Input() issues:Issue[];
    @Input() title:any;
}