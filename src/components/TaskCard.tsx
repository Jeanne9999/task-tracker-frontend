import React from "react";
import type { Task } from "../types/task";


interface Props {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case "TODO":
            return "bg-yellow-100 text-yellow-700";

        case "IN_PROGRESS":
            return "bg-blue-100 text-blue-700";

        case "DONE":
            return "bg-green-100 text-green-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
};

const TaskCard: React.FC<Props> = ({ task, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-sm rounded-xl p-4 border hover:shadow-lg transition">

            <h3 className="text-lg font-semibold mb-1">
                {task.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">
                {task.description}
            </p>

            <div className="flex justify-between items-center">

        <span
            className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(
                task.status
            )}`}
        >
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


