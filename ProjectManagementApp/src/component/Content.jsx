import NoProjectDisplay from "./NoProjectDisplay";
import ViewProjectDetails from "./ViewProjectDetails";
import EnterNewProjectDetails from "./EnterNewProjectDetails";
export default function Content({ menuItems, projectSelected, addProject }) {
  return (
    <>
      <h3>App Content</h3>
      {projectSelected ? <ViewProjectDetails /> : <NoProjectDisplay />}

      {addProject && <EnterNewProjectDetails />}
    </>
  );
}
