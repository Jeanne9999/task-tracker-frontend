import React from "react";
import type { Task } from "../types/task";


interface Props {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskCard: React.FC<Props> = ({ task, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">

            <h3 className="text-lg font-semibold mb-1">
                {task.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">
                {task.description}
            </p>

            <div className="flex justify-between items-center">

        <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100">
          {task.status}
        </span>

                <div className="flex gap-2">

                    <button
                        onClick={() => onEdit(task)}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(task.id)}
                        className="text-red-600 hover:underline text-sm"
                    >
                        Delete
                    </button>

                </div>
            </div>

        </div>
    );
};

export default TaskCard;


