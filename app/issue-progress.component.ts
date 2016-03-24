
import {Progress, Issue} from "./issue";
import {Input, OnInit, Component} from "angular2/core";
@Component({
    selector: 'issue-progress',
    template: `
        <div class="progress-bar" *ngIf="issue.fields.progress.total > 0" [style.width]="issue.fields.progress.percent + '%'"></div>
        <div class="overflow-bar" *ngIf="overflow > 0" [style.width]="overflow + '%'"></div>
    `,
    styles: [
        ':host {display: block; height: 10px; position: relative; background-color: #89afd7;}',
        // '.total {position: absolute; top: 0; left: 0;}',
        '.progress-bar {position: absolute; top: 0; bottom: 0; left: 0;; background-color: green;}',
        '.overflow-bar {position: absolute; top: 0; bottom: 0; left: 0;; background-color: red;}',
    ]
})
export class IssueProgressComponent implements OnInit {
    @Input() issue:Issue;

    overflow:number = 0;

    ngOnInit():any {

        if (this.issue.fields.aggregatetimeoriginalestimate < this.issue.fields.aggregatetimespent) {
            this.overflow = (1 - this.issue.fields.aggregatetimeoriginalestimate / this.issue.fields.aggregatetimespent) * 100;
        }

        return null;
    }
}