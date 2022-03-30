import React from 'react'

export default function EditSec ({editFormdata,formdataEditor,handelFormSubmit,handelCancelClick}) {
  return (
      <tr>
        <td><input type="text" name="fullName" required="required" placeholder="Enter name" value={editFormdata.fullName} onChange={formdataEditor}/></td>
        <td><input type="text" name="address" required="required" placeholder="Enter address"value={editFormdata.address} onChange={formdataEditor}/></td>
        <td><input type="text" name="phoneNumber" required="required" placeholder="Enter phone number" value={editFormdata.phoneNumber} onChange={formdataEditor}/></td>
        <td><input type="text" name="email" required="required" placeholder="Enter your email"value={editFormdata.email} onChange={formdataEditor}/></td>
        <td><button onClick={handelFormSubmit}>Save</button> <button onClick={handelCancelClick}>Cancel</button></td>
        </tr>
        )
}