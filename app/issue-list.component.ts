import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueComponent} from "./issue.component";
import {StatusFilterPipe} from "./issue.pipe";
@Component({
    selector: 'issue-list',
    template: `
        <jb-issue [issue]="issue" *ngFor="#issue of issues">issue content</jb-issue>
    `,
    directives: [IssueComponent],
    styles: [
        ':host {display: flex; flex-direction: column;width: 100%;}',
        'jb-issue {}',
    ],
})
export class IssueListComponent {
    @Input() issues:Issue[];
}

@Component({
    selector: 'status-columns',
    template: `
        <issue-list *ngFor="#status of statuses" [issues]="issues|statusFilter:{name:status}">...</issue-list>
    `,
    directives: [IssueListComponent],
    pipes: [StatusFilterPipe],
    styles: [':host {width: 100%; display: flex; flex-direction: row;}']
})
export class StatusColumnsComponent {
    @Input() issues:Issue[];
    @Input() statuses:string[];
}