import {Component, Input} from "angular2/core";
import {SwimLaneComponent} from "./swim-lane.component";
import {StatusColumnsComponent} from "./issue-list.component";
import {SwimLanePipe, FirstLevelIssuePipe, SubTaskOfPipe} from "./issue.pipe";
import {Issue} from "./issue";
@Component({
    selector: 'version',
    template: `
        <h2>{{version}}</h2>
        <swim-lane *ngFor="#issue of issues|swimLane" [subtasks]="issues|subTaskOf:issue" [statuses]="statuses" [issue]="issue">...</swim-lane>
        <status-columns [issues]="issues|firstLevelIssue" [statuses]="statuses">...</status-columns>
    `,
    directives: [SwimLaneComponent, StatusColumnsComponent],
    pipes: [SwimLanePipe, FirstLevelIssuePipe, SubTaskOfPipe],
    styles: [
        'swim-lane {margin-bottom: 25px;display: block}',
        '.title {border-bottom: 1px solid silver;}',
        'h2 {background-color: rgba(255, 149, 71, 0.17);border: 1px solid rgba(255, 149, 71, 0.17); margin-bottom: 4px; padding: 5px;}',
    ],

})
export class VersionComponent {
    @Input() version:string;
    @Input() statuses:string[];
    @Input() issues:Issue[];
}