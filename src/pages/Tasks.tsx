import Navbar from "../components/Navbar";

const Tasks = () => {
    return (
        <>
            <Navbar />

            <div className="p-6">

                <h2 className="text-2xl font-bold mb-4">
                    My Tasks
                </h2>

                <div className="bg-white shadow rounded p-4">
                    No tasks yet...
                </div>

            </div>
        </>
    );
};

export default Tasks;
