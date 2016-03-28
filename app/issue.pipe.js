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
    var NotSubTaskPipe, FirstLevelIssuePipe, StatusFilterPipe, SwimLanePipe, SubTaskOfPipe, EntersInVersionPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotSubTaskPipe = (function () {
                function NotSubTaskPipe() {
                }
                NotSubTaskPipe.prototype.transform = function (value, args) {
                    if (value) {
                        var includeSubTask_1 = args[0];
                        return value.filter(function (issue) { return issue.fields.issuetype.subtask && includeSubTask_1 || !issue.fields.issuetype.subtask; });
                    }
                    return null;
                };
                NotSubTaskPipe = __decorate([
                    core_1.Pipe({
                        name: 'includeSubTask'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotSubTaskPipe);
                return NotSubTaskPipe;
            }());
            exports_1("NotSubTaskPipe", NotSubTaskPipe);
            FirstLevelIssuePipe = (function () {
                function FirstLevelIssuePipe() {
                }
                FirstLevelIssuePipe.prototype.transform = function (value, args) {
                    if (value) {
                        return value.filter(function (issue) { return issue.fields.subtasks.length == 0; });
                    }
                    return null;
                };
                FirstLevelIssuePipe = __decorate([
                    core_1.Pipe({
                        name: 'firstLevelIssue'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstLevelIssuePipe);
                return FirstLevelIssuePipe;
            }());
            exports_1("FirstLevelIssuePipe", FirstLevelIssuePipe);
            StatusFilterPipe = (function () {
                function StatusFilterPipe() {
                }
                StatusFilterPipe.prototype.transform = function (value, args) {
                    if (value) {
                        var filterParam_1 = args[0];
                        return value.filter(function (issue) { return issue.fields.status.name == filterParam_1.name; });
                    }
                    return null;
                };
                StatusFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'statusFilter',
                        pure: false,
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatusFilterPipe);
                return StatusFilterPipe;
            }());
            exports_1("StatusFilterPipe", StatusFilterPipe);
            SwimLanePipe = (function () {
                function SwimLanePipe() {
                }
                SwimLanePipe.prototype.transform = function (value, args) {
                    if (value) {
                        return value.filter(function (issue) { return issue.fields.subtasks.length > 0; });
                    }
                    return null;
                };
                SwimLanePipe = __decorate([
                    core_1.Pipe({
                        name: 'swimLane',
                        pure: false,
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwimLanePipe);
                return SwimLanePipe;
            }());
            exports_1("SwimLanePipe", SwimLanePipe);
            SubTaskOfPipe = (function () {
                function SubTaskOfPipe() {
                }
                SubTaskOfPipe.prototype.transform = function (value, args) {
                    var parentIssue = args[0];
                    if (value && parentIssue) {
                        return value.filter(function (issue) {
                            if (issue.fields.parent) {
                                return issue.fields.parent.id == parentIssue.id;
                            }
                            else {
                                return false;
                            }
                        });
                    }
                    return null;
                };
                SubTaskOfPipe = __decorate([
                    core_1.Pipe({
                        name: 'subTaskOf',
                        pure: false,
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubTaskOfPipe);
                return SubTaskOfPipe;
            }());
            exports_1("SubTaskOfPipe", SubTaskOfPipe);
            EntersInVersionPipe = (function () {
                function EntersInVersionPipe() {
                }
                EntersInVersionPipe.prototype.transform = function (value, args) {
                    var filterVersion = args[0];
                    if (value && filterVersion) {
                        return value.filter(function (issue) {
                            if (issue.fields.fixVersions.length > 0) {
                                var found = false;
                                issue.fields.fixVersions.forEach(function (fixVersion) {
                                    if (fixVersion.name == filterVersion) {
                                        found = true;
                                        return true;
                                    }
                                });
                                return found;
                            }
                            else {
                                return false;
                            }
                        });
                    }
                    return null;
                };
                EntersInVersionPipe = __decorate([
                    core_1.Pipe({
                        name: 'entersInVersion',
                    }), 
                    __metadata('design:paramtypes', [])
                ], EntersInVersionPipe);
                return EntersInVersionPipe;
            }());
            exports_1("EntersInVersionPipe", EntersInVersionPipe);
        }
    }
});
//# sourceMappingURL=issue.pipe.js.map