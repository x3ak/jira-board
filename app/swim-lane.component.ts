import {Component, Input, OnInit} from "angular2/core";
import {Issue} from "./issue";
import {IssueListComponent, StatusColumnsComponent} from "./issue-list.component";
import {IssueComponent} from "./issue.component";
import {StatusFilterPipe} from "./issue.pipe";
@Component({
    selector: 'swim-lane',
    template: `
    <div class="title">{{issue.key}} : {{issue.fields.summary}}</div>
    <status-columns [issues]="subtasks" [statuses]="statuses">...</status-columns>
    `,
    styles: [
        ':host {position: relative;}',
        '.issue-lists {display: flex; flex-direction: row}',
        '.title {border-bottom: 1px solid silver;}',
    ],
    directives: [IssueListComponent, IssueComponent, StatusColumnsComponent],
    pipes: [StatusFilterPipe],
})
export class SwimLaneComponent implements OnInit {
    @Input() issue:Issue;
    @Input() subtasks:Issue[];
    @Input() statuses:string[];

    ngOnInit():any {
        console.log(this.subtasks);
        return null;
    }
}