import { useState } from "react";
import ProjectSideBar from "./component/ProjectSideBar";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";

function App() {
  const [addProject, setAddProject] = useState(0);

  function handleAddProjectButn() {
    setAddProject((prev) => prev + 1);
  }
  return (
    <>
      <main className=" flex gap-8 h-screen my-8">
        <ProjectSideBar onSelect={handleAddProjectButn} />
        {addProject > 0 ? (
          <NewProject />
        ) : (
          <NoProjectSelected onSelect={handleAddProjectButn} />
        )}
      </main>
    </>
  );
}

export default App;
