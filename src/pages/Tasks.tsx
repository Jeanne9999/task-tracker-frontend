import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/task";
import CreateTaskModal from "../components/CreateTaskModal";
import { useState } from "react";


const Tasks = () => {

    const demoTasks: Task[] = [
        {
            id: 1,
            title: "Learn Spring Security",
            description: "Finish JWT authentication",
            status: "TODO",
        },
        {
            id: 2,
            title: "React Dashboard",
            description: "Build task UI",
            status: "IN_PROGRESS",
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState<Task[]>(demoTasks);


    return (
        <>
            <Navbar />

            <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold">
                        My Tasks
                    </h2>

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        + New Task
                    </button>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={(t) => console.log("Edit", t)}
                            onDelete={(id) => console.log("Delete", id)}
                        />
                    ))}

                </div>
            </div>

            {showModal && (
                <CreateTaskModal
                    onClose={() => setShowModal(false)}
                    onCreate={(newTask) => {
                        setTasks((prev) => [
                            ...prev,
                            {
                                id: Date.now(),
                                ...newTask,
                            },
                        ]);
                    }}
                />
            )}

        </>
    );
};

export default Tasks;
