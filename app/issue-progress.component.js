System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var IssueProgressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IssueProgressComponent = (function () {
                function IssueProgressComponent() {
                    this.overflow = 0;
                }
                IssueProgressComponent.prototype.ngOnInit = function () {
                    if (this.issue.fields.aggregatetimeoriginalestimate < this.issue.fields.aggregatetimespent) {
                        this.overflow = (1 - this.issue.fields.aggregatetimeoriginalestimate / this.issue.fields.aggregatetimespent) * 100;
                    }
                    return null;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IssueProgressComponent.prototype, "issue", void 0);
                IssueProgressComponent = __decorate([
                    core_1.Component({
                        selector: 'issue-progress',
                        template: "\n        <div class=\"progress-bar\" *ngIf=\"issue.fields.progress.total > 0\" [style.width]=\"issue.fields.progress.percent + '%'\"></div>\n        <div class=\"overflow-bar\" *ngIf=\"overflow > 0\" [style.width]=\"overflow + '%'\"></div>\n    ",
                        styles: [
                            ':host {display: block; height: 5px; position: relative; background-color: #89afd7;}',
                            // '.total {position: absolute; top: 0; left: 0;}',
                            '.progress-bar {position: absolute; top: 0; bottom: 0; left: 0;; background-color: green;}',
                            '.overflow-bar {position: absolute; top: 0; bottom: 0; left: 0;; background-color: red;}',
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IssueProgressComponent);
                return IssueProgressComponent;
            }());
            exports_1("IssueProgressComponent", IssueProgressComponent);
        }
    }
});
//# sourceMappingURL=issue-progress.component.js.map