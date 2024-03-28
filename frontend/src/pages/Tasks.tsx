import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import TaskItem from "../components/TaskItem";
import { fetchTasks } from "../service";
type TTask = {
  id: number;
  body: string;
  priority: number;
  completed: boolean;
};
function Tasks() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const getTasks = async () => {
    const tasks = await fetchTasks();
    setTasks(tasks);
  };

  const handleTaskCheck = (taskId: number, completed: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, completed } : task))
    );
    if (navigator.onLine) {
      getTasks();
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Layout>
      {/* tags header */}
      <div className="flex gap-2 mb-4">
        <button className="p-2 px-3 bg-green-200 flex rounded-full text-black">
          Todo
        </button>
        <button className="p-2 px-3 bg-gray-800 flex rounded-full text-white">
          In Progress
        </button>
        <button className="p-2 px-3 bg-gray-800 flex rounded-full text-white">
          Done
        </button>

        <Link
          to="/create"
          className="bg-yellow-200 flex rounded-full h-fit my-auto p-2 
        text-black ml-auto"
        >
          <IoAdd className="text-xl" />
        </Link>
      </div>

      {/* tasks */}
      <div className="space-y-2">
        {tasks.map((task: TTask, index) => (
          <TaskItem
            id={task.id}
            key={index + "task"}
            body={task.body}
            completed={task.completed}
            priority={task.priority}
            onCheck={(completed) => handleTaskCheck(task.id, completed)}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Tasks;
