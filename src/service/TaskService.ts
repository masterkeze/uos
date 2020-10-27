import { TaskType } from "../constants/TaskConstants";
import { Task } from "../entity/Task";

export abstract class TaskService {
    abstract createTask<T extends TaskType>(taskType: TaskType, parent?: string): Task<T>;
    abstract getTask<T extends TaskType>(id: string): Task<T>;
}