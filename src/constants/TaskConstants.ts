export const TaskTypeConstant = {
    SAMPLE_TASK: "SAMPLE_TASK"
} as const;

export type TaskType = keyof typeof TaskTypeConstant;