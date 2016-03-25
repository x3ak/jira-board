import {Issue, IssueFields} from "./issue";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class IssueService {
    constructor (private http: Http) {}

    private _jiraUrl = 'http://jira-report.cloud.rdlp/api-proxy.php';
    private _filterID:number = 11401;

    private _fields:string[] = [
        'status',
        'issuetype',
        'assignee',
        'summary',
        'parent',
        'subtasks',
        'fixVersions',
        'progress',
        'aggregatetimeoriginalestimate',
        'aggregatetimespent',
    ];

    // private _fields = 'status,issuetype,assignee,summary,parent,subtasks,fixVersions';
    // private _fields:string[] = ['*all'];
    // private _url = 'http://jira-report.cloud.rdlp/api-proxy.php/search?fields=status,issuetype,assignee,summary,parent,subtasks,fixVersions&jql=project%20=%20RDLP%20AND%20fixVersion%20=%207.0.0.0%20AND%20labels%20=%20ITERATION-1%20ORDER%20BY%20status%20ASC,%20priority%20DESC,%20key%20DESC';
    private _searchUrl = '/search?maxResults=200&fields=' + this._fields.join(',');
    // private _url = 'search.json';

    getIssues (jql:string) {
        return this.http.get(this._jiraUrl + this._searchUrl + '&jql=' + jql)
            .map(res => <Issue[]> res.json().issues)
            .catch(this.handleError);

    }

    getJQLFromFilter () {
        return this.http.get(this._jiraUrl + '/filter/' + this._filterID)
            .map(res => <Issue[]> res.json().jql)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}