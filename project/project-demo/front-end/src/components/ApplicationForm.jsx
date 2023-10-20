import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom'
import axios from 'axios'

function ApplicationForm() {
 
  const [formData, setFormData] = useState({
    category: '',
    dateOfReceiving: '',
    receivedFrom: '',
    designation: '',
    department: '',
    internalOrExternal: '',
    priority: '',
    referenceNumber: '',
    reminderDate: '',
    sendTo: '',
    mode: '',
    dateOfSending: '',
    subject: '',
    summary: '',
    specialInstructions: '',
  });

  const handleInputChange = (e) => {
   const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit= (event)=>{
      event.preventDefault();
      const newForm = formData
      if (Object.values(formData).some((value) => value !== '')) {
           axios.post('http://localhost:5174/create',newForm)
       
      }
         else{
            alert("Please Fill the Input Fields")
     }
       
       // Clear the form fields after submission
    setFormData({
      category: '',
      dateOfReceiving: '',
      receivedFrom: '',
      designation: '',
      department: '',
      internalOrExternal: '',
      priority: '',
      referenceNumber: '',
      reminderDate: '',
      sendTo: '',
      mode: '',
      dateOfSending: '',
      subject: '',
      summary: '',
      specialInstructions: '',
    });
    }

  return (
    <div className='table-head'>
      <h3>GCP External Letters Tracking Form</h3>
      <hr></hr>
      <div className="container">
        <div className="Field">
          <Row className="col-12">
            <Col xs={4}>
              <Form.Group controlId="formGridState" className="Form-select">
                <Form.Label>Type(Category)</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                   
                >
                  <option value="nil">-Select Here- </option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="formFromDate">
                <Form.Label>Date of Receiving</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfReceiving"
                  value={formData.dateOfReceiving}
                  onChange={handleInputChange}
                  placeholder="Date of Receiving"
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group controlId="formGridState">
                <Form.Label>Received From</Form.Label>
                <Form.Select
                  name="receivedFrom"
                  value={formData.receivedFrom}
                  onChange={handleInputChange}
                  
                >
                  <option value="nil">-Select Here- </option>
                  <option value="Hari">Hari</option>
                  <option value="Gokul">Gokul</option>
                  <option value="Karthick">Karthick</option>
                  <option value="Mani">Mani</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="col-12">
        <Col xs={4}>
          <Form.Group controlId="formGridState" >
            <Form.Label>Designation</Form.Label>
            <Form.Select name='designation' value={formData.designation}
                  onChange={handleInputChange}  >
              <option value="nil">-Select Here- </option>
              <option value="Add COP">Add COP</option>
              <option value="AC">AC</option>
              <option value="DC">DC</option>
              <option value="JC">JC</option>
            </Form.Select>
          </Form.Group>
          </Col>
          <Col xs={4}>
          <Form.Group controlId="formGridState" >
            <Form.Label>Department</Form.Label>
            <Form.Select name='department'  value={formData.department}
               onChange={handleInputChange}    >
              <option value="nil">-Select Here- </option>
              <option value="Agriculture">Agriculture </option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
              <option value="Handloom">Handloom</option>
              <option value="Police">Police</option>
            </Form.Select>
          </Form.Group>
          </Col>
        <Col xs={4}>
          <Form.Group controlId="formGridState" >
            <Form.Label>Internal / External</Form.Label>
            <Form.Select name='internalOrExternal' value={formData.internalOrExternal}
                 onChange={handleInputChange}   >
              <option value="nil">-Select Here- </option>
              <option value="Internal">Internal </option>
              <option value="External">External</option>
            </Form.Select>
          </Form.Group>
          </Col>
        </Row>
        <Row className="col-12">
        <Col xs={4}>
          <Form.Group controlId="formGridState" >
            <Form.Label>Priority</Form.Label>
            <Form.Select name='priority' value={formData.priority}
                onChange={handleInputChange}  >
              <option value="nil">-Select Here- </option>
              <option value="High">High </option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          </Col>
          <Col xs={4}>
          <Form.Group  controlId="formGridName">
            <Form.Label>Reference Number</Form.Label>
            <Form.Control name='referenceNumber' value={formData.referenceNumber}  onChange={handleInputChange}
             type="text" placeholder= "Pending" readOnly/>
          </Form.Group>
          </Col>
          <Col xs={4}>
          <Form.Group controlId="formFromDate">
            <Form.Label>Reminder date</Form.Label>
            <Form.Control name='reminderDate' value={formData.reminderDate} onChange={handleInputChange} type="Date" />
          </Form.Group>
        </Col>
        </Row>
        <Row className="col-12">
        <Col xs={4}>
          <Form.Group controlId="formGridState">
            <Form.Label>Send To</Form.Label>
            <Form.Select name='sendTo' value={formData.sendTo}  onChange={handleInputChange} >
              <option value="nil">-Select Here- </option>
              <option value="AC">AC </option>
              <option value="DC">DC</option>
              <option value="JC">JC</option>
              <option value="COP">COP</option>
            </Form.Select>
          </Form.Group>
          </Col>
          <Col xs={4}>
          <Form.Group controlId="formGridState" >
            <Form.Label>Mode</Form.Label>
            <Form.Select name='mode' value={formData.mode}  onChange={handleInputChange}  >
              <option value="nil">-Select Here- </option>
              <option value="Letter">Letter </option>
              <option value="Mail">Mail</option>
            </Form.Select>
          </Form.Group>
          </Col>
          <Col xs={4}>
          <Form.Group controlId="formFromDate">
            <Form.Label>Date of Sending</Form.Label>
            <Form.Control name='dateOfSending' value={formData.dateOfSending}  onChange={handleInputChange} 
            type="Date"  />
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
        <FloatingLabel controlId="floatingTextarea2" label="Subject">
        <Form.Control
          as="textarea" name='subject'  value={formData.subject}  onChange={handleInputChange}
          placeholder="Leave a comment here"
          style={{ marginTop:"25px", height: '90px' }}
        />
      </FloatingLabel>
          </Col>
          <Col xs={4}>
          <FloatingLabel controlId="floatingTextarea2" label="Summary / Gist">
        <Form.Control
          as="textarea" name='summary'  value={formData.summary}  onChange={handleInputChange}
          placeholder="Leave a comment here"
          style={{ marginTop:"25px", height: '90px' }}
        />
      </FloatingLabel>
          </Col>
          <Col xs={4}>
          <FloatingLabel controlId="floatingTextarea2" label="Special Instructions">
        <Form.Control
          as="textarea" name='specialInstructions'  value={formData.specialInstructions}  onChange={handleInputChange}
          placeholder="Leave a comment here"
          style={{ marginTop:"25px", height: '90px' }}
        />
      </FloatingLabel>
          </Col>
        </Row>
         
          <div className="App-button">
            <Button variant="success" onClick={handleSubmit} style={{ margin: '0 15px' }}>
              Save
            </Button>
            <Button as={Link} to="/" variant="danger">Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
