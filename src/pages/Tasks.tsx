import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/task";



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


    return (
        <>
            <Navbar />

            <div className="p-6">

                <h2 className="text-2xl font-bold mb-4">
                    My Tasks
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {demoTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={(t) => console.log("Edit", t)}
                            onDelete={(id) => console.log("Delete", id)}
                        />
                    ))}

                </div>


            </div>
        </>
    );
};

export default Tasks;
