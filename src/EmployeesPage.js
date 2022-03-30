import React from "react"
import { Link, useNavigate,} from "react-router-dom"


export default function EmployeesPage({employees}) {
    const suhas=useNavigate() 
    function clickHandler(){
        suhas(1)
    }
    return (
        <div>
          <ul className="list-group">
          {
                employees.map(emp=>{ 
                    return (
                        <Link to={`/employees/${emp.id}`}>
                        <li key={emp.id} className="list-group-item">{emp.name}({emp.id})</li>
                        </Link>  
                    )                             
                })
          }
          </ul>
          <button className="btn btn-danger" onClick={clickHandler}>Go forword</button>     
          </div>     
    )
}