import { useState } from "react";
import ProjectSideBar from "./component/ProjectSideBar";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectSelected from "./component/ProjectSelected";

function App() {
  // const [projectData, setProjectData] = useState({
  //   title: "",
  //   description: "",
  //   dueDate: "",
  // });
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    taskList: [],
  });

  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function addNewProject(data) {
    setProjectState((prevState) => {
      const newProject = {
        ...data,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function cancleProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function deleteProject(id) {
    setProjectState((prev) => {
      const remaningProject = prev.projects.filter(
        (project) => project.id !== id
      );
      return {
        projects: remaningProject,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        task: task,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        taskList: [newTask, ...prevState.taskList],
      };
    });
    console.log(projectState.taskList);
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const newTaskList = prevState.taskList.filter(
        (task) => task.id !== taskId
      );
      console.log(newTaskList);
      return {
        ...prevState,
        taskList: newTaskList,
      };
    });
    console.log(projectState.taskList);
  }

  console.log(projectState);
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <ProjectSelected
      projects={selectedProject}
      selectProjectId={projectState.selectedProjectId}
      deleteSelectedProject={deleteProject}
      addTask={handleAddTask}
      deleteTask={handleDeleteTask}
      taskList={projectState.taskList}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        saveNewProject={addNewProject}
        projecctDetails={projectState}
        cancleProjectSave={cancleProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className=" flex gap-8 h-screen my-8">
        <ProjectSideBar
          onStartAddProject={handleStartAddProject}
          menuContent={projectState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
