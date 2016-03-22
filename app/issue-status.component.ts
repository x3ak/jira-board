import {Component, Input} from "angular2/core";
@Component({
    selector: 'issue-status',
    template: `
        <i>{{status.name}}</i>
    `,
})
export class IssueStatusComponent {
    @Input() status: any;
}