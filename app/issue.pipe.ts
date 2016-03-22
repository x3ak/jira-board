import {Pipe, PipeTransform} from "angular2/core";

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