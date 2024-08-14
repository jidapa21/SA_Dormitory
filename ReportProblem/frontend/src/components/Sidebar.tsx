
import React from 'react';
import { NavLink } from 'react-router-dom';
import user from "../assets/profile.jfif"
import "./side.css";

interface SidebarProps {
  children: React.ReactNode; // `children` is now optional
}

function Sidebar({ children }: SidebarProps) {

  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='top_section'>
          <img src={user} alt="Course Logo" />
        </div>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/Student">
          <div className='link_text'>นักศึกษา</div>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">
          <div className='link_text'>จองหอพัก</div>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/List">
          <div className='link_text'>รายชื่อผู้พักร่วม</div>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/LogOut">
          <div className='link_text'>ออกจากระบบ</div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;


/*{menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className='link_text'>{item.name}</div>
          </NavLink>
        ))}*/