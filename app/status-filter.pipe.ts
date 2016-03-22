import {Pipe, PipeTransform} from "angular2/core";
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