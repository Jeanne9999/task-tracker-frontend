import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/task";
import TaskFormModal from "../components/TaskFormModal";
import { useState } from "react";
import api from "../api/axios";
import { useEffect } from "react";
import ConfirmModal from "../components/ConfirmModal";


const Tasks = () => {


    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [deletingTask, setDeletingTask] = useState<Task | null>(null);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    // const reloadTasks = async () => {
    //     const res = await api.get("/api/tasks");
    //     setTasks(res.data.content);
    // };


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await api.get("/api/tasks");

                console.log("TASKS RESPONSE:", res.data);

                setTasks(res.data.content);
            } catch (err) {
                console.error("FETCH TASKS ERROR", err);
            }
        };

        fetchTasks();
    }, []);

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

                    {Array.isArray(tasks) &&
                        tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={(t) => setEditingTask(t)}
                            onDelete={(id) => {
                                const task = tasks.find((t) => t.id ===id);
                            if (task) setDeletingTask(task);
                            }}
                        />
                    ))}

                </div>
            </div>

            {/* Create / Edit Modal */}
            {(showModal || editingTask !== null) && (
                <TaskFormModal
                    onClose={() => {
                        setShowModal(false);
                        setEditingTask(null);
                    }}

                    initialTask={editingTask || undefined}

                    onSubmit={async (taskData) => {
                        try {
                            if (editingTask !== null) {
                                // UPDATE
                                const res = await api.put(
                                    `/api/tasks/${editingTask.id}`,
                                    taskData
                                );

                                setTasks((prev) =>
                                    prev.map((t) =>
                                        t.id === editingTask.id ? res.data : t
                                    )
                                );

                            } else {
                                // CREATE
                                const res = await api.post("/api/tasks", taskData);

                                setTasks((prev) => [...prev, res.data]);
                            }

                        } catch (err) {
                            console.error("SAVE TASK ERROR", err);
                        }
                    }}
                />
            )}

            {/* Delete Confirmation */}
            {deletingTask && (
                <ConfirmModal
                    title="Delete Task"
                    message={`Are you sure you want to delete "${deletingTask.title}"?`}

                    onCancel={() => setDeletingTask(null)}

                    onConfirm={async () => {
                        try {
                            await api.delete(`/api/tasks/${deletingTask.id}`);

                            setTasks((prev) =>
                                prev.filter((t) => t.id !== deletingTask.id)
                            );

                            setDeletingTask(null);

                        } catch (err) {
                            console.error("DELETE ERROR", err);
                        }
                    }}
                />
            )}


        </>
    );
};

export default Tasks;
