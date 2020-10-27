import { TaskType } from "../constants/TaskConstants";
import { makeId } from "../utils/Id";

export abstract class Task<T extends TaskType = TaskType> {

    private readonly _id: string;

    constructor() {
        this._id = makeId();
    }

    get id(): string {
        return this._id;
    }

    abstract get type(): T;

    start(): void {
        return;
    }

    abstract run(): void;

    terminate(): void {
        return;
    }
}