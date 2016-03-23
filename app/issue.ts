export interface Issue {
    id: string;
    key: string;
    fields: IssueFields;
}

export interface StatusCategory {
    key:string;
    name:string;
}

export interface FixVersion {
    name: string;
}

export interface Status {
    name:string;
    iconUrl:string;
    statusCategory:StatusCategory;
}

export interface Assignee {
    avatarUrls:any[]
    displayName:string;
}

export interface IssueFields {
    status: Status;
    issuetype: any;
    assignee: Assignee;
    summary: string;
    parent: Issue;
    subtasks: any[];
    fixVersions: FixVersion[];
}