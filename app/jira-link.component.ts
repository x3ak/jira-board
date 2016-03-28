import {Component, Input} from "angular2/core";
import {Issue} from "./issue";
@Component({
    selector:'jira-link',
    template: `
        <img [src]="issue.fields.issuetype.iconUrl" /> 
        <a href="//jira.cloud.rdlp/browse/{{issue.key}}" target="_jira">{{issue.key}}</a>
    `,
})
export class JiraLinkComponent {
    @Input() issue:Issue;
}