import React from 'react'

export default function ReadOnly ({item, editHandler,handelDelete}) {
    return (  
        <tr>
        <td>{item.fullName}</td>
        <td>{item.address}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.email}</td>
        <td><button onClick={(e)=>editHandler(e,item)}>Edit</button> <button onClick={handelDelete}>Delete</button></td>
      </tr>
    )
}