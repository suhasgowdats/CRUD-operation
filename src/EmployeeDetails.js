import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

export default function EmployeeDetails({getdata}) {
    const {id}=useParams()
    const navigate=useNavigate()
    const empDetail=getdata(id)
    function clickHandler(){
        navigate(-1)
    }
    return(
        <div>
            {
                empDetail?(
                    <div>
                    <h2>Name:{empDetail.name}</h2>
                    <h2>Id:{empDetail.id}</h2>
                    </div>
                ): <h2>Employee detail not found</h2>
            }
            <button className="btn btn-primary" onClick={clickHandler}>Go back</button>
            <button className="btn btn-primary" onClick={()=>navigate("updates")}>Update</button>
            <button className="btn btn-primary" onClick={()=>navigate("feedback")}>feedback</button>

            <hr/>

            <Outlet/>

        </div>
    )
}