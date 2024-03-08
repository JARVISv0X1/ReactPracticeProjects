import { useRef } from "react";
import Input from "./Input";
import Task from "./Task";

export default function ProjectSelected({
  projects,
  deleteSelectedProject,
  addTask,
  taskList,
  deleteTask,
}) {
  const formattedDate = new Date(projects.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {projects.title}
            </h1>
            <button
              onClick={() => deleteSelectedProject(projects.id)}
              className="px-2 border-2 rounded-sm border-red-500 text-red-500 hover:text-red-600 hover:border-red-600"
            >
              Delete Project
            </button>
          </div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre">
            {projects.description}
          </p>
        </header>

        <Task
          taskList={taskList}
          addTask={addTask}
          projectsId={projects.id}
          deleteTask={deleteTask}
        ></Task>
      </div>
    </>
  );
}
