import logo from "../assets/no-projects.png";
export default function NoProjectDisplay() {
  return (
    <>
      <div className="w-96  mx-auto">
        <h1 className="text-3xl text-red-600 border-2  mb-10 ">
          No Project Selected
        </h1>
        <h2 className="text-3xl text-green-800">Create New Project</h2>
        <img className="my-10 w-48 mx-auto" src={logo} alt="" />
      </div>
      <div className="div"></div>
    </>
  );
}
