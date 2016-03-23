import {Component, Input} from 'angular2/core';
import {IssueService} from "./issue.service";
import {Issue} from "./issue";
import {IssueListComponent} from "./issue-list.component";
import {StatusFilterPipe, NotSubTaskPipe, SwimLanePipe, SubTaskOfPipe, FirstLevelIssuePipe} from "./issue.pipe";
import {SwimLaneComponent} from "./swim-lane.component";

@Component({
    selector: 'my-app',
    template: `
<label>
    <input type="checkbox" [(ngModel)]="showSubTasks"> include sub tasks
</label>

<div class="board">
    <swim-lane *ngFor="#issue of issues|swimLane" [subtasks]="issues|subTaskOf:issue" [statuses]="statuses" [issue]="issue">...</swim-lane>
    <div class="issue-lists">
        <issue-list *ngFor="#status of statuses" [issues]="issues|firstLevelIssue|statusFilter:{name:status}">...</issue-list>
    </div>
</div>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `,
    providers: [IssueService],
    directives: [IssueListComponent,SwimLaneComponent],
    pipes: [StatusFilterPipe, NotSubTaskPipe, SwimLanePipe, SubTaskOfPipe, FirstLevelIssuePipe],
    styles: [
        '.board {display: flex; flex-direction: column;}',
        'swim-lane {width: 100%; margin-bottom: 10px}',
        '.issue-lists {width: 100%; display: flex; flex-direction: row; border-top: 1px solid red}'
    ]

})
export class AppComponent {
    errorMessage: string;
    issues: Issue[];
    statuses:string[] = [];
    showSubTasks:boolean = false;
    constructor (private _issueService: IssueService) {}
    ngOnInit() {
        this.getIssues();
    }
    getIssues() {
        this._issueService.getIssues()
            .subscribe(issues => {
                this.issues = issues;

                this.issues.forEach(issue => {
                    var status:string = issue.fields.status.name;
                    if (this.statuses.indexOf(status) == -1) {
                        this.statuses.push(status);
                    }
                });
            },
            error =>  this.errorMessage = <any>error);
    }
}