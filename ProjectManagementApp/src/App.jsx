import { useState } from "react";
import Content from "./component/Content";
import SideBar from "./component/SideBar";

function App() {
  let [menuItems, setMenuItems] = useState(["karan", "kumar"]);
  const [projectSelected, setProjectSelected] = useState(false);
  const [addProject, setAddProject] = useState(true);
  function createProject() {
    setAddProject((prev) => (prev = true));
    setProjectSelected((prev) => (prev = false));
  }
  function selectProject() {
    setProjectSelected((prev) => (prev = true));
    setAddProject((prev) => (prev = false));
  }
  return (
    <>
      <div className="flex flex-row space-x-2 p-0 m-0">
        <div className="basis-1/4 border-2  border-black">
          <SideBar
            createProject={createProject}
            projectSelected={projectSelected}
            menuItems={menuItems}
            onSelect={selectProject}
            addProject={addProject}
          />
        </div>
        <div className="basis-3/4 border-2 border-red-800">
          <Content
            projectSelected={projectSelected}
            createProject={createProject}
            addProject={addProject}
          />
        </div>
      </div>
    </>
  );
}

export default App;
