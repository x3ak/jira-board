import {Component, Input} from "angular2/core";
@Component({
    selector: 'issue-assignee',
    template: `
        <img [src]="assignee?.avatarUrls['24x24']" [title]="assignee.displayName" />
    `,
    styles: [
        'img {border-radius: 4px;}',
    ]
})
export class IssueAssigneeComponent {
    @Input() assignee:any;

}
