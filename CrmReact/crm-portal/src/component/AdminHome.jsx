import LoggedInHeader from "./LoggedInHeader";
import AdminSideBar from "./AdminSideBar";
export default function AdminHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-10">
            <div className="row">
              <LoggedInHeader></LoggedInHeader>
            </div>
            <div className="row">
              <div className="container">
                <h1>Admin Home</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
