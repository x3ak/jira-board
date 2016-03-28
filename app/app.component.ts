import {Component, Input} from 'angular2/core';
import {IssueService} from "./issue.service";
import {Issue, FixVersion} from "./issue";
import {
    EntersInVersionPipe
} from "./issue.pipe";
import {VersionComponent} from "./version.component";
import {FilterPickerComponent} from "./filter-picker.component";

@Component({
    selector: 'my-app',
    template: `
<!--<filter-picker>asdasdds</filter-picker>-->

<div class="board">
    <div class="column-names">
        <div *ngFor="#status of statuses" class="column-name">{{status}}</div>
    </div>
    <div class="scroll-parent">
        <div class="scrolling">
            <version *ngFor="#version of versions" [issues]="issues|entersInVersion:version" [statuses]="statuses" [version]="version">..</version>
        </div>
    </div>
</div>

<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `,
    providers: [IssueService],
    directives: [VersionComponent, FilterPickerComponent],
    pipes: [EntersInVersionPipe],
    styles: [
        '.board {display: flex; flex-direction: column; margin-top: 10px}',
        '.column-names {width: 100%; display: flex; flex-direction: row;}',
        '.column-names {position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index: 1;font-size: 2em;text-align: center}',
        '.column-name {width: 100%; }',
        '.scroll-parent {z-index: 2;padding-top: 2.2em;height: 100%; }',
        '.scrolling {height: 100%; overflow-y: scroll;z-index: 3;margin-right: -16px;border-top: 2px solid silver;}',
    ]

})
export class AppComponent {
    errorMessage: string;
    issues: Issue[];
    filterId:number = 11401;
    statuses:string[] = ['Open', 'Reopened', 'Paused', 'In Progress', 'Resolved', 'Closed'];
    versions:string[] = [];
    constructor (private _issueService: IssueService) {}
    handleFilterChange (arg) {
        console.log('handleFilterChange', arg);
    }
    ngOnInit() {
        this.getIssues();
    }
    getIssues() {
        this._issueService.getJQLFromFilter(this.filterId).subscribe(jql => {
            this._issueService.getIssues(jql).subscribe(issues => {
                    this.issues = issues;

                    this.issues.forEach(issue => {
                        issue.fields.fixVersions.forEach(fixVersion => {
                            if (this.versions.indexOf(fixVersion.name) == -1) {
                                this.versions.push(fixVersion.name);
                            }
                        });

                    });
                },
                error =>  this.errorMessage = <any>error);
            },
            error =>  this.errorMessage = <any>error
        );
    }
}