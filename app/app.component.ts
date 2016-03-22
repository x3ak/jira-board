import {Component, Input} from 'angular2/core';
import {IssueService} from "./issue.service";
import {Issue} from "./issue";
import {StatusFilterPipe} from "./status-filter.pipe";
import {IssueListComponent} from "./issue-list.component";

@Component({
    selector: 'my-app',
    template: `<h3>Board:</h3>

<table>
    <tr>
        <td>Open</td>
        <td>In Progress</td>
        <td>Resolved</td>
    </tr>
    <tr>
        <td>
            <issue-list [issues]="issues|statusFilter:{name:'Open'}"></issue-list>
        </td>
        <td>
            <issue-list [issues]="issues|statusFilter:{name:'In Progress'}"></issue-list>
        </td>
        <td>
            <issue-list [issues]="issues|statusFilter:{name:'Resolved'}"></issue-list>
        </td>
    </tr>
</table>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `,
    providers: [IssueService],
    directives: [IssueListComponent],
    pipes: [StatusFilterPipe],

})
export class AppComponent {
    constructor (private _issueService: IssueService) {}
    errorMessage: string;
    issues: Issue[];
    ngOnInit() { this.getIssues(); }
    getIssues() {
        this._issueService.getIssues()
            .subscribe(issues => {
                this.issues = issues;
            },
            error =>  this.errorMessage = <any>error);
    }
}


// // import {IssueService} from "../issue.service";
// // import {Issue} from "../issue";
//
// @Component({
//     selector: 'jira-board',
//     template: `
//   <h3>Board:</h3>
//   <ul>
//     <li *ngFor="#issue of issues">
//       {{ issue.key }}
//     </li>
//   </ul>
//   <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
//   `,
// })
// export class JiraBoardComponent // implements OnInit
// {
//     // constructor (private _service: IssueService) {}
//     // errorMessage: string;
//     // issues: Issue[];
//     // ngOnInit() { this.getIssues(); }
//     // getIssues() {
//     //     this._service.getIssues()
//     //         .subscribe(
//     //             issues => this.issues = issues,
//     //             error =>  this.errorMessage = <any>error);
//     // }
// }