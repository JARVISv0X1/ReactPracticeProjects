export default function SideBar({
  addProject,
  menuItems,
  onSelect,
  createProject,
}) {
  return (
    <>
      <div className="min-h-screen bg-slate-700">
        <div className="header space-x-2 pt-8 ">
          <h1 className="">Sidebar</h1>
          <button
            onClick={createProject}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Project
          </button>
        </div>
        <div className="menuItems">
          <ul>
            {menuItems.map((menuList, index) => {
              return (
                <>
                  <li className="border-2 mt-4" key={index}>
                    <button onClick={onSelect}>{menuList}</button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
