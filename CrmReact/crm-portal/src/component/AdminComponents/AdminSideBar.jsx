import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/pieChart" />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem component={<Link to="/lineChart" />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/pieChart" />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem component={<Link to="/lineChart" />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/pieChart" />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem component={<Link to="/lineChart" />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/pieChart" />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem component={<Link to="/lineChart" />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/pieChart" />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem component={<Link to="/lineChart" />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/documentation" />}>
            Documentation
          </MenuItem>
          <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
