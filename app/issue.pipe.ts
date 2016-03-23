import {Pipe, PipeTransform} from "angular2/core";
import {Issue} from "./issue";

@Pipe({
    name: 'includeSubTask'
})
export class NotSubTaskPipe implements PipeTransform {

    transform(value:any[], args:any[]):any {

        if (value) {
            let [includeSubTask] = args;
            return value.filter(issue => {return issue.fields.issuetype.subtask && includeSubTask || !issue.fields.issuetype.subtask});
        }
        return null;
    }
}

@Pipe({
    name: 'firstLevelIssue'
})
export class FirstLevelIssuePipe implements PipeTransform {

    transform(value:any[], args:any[]):any {

        if (value) {
            return value.filter(issue => {return issue.fields.subtasks.length == 0});
        }
        return null;
    }
}

@Pipe({
    name: 'statusFilter',
    pure: false,
})
export class StatusFilterPipe implements PipeTransform {
    transform(value:any[], args:any[]):any {

        if (value) {
            let [filterParam] = args;
            return value.filter(issue => {return issue.fields.status.name == filterParam.name});
        }
        return null;
    }
}

@Pipe({
    name: 'swimLane',
    pure: false,
})
export class SwimLanePipe implements PipeTransform {
    transform(value:any[], args:any[]):any {

        if (value) {
            return value.filter(issue => {return !issue.fields.subtask && issue.fields.subtasks.length > 0});
        }
        return null;
    }
}


@Pipe({
    name: 'subTaskOf',
    pure: false,
})
export class SubTaskOfPipe implements PipeTransform {
    transform(value:Issue[], args:Issue[]):any {

        let [parentIssue] = args;
        if (value && parentIssue) {

            return value.filter(issue => {
                if (issue.fields.parent) {
                    return issue.fields.parent.id == parentIssue.id;
                } else {
                    return false;
                }
            });
        }
        return null;
    }
}
