import Button from "./Button";
export default function ProjectSideBar({
  onStartAddProject,
  menuContent,
  onSelectProject,
  selectProjectId,
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {menuContent.map((menuItems) => {
            let cssClases =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
            if (menuItems.id === selectProjectId) {
              cssClases = cssClases + " bg-stone-800 text-stone-200";
            } else {
              cssClases = cssClases + " text-stone-400";
            }
            return (
              <li key={menuItems.id}>
                <button
                  onClick={() => onSelectProject(menuItems.id)}
                  className={cssClases}
                >
                  {menuItems.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
