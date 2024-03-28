import toast from "react-hot-toast";
import { MdComment } from "react-icons/md";
import { editTask } from "../service";

type Props = {
  id: number;
  body: string;
  priority: number;
  completed: boolean;
  onCheck: (value: boolean) => void;
};

function TaskItem({ id, body, priority, completed, onCheck }: Props) {
  const syncCheck = async (taskCompleted: boolean) => {
    console.log(id);
    try {
      await editTask(id, taskCompleted);
      onCheck(taskCompleted);
      toast.success("Saved the changes!");
    } catch (err) {
      if (!navigator.onLine) {
        onCheck(taskCompleted);
        return toast.success(
          "You're offline! changes will be synced when you're online again."
        );
      }
      toast.error("Failed to save changes!");
    }
  };

  const handleCheck = () => {
    syncCheck(!completed);
  };

  return (
    <div className="bg-[#1f1f1f] p-5 w-full rounded-xl">
      <p className="text-gray-400 text-xs">Priority: {priority}</p>
      <div className="flex w-full mt-2 justify-between">
        <p className="flex grow text-gray-200 text-xl">{body}</p>
        <input
          onChange={() => handleCheck()}
          checked={completed}
          type="checkbox"
          className="m-5 h-5 inline-block my-auto cursor-pointer"
        />
      </div>

      <div className="mt-4 w-fit ml-auto flex gap-2">
        <div className="text-sm flex">
          <MdComment className="my-auto mr-2" />
          <span className="inline-block my-auto">4</span>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
