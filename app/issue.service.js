System.register(["angular2/http", "angular2/core", 'rxjs/Rx', "rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var IssueService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            IssueService = (function () {
                function IssueService(http) {
                    this.http = http;
                    this._jiraUrl = 'http://jira-report.cloud.rdlp/api-proxy.php';
                    this._filterID = 11401;
                    this._fields = [
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
                    this._searchUrl = '/search?maxResults=200&fields=' + this._fields.join(',');
                }
                // private _url = 'search.json';
                IssueService.prototype.getIssues = function (jql) {
                    return this.http.get(this._jiraUrl + this._searchUrl + '&jql=' + jql)
                        .map(function (res) { return res.json().issues; })
                        .catch(this.handleError);
                };
                IssueService.prototype.getJQLFromFilter = function () {
                    return this.http.get(this._jiraUrl + '/filter/' + this._filterID)
                        .map(function (res) { return res.json().jql; })
                        .catch(this.handleError);
                };
                IssueService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                IssueService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], IssueService);
                return IssueService;
            }());
            exports_1("IssueService", IssueService);
        }
    }
});
//# sourceMappingURL=issue.service.js.map