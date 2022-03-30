import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar(){
    return(
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3"></div>
            </NavLink>

         
            <hr className="sidebar-divider my-0"/>

            
            <li className="nav-item ">
                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></NavLink>
            </li>

            <hr className="sidebar-divider"/>

            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/employees" >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Employees</span>
                </NavLink>

            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/tabel">
                <li><span class="fa-li"><i class="fas fa-check-square"></i></span></li>
                    <span>----Tabel----</span>
                </NavLink>
                
            </li>
           

            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/about">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>About</span>
                </NavLink>
                
            </li>
        </ul>
    )
}