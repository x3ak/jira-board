System.register(["angular2/core", "./issue.component"], function(exports_1, context_1) {
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
    var core_1, issue_component_1;
    var IssueListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_component_1_1) {
                issue_component_1 = issue_component_1_1;
            }],
        execute: function() {
            IssueListComponent = (function () {
                function IssueListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], IssueListComponent.prototype, "issues", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IssueListComponent.prototype, "title", void 0);
                IssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'issue-list',
                        template: "\n        <div class=\"issue-list\">\n            <h2>{{title}}</h2>\n            <jb-issue [issue]=\"issue\" *ngFor=\"#issue of issues\">issue content</jb-issue>\n        </div>\n    ",
                        directives: [issue_component_1.IssueComponent],
                        styles: ['.issue-list {display: flex; flex-direction: column; margin-right: 10px} jb-issue {margin-bottom: 10px}'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], IssueListComponent);
                return IssueListComponent;
            }());
            exports_1("IssueListComponent", IssueListComponent);
        }
    }
});
//# sourceMappingURL=issue-list.component.js.map