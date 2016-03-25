import {Issue, IssueFields} from "./issue";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class FilterService {
    constructor (private http: Http) {}

    private _url = 'http://jira-report.cloud.rdlp/api-proxy.php/filter/favourite';

    getFilters () : Observable<any[]> {
        return this.http.get(this._url)
            .map(res => <any[]> res.json())
            .catch(this.handleError);

    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}