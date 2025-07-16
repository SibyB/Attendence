import React from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem , SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


const MySidebar = () => {
  return (

    <ProSidebarProvider>
  <Sidebar style={{
      position: 'fixed',
      height: '100vh',
      overflowY: 'auto',
      // backgroundColor:'green' 
      // ensures scroll if content overflows
      
    }}>
    <Menu menuItemStyles={{
      button: { "&.active": { backgroundColor: '#13395e', color: '#b6c8d9' } }
    }}>
      <SubMenu label="Dashboard">
        <MenuItem>Overview</MenuItem>
        <MenuItem>Stats</MenuItem>
      </SubMenu>
      <SubMenu label="Employees">
        <MenuItem>List</MenuItem>
        <MenuItem>Add New</MenuItem>
      </SubMenu>
      <SubMenu label="Departments">
        <MenuItem>HR</MenuItem>
        <MenuItem>Finance</MenuItem>
      </SubMenu>
      <SubMenu label="Leaves">
        <MenuItem>Apply</MenuItem>
        <MenuItem>History</MenuItem>
      </SubMenu>
      <SubMenu label="Salary">
        <MenuItem>Pay Slips</MenuItem>
        <MenuItem>Settings</MenuItem>
      </SubMenu>
      <SubMenu label="Attendance">
        <MenuItem>Daily</MenuItem>
        <MenuItem>Report</MenuItem>
      </SubMenu>
      <SubMenu label="Settings">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Security</MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>
</ProSidebarProvider>
  );
};

export default MySidebar;








// import React from "react";
// import classNames from "classnames";
// import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
// // @material-ui/core components
// import { makeStyles } from "@mui/styles";      // for JSS legacy support
// import Drawer from "@mui/material/Drawer";
// import Hidden from "@mui/material/Hidden";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
// // core components
// import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
// import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

// import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

// const useStyles = makeStyles(styles);

// const MySidebar=(props) => {
//   const classes = useStyles();
//   // verifies if routeName is the one active (in browser input)
//   function activeRoute(routeName) {
//     return window.location.href.indexOf(routeName) > -1 ? true : false;
//   }
//   const { color, logo, image, logoText, routes } = props;
//   var links = (
//     <List className={classes.list}>
//       {routes.map((prop, key) => {
//         var activePro = " ";
//         var listItemClasses;
//         if (prop.path === "/upgrade-to-pro") {
//           activePro = classes.activePro + " ";
//           listItemClasses = classNames({
//             [" " + classes[color]]: true
//           });
//         } else {
//           listItemClasses = classNames({
//             [" " + classes[color]]: activeRoute(prop.layout + prop.path)
//           });
//         }
//         const whiteFontClasses = classNames({
//           [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
//         });
//         return (
//           <NavLink
//             to={prop.layout + prop.path}
//             className={activePro + classes.item}
//             activeClassName="active"
//             key={key}
//           >
//             <ListItem button className={classes.itemLink + listItemClasses}>
//               {typeof prop.icon === "string" ? (
//                 <Icon
//                   className={classNames(classes.itemIcon, whiteFontClasses, {
//                     [classes.itemIconRTL]: props.rtlActive
//                   })}
//                 >
//                   {prop.icon}
//                 </Icon>
//               ) : (
//                 <prop.icon
//                   className={classNames(classes.itemIcon, whiteFontClasses, {
//                     [classes.itemIconRTL]: props.rtlActive
//                   })}
//                 />
//               )}
//               <ListItemText
//                 primary={props.rtlActive ? prop.rtlName : prop.name}
//                 className={classNames(classes.itemText, whiteFontClasses, {
//                   [classes.itemTextRTL]: props.rtlActive
//                 })}
//                 disableTypography={true}
//               />
//             </ListItem>
//           </NavLink>
//         );
//       })}
//     </List>
//   );
//   var brand = (
//     <div className={classes.logo}>
//       <a
//         // href="https://www.creative-tim.com?ref=mdr-sidebar"
//         className={classNames(classes.logoLink, {
//           [classes.logoLinkRTL]: props.rtlActive
//         })}
//         target="_blank"
//       >
//         <div className={classes.logoImage}>
//           <img src={logo} alt="logo" className={classes.img} />
//         </div>
//         {logoText}
//       </a>
//     </div>
//   );
//   return (
//     <div>
//       <Hidden mdUp implementation="css">
//         <Drawer
//           variant="temporary"
//           anchor={props.rtlActive ? "left" : "right"}
//           open={props.open}
//           classes={{
//             paper: classNames(classes.drawerPaper, {
//               [classes.drawerPaperRTL]: props.rtlActive
//             })
//           }}
//           onClose={props.handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true // Better open performance on mobile.
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>
//             {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
//             {links}
//           </div>
//           {image !== undefined ? (
//             <div
//               className={classes.background}
//               style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null}
//         </Drawer>
//       </Hidden>
//       <Hidden smDown implementation="css">
//         <Drawer
//           anchor={props.rtlActive ? "right" : "left"}
//           variant="permanent"
//           open
//           classes={{
//             paper: classNames(classes.drawerPaper, {
//               [classes.drawerPaperRTL]: props.rtlActive
//             })
//           }}
//         >
//           {brand}
//           <div className={classes.sidebarWrapper}>{links}</div>
//           {image !== undefined ? (
//             <div
//               className={classes.background}
//               style={{ backgroundImage: "url(" + image + ")" }}
//             />
//           ) : null}
//         </Drawer>
//       </Hidden>
//     </div>
//   );
// }
// export default MySidebar;

// Sidebar.propTypes = {
//   rtlActive: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func,
//   bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
//   logo: PropTypes.string,
//   image: PropTypes.string,
//   logoText: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
//   open: PropTypes.bool
// };







