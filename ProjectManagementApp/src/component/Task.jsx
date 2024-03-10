import NewTask from "./NewTask";

export default function Task({ addTask, projectsId, taskList, deleteTask }) {
  let projectTaskList = taskList.filter(
    (task) => task.projectId === projectsId
  );
  return (
    <>
      <section>
        <h2 className="text-2xl text-bold mb-4 text-stone-400">Tasks</h2>
        <NewTask addTask={addTask} projectsId={projectsId}></NewTask>
        {projectTaskList.length === 0 && (
          <p className="text-stone-400 my-4">
            This Project does not have any task
          </p>
        )}

        {projectTaskList.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {projectTaskList.map((task) => (
              <li className="flex justify-between my-4" key={task.id}>
                <span>{task.task}</span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
