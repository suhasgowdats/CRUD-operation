import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import EmployeesPage from "./EmployeesPage";
import AboutPage from "./AboutPage";
import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import Tabel from "./Tabel";

export default function BodySection() {
    const empList=[
        {
            name:"emp1",
            id: "1000",
            updates:[
                {
                    field:'name',
                    value:"second update 1"
                },
                {
                    field:"name",
                    value:"first update 1"
                }
            ]
        },
        {
            name:"emp2",
            id: "1001",
            updates:[
                {
                    field:'name',
                    value:"second update 2"
                },
                {
                    field:"name",
                    value:"first update 2"
                }
            ]
        },
        {
            name:"emp3",
            id: "1002",
            updates:[
                {
                    field:'name',
                    value:"second update 3"
                },
                {
                    field:"name",
                    value:"first update 3"
                }
            ]
        }
    ];
    const getIteam=(id)=>{
        return(empList.find(emp=>emp.id===id))
    }
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage/>} ></Route>
                        <Route path="/employees" element={<EmployeesPage employees={empList}/>} ></Route>
                        <Route path="/employees/:id" element={<EmployeeDetails getdata={getIteam} />} >
                            <Route path='updates'  element={<div>updates</div>} />    
                            <Route path='feedback'  element={<div>feedback</div>} />                  
                            </Route>   
                        <Route path="/tabel" element={<Tabel/>}></Route>                 
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}