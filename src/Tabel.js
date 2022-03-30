import logo from './logo.svg';
import './Tabel.css'
import { useState, Fragment } from 'react';
import ReadOnly from './ReadOnly.js';
import EditSec from './EditSec';

function Tabel() {
  const data = [{
    id: 1,
    fullName: "Suhas",
    address: "bangalore",
    phoneNumber: "12345",
    email: "suhas@gmail.com"
  }]
  const [contacts, setcontact] = useState(data)
  const [addFormdata, setFormdata] = useState()
  const [id, setid] = useState(2)
  const [editableId, seteditableId]=useState(null)
  const [editFormdata, seteditFormdata]=useState()



  
  const handelChange = (e) => {
    e.preventDefault()

    let fieldName = e.target.getAttribute("name")
    let fieldValue = e.target.value

    const newformdata = { ...addFormdata }
    newformdata[fieldName] = fieldValue
  
    setFormdata(newformdata)
  }
 const formdataEditor=(e)=>{
   e.preventDefault()

   let fieldName=e.target.getAttribute("name")
   let fieldValue=e.target.value;

   const newformdata={...editFormdata};
   newformdata[fieldName]=fieldValue
   seteditFormdata(newformdata)
 }



  const handelAdd = (e) => {
    e.preventDefault()
    setid(id + 1)
    console.log(id)
    const newContact = {
      id: id,
      fullName: addFormdata.fullName,
      address: addFormdata.address,
      phoneNumber: addFormdata.phoneNumber,
      email: addFormdata.email
    }
   const NewData=[...contacts, newContact]
   setcontact(NewData)

  }

  function editHandler(e, item){
    e.preventDefault()
    seteditableId(item.id)

    let editdata={
      fullName: item.fullName,
      address: item.address,
      phoneNumber: item.phoneNumber,
      email: item.email      
    }
    seteditFormdata(editdata)
  }

  function handelFormSubmit(e){
    e.preventDefault()

    const editedcontact={
      id:editableId,
      fullName:editFormdata.fullName,
      address:editFormdata.address,
      phoneNumber:editFormdata.phoneNumber,
      email:editFormdata.email
    }
    const newContacts=[...contacts];

    const index= contacts.findIndex((cont)=>cont.id===editableId)
    newContacts[index]=editedcontact
    
    setcontact(newContacts)

    seteditableId(null)

  }
  function handelCancelClick(){
    seteditableId(null)
  }

  function handelDelete(e,editableId){
       e.preventDefault()

       const Newcontact=[...contacts]
       const index=contacts.findIndex((cont)=>cont.id===editableId)
      Newcontact.splice(index,1)
      setcontact(Newcontact)
  }





    return (

    <div>
      <div className="from-body">
        <form onSubmit={handelAdd} >
          <label >FullName:</label><br />
          <input type="text" name="fullName" required="required" placeholder="Enter name" onChange={handelChange} /><br />
          <label>Address:</label><br />
          <input type="text" name="address" required="required" placeholder="Enter address" onChange={handelChange} /><br />
          <label>PhoneNumber:</label><br />
          <input type="text" name="phoneNumber" required="required" placeholder="Enter phoneNumber" onChange={handelChange} /><br />
          <label>Email:</label><br />
          <input type="email" name="email" required="required" placeholder="Enter email" onChange={handelChange} /><br />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="tabel-body">
        <form>
        <tabel>
          <thead>
            <tr>
              <td>FullName</td>
              <td>Address</td>
              <td>PhoneNumber</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((item) => (
                <Fragment>
                  {editableId===item.id?(<EditSec editFormdata={editFormdata} handelCancelClick={handelCancelClick} formdataEditor={formdataEditor} handelFormSubmit={handelFormSubmit}/>):(<ReadOnly item={item} editHandler={editHandler} handelDelete={handelDelete} />)}
                </Fragment>
              ))
            }
          </tbody>
        </tabel>
        </form>
      </div>
    </div>
  );
}

export default Tabel;
