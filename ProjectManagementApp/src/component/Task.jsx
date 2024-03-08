import { useState } from "react";
import NewTask from "./NewTask";

export default function Task({ addTask, projectsId, taskList }) {
  return (
    <>
      <section>
        <h2 className="text-2xl text-bold mb-4 text-stone-400">Tasks</h2>
        <NewTask addTask={addTask} projectsId={projectsId}></NewTask>

        {taskList.length === 0 ? (
          <p className="text-stone-400 my-4">
            This Project does not have any task
          </p>
        ) : (
          <ul className="mt-16 text-2xl text-bold mb-4 text-stone-900">
            {taskList.map((tasks) => {
              return (
                <li key={tasks.id} className="my-4">
                  {tasks.task}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
