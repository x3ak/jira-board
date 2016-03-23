import {Component, Input} from 'angular2/core';
import {IssueService} from "./issue.service";
import {Issue, FixVersion} from "./issue";
import {IssueListComponent, StatusColumnsComponent} from "./issue-list.component";
import {
    StatusFilterPipe, NotSubTaskPipe, SwimLanePipe, SubTaskOfPipe, FirstLevelIssuePipe,
    EntersInVersionPipe
} from "./issue.pipe";
import {SwimLaneComponent} from "./swim-lane.component";
import {VersionComponent} from "./version.component";

@Component({
    selector: 'my-app',
    template: `
<div class="board">
    <div class="column-names">
        <div *ngFor="#status of statuses" class="column-name">{{status}}</div>
    </div>
    <version *ngFor="#version of versions" [issues]="issues|entersInVersion:version" [statuses]="statuses" [version]="version">..</version>
</div>

<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `,
    providers: [IssueService],
    directives: [VersionComponent],
    pipes: [EntersInVersionPipe],
    // directives: [IssueListComponent, SwimLaneComponent, StatusColumnsComponent],
    // pipes: [StatusFilterPipe, NotSubTaskPipe, SwimLanePipe, SubTaskOfPipe, FirstLevelIssuePipe],
    styles: [
        '.board {display: flex; flex-direction: column;margin-top: 2em}',
        'swim-lane {width: 100%; margin-bottom: 10px}',
        '.column-names {width: 100%; display: flex; flex-direction: row;}',
        '.column-names {position: absolute;top: 0;bottom: 0;left: 0;right: 0;}',
        '.column-name {width: 100%;}',
    ]

})
export class AppComponent {
    errorMessage: string;
    issues: Issue[];
    statuses:string[] = [];
    versions:string[] = [];
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

                    issue.fields.fixVersions.forEach(fixVersion => {
                        if (this.versions.indexOf(fixVersion.name) == -1) {
                            this.versions.push(fixVersion.name);
                        }
                    });

                });
            },
            error =>  this.errorMessage = <any>error);
    }
}