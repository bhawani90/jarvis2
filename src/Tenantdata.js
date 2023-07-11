import React, {useEffect, useState} from 'react'
import { Button, Table, Modal} from 'react-bootstrap'
import axios from 'axios'

const Tenantdata = () => {
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("http://localhost:8000/tenantdata")
        .then((response) => {
            console.log("response-----",response.data)
            setUsers(response.data)
        })
        .catch((error) => console.log(error))
    })
  return (
    <>
        <div className='container'>
            <h1>Tenants Data</h1>
            <Table striped bordered hover>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Tenants</th>
                        <th>Type</th>
                        <th>User Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users.map((user) => {
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.tenant}</td>
                            <td>{user.type}</td>
                            <td>{user.userid}</td>
                            <td><Button variant="primary" className='mx-2' onClick={handleShow}> button1</Button>
                            <Button variant="primary" className='mx-2'>button2</Button>
                            <Button variant="primary" className='mx-2'>button3</Button></td>
                        </tr>
                    )
                })}
                <tbody>
                
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </>
  )
}

export default Tenantdata
