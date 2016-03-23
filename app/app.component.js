System.register(['angular2/core', "./issue.service", "./issue.pipe", "./version.component"], function(exports_1, context_1) {
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
    var core_1, issue_service_1, issue_pipe_1, version_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_service_1_1) {
                issue_service_1 = issue_service_1_1;
            },
            function (issue_pipe_1_1) {
                issue_pipe_1 = issue_pipe_1_1;
            },
            function (version_component_1_1) {
                version_component_1 = version_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_issueService) {
                    this._issueService = _issueService;
                    this.statuses = [];
                    this.versions = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getIssues();
                };
                AppComponent.prototype.getIssues = function () {
                    var _this = this;
                    this._issueService.getIssues()
                        .subscribe(function (issues) {
                        _this.issues = issues;
                        _this.issues.forEach(function (issue) {
                            var status = issue.fields.status.name;
                            if (_this.statuses.indexOf(status) == -1) {
                                _this.statuses.push(status);
                            }
                            issue.fields.fixVersions.forEach(function (fixVersion) {
                                if (_this.versions.indexOf(fixVersion.name) == -1) {
                                    _this.versions.push(fixVersion.name);
                                }
                            });
                        });
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div class=\"board\">\n    <div class=\"column-names\">\n        <div *ngFor=\"#status of statuses\" class=\"column-name\">{{status}}</div>\n    </div>\n    <version *ngFor=\"#version of versions\" [issues]=\"issues|entersInVersion:version\" [statuses]=\"statuses\" [version]=\"version\">..</version>\n</div>\n\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    ",
                        providers: [issue_service_1.IssueService],
                        directives: [version_component_1.VersionComponent],
                        pipes: [issue_pipe_1.EntersInVersionPipe],
                        styles: [
                            '.board {display: flex; flex-direction: column;margin-top: 2em}',
                            '.column-names {width: 100%; display: flex; flex-direction: row;}',
                            '.column-names {position: absolute;top: 0;bottom: 0;left: 0;right: 0;}',
                            '.column-name {width: 100%;}',
                        ]
                    }), 
                    __metadata('design:paramtypes', [issue_service_1.IssueService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map