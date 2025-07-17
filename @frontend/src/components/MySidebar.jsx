// import React from 'react';
// import { ProSidebarProvider, Sidebar, Menu, MenuItem , SubMenu } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';


// const MySidebar = () => {
//   return (

//     <ProSidebarProvider>
//   <Sidebar style={{
//       position: 'fixed',
//       height: '100vh',
//       overflowY: 'auto',
//       // backgroundColor:'green' 
//       // ensures scroll if content overflows
      
//     }}>
//     <Menu menuItemStyles={{
//       button: { "&.active": { backgroundColor: '#13395e', color: '#b6c8d9' } }
//     }}>
//       <SubMenu label="Dashboard">
//         <MenuItem>Overview</MenuItem>
//         <MenuItem>Stats</MenuItem>
//       </SubMenu>
//       <SubMenu label="Employees">
//         <MenuItem>List</MenuItem>
//         <MenuItem>Add New</MenuItem>
//       </SubMenu>
//       <SubMenu label="Departments">
//         <MenuItem>HR</MenuItem>
//         <MenuItem>Finance</MenuItem>
//       </SubMenu>
//       <SubMenu label="Leaves">
//         <MenuItem>Apply</MenuItem>
//         <MenuItem>History</MenuItem>
//       </SubMenu>
//       <SubMenu label="Salary">
//         <MenuItem>Pay Slips</MenuItem>
//         <MenuItem>Settings</MenuItem>
//       </SubMenu>
//       <SubMenu label="Attendance">
//         <MenuItem>Daily</MenuItem>
//         <MenuItem>Report</MenuItem>
//       </SubMenu>
//       <SubMenu label="Settings">
//         <MenuItem>Profile</MenuItem>
//         <MenuItem>Security</MenuItem>
//       </SubMenu>
//     </Menu>
//   </Sidebar>
// </ProSidebarProvider>
//   );
// };

// export default MySidebar;










import React from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Tooltip } from 'react-tooltip';
import { MdDashboard } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';
import { FcDepartment } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';

const SidebarContent = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const subMenus = [
    { label: 'Dashboard', icon: MdDashboard, items: ['Overview','Stats'], to: ['overview','stats'] },
    { label: 'Employees', icon: IoPeopleSharp, items: ['List','Add New'], to: ['employees','employees/add'] },
    { label: 'Department',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Leaves',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Salary',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Attendence',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
    { label: 'Settings',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
    
    // ...
  ];

  return (
    <>
      <Menu iconShape="square">
        <MenuItem onClick={() => collapseSidebar()}>
          {collapsed ? '👉' : '👈'} My App
        </MenuItem>

        {subMenus.map(({ label, icon: Icon, items, to }) => (
          <SubMenu
            key={label}
            label={label}
            icon={
              <Icon data-tooltip-id="sidebar-tooltip" data-tooltip-content={label} data-tooltip-place="right"/>
            }
          >
            {items.map((item, i) => (
              <MenuItem key={`${label}-${item}`} component={<Link to={`/${to[i]}`} />}>
                {item}
              </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>

      <Tooltip id="sidebar-tooltip" positionStrategy="fixed" delayShow={200} />
    </>
  );
};

const SidebarWithTooltips = () => (
  <Sidebar breakPoint="md" defaultCollapsed={false} style={{ position: 'fixed', height: '100vh', overflowY: 'auto' }}>
    <SidebarContent />
  </Sidebar>
);

export default () => (
  <ProSidebarProvider>
    <SidebarWithTooltips />
  </ProSidebarProvider>
);
