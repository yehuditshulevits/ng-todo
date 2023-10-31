export interface ITodo{
    titel: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endDate: Date| string| number;
    selected: boolean;
}