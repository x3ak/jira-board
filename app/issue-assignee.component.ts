import {Component, Input} from "angular2/core";
@Component({
    selector: 'issue-assignee',
    template: `
        <img [src]="assignee?.avatarUrls['48x48']" [title]="assignee.displayName" />
    `,
    styles: ['img {border-radius: 50%}']
})
export class IssueAssigneeComponent {
    @Input() assignee:any;

}
