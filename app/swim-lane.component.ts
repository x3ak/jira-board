import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
import {IssueListComponent, StatusColumnsComponent} from "./issue-list.component";
import {IssueComponent} from "./issue.component";
import {StatusFilterPipe} from "./issue.pipe";
import {JiraLinkComponent} from "./jira-link.component";
@Component({
    selector: 'swim-lane',
    template: `
    <div class="title"><jira-link [issue]="issue">.</jira-link> : {{issue.fields.summary}}</div>
    <status-columns [issues]="subtasks" [statuses]="statuses">...</status-columns>
    `,
    styles: [
        ':host {position: relative; background-color: rgba(0,0,255,0.2); border: 1px solid rgba(0,0,255,0.2);}',
        '.issue-lists {display: flex; flex-direction: row}',
        '.title {border-bottom: 1px solid rgba(0,0,255,0.2); padding: 5px;    font-weight: bold; }',
    ],
    directives: [IssueListComponent, IssueComponent, StatusColumnsComponent, JiraLinkComponent],
    pipes: [StatusFilterPipe],
})
export class SwimLaneComponent {
    @Input() issue:Issue;
    @Input() subtasks:Issue[];
    @Input() statuses:string[];
}