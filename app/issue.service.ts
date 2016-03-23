import {Issue, IssueFields} from "./issue";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class IssueService {
    constructor (private http: Http) {}
    private _fields = 'status,issuetype,assignee,summary,parent,subtasks,fixVersions';
    // private _url = 'http://jira-report.cloud.rdlp/api-proxy.php/search?fields=status,issuetype,assignee,summary,parent,subtasks,fixVersions&jql=project%20=%20RDLP%20AND%20fixVersion%20=%207.0.0.0%20AND%20labels%20=%20ITERATION-1%20ORDER%20BY%20status%20ASC,%20priority%20DESC,%20key%20DESC';
    private _url = 'http://jira-report.cloud.rdlp/api-proxy.php/search?fields=' + this._fields + '&jql=project = RDLP AND fixVersion in (7.0.0.0, 6.14.0.0) ORDER BY status ASC, fixVersion ASC, priority DESC, key DESC';
    // private _url = 'search.json';

    getIssues () {
        return this.http.get(this._url)
            .map(res => <Issue[]> res.json().issues)
            .catch(this.handleError);

    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}