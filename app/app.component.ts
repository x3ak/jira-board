import {Component, Input} from 'angular2/core';
import {IssueService} from "./issue.service";
import {Issue} from "./issue";
import {IssueListComponent} from "./issue-list.component";
import {StatusFilterPipe, NotSubTaskPipe} from "./issue.pipe";

@Component({
    selector: 'my-app',
    template: `
<label>
    <input type="checkbox" [(ngModel)]="showSubTasks"> include sub tasks
</label>

<div class="board">
    <issue-list *ngFor="#status of statuses" [issues]="issues|includeSubTask:showSubTasks|statusFilter:{name:status}" [title]="status">
        loading...
    </issue-list>
</div>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `,
    providers: [IssueService],
    directives: [IssueListComponent],
    pipes: [StatusFilterPipe, NotSubTaskPipe],
    styles: ['.board {display: flex; align-content:stretch;} issue-list {width: 100%}']

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