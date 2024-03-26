import { createContext } from "react";

export let projectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  taskList: [],
  onStartAddProject: () => {},
  onSelectProject: () => {},
  cancleProjectSave: () => {},
  saveNewProject: () => {},
  deleteSelectedProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});
