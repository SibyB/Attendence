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
    { label: 'Employees', icon: IoPeopleSharp, items: ['List','Add New'], to: ['employee','employee/add'] },
    { label: 'Department',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
    { label: 'Leaves',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Salary',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
    { label: 'Attendence',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Settings',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
    { label: 'Help',icon: IoPeopleSharp, items:['List','Add New'], to:['department','department']},
    { label: 'Logout',icon: MdDashboard, items:['List','Add New'], to:['department','department']},
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
