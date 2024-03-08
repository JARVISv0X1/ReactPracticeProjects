import { useEffect, useState } from "react";
import NewTask from "./NewTask";

export default function Task({ addTask, projectsId, taskList, deleteTask }) {
  let [updatedTask, setUpdatedTask] = useState([]);
  useEffect(() => {
    setUpdatedTask(taskList);
  }, [taskList]);
  return (
    <>
      <section>
        <h2 className="text-2xl text-bold mb-4 text-stone-400">Tasks</h2>
        <NewTask addTask={addTask} projectsId={projectsId}></NewTask>

        {updatedTask.length === 0 ? (
          <p className="text-stone-400 my-4">
            This Project does not have any task
          </p>
        ) : (
          <div className="mt-6 text-2xl text-slate-900">
            <h2>To do Task</h2>
            <ul className=" text-xl text-bold mb-4 text-slate-600">
              {updatedTask.map((tasks) => {
                return (
                  <li key={tasks.id} className="my-4 flex justify-between">
                    {tasks.task}
                    {tasks.id === undefined ? (
                      ""
                    ) : (
                      <button
                        className="px-2 border-2 rounded-sm border-red-500 text-red-500 hover:text-red-600 hover:border-red-600"
                        onClick={() => deleteTask(tasks.id)}
                      >
                        Delete
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
