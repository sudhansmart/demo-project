import React, { useState } from 'react';
import { useEffect } from 'react';
import NotificationBar from './NotificationBar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFileAlt, faHourglassHalf, faMagnifyingGlass, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function DashBoard() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Add your search logic here using the 'startDate' and 'endDate' values
    console.log('Searching from', startDate, 'to', endDate);
  };
  // Counter logic for received file
  const [recCount, setRecCount] = useState(0);
  const[closedCount,setClosedCount]=useState(0);
  const[pending,setPending] = useState(0);
  const[sentCount,setSentCount]=useState(0);
  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setRecCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 15) {
          clearInterval(intervalId1); 
        }
        return newCount;
      });
    }, 30);
    const intervalId2 = setInterval(() => {
      setClosedCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 49) {
          clearInterval(intervalId2); 
        }
        return newCount;
      });
    }, 30);
    const intervalId3 = setInterval(() => {
      setPending((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 55) {
          clearInterval(intervalId3); 
        }
        return newCount;
      });
    }, 30);
    const intervalId4 = setInterval(() => {
      setSentCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 45) {
          clearInterval(intervalId4); 
        }
        return newCount;
      });
    }, 30);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2); 
      clearInterval(intervalId3); 
      clearInterval(intervalId4); 
    };
  }, []);
  

  return (
    <div>
      <NotificationBar />
      <div className='Cover'>
      <div className='DashBoard'>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type of Grievance</Form.Label>
            <Form.Select defaultValue="-Select Here-">
              <option>-Select Here-</option>
              <option>Personal</option>
              <option>Official</option>
              <option>Internal</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formFromDate">
            <Form.Label>From</Form.Label>
            <Form.Control type="Date" style={{ backgroundColor: 'whitesmoke' }} />
          </Form.Group>
          <Form.Group as={Col} controlId="formToDate">
            <Form.Label>To</Form.Label>
            <Form.Control type="Date" style={{ backgroundColor: 'whitesmoke' }} />
          </Form.Group>
          <Form.Group as={Col} controlId="search">
            <Form.Label>&nbsp;</Form.Label><br />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form.Group>
        </Row> </div>
      </div>
      <div className='card'>
        <div className="row" >
          <div className="col-md-3">
            <div className="glassy-card1">
              <div className="card-icon">
                   <FontAwesomeIcon icon={faFileAlt} />
             </div>
               <div className="count-info text-right" >
                 <span className="count-numbers">{recCount}</span>
                 <span className="count-name">Received</span>
              </div>
           </div>
        </div>

        <div className="col-md-3">
          <div className="glassy-card2">
          <div className="card-icon">
            <FontAwesomeIcon icon={faEdit} />
            </div>
           <div className="count-info text-right" >
            <span className="count-numbers">{closedCount}</span>
            <span className="count-name">Closed</span>
          </div>
        </div>
        </div>

        <div className="col-md-3">
          <div className="glassy-card3 ">
            <div className="card-icon">
            <FontAwesomeIcon icon={faHourglassHalf}  />
            </div>
            <div className="count-info text-right" >
            <span className="count-numbers">{pending}</span>
            <span className="count-name">Pending</span>
          </div>
        </div>
        </div>

        <div className="col-md-3">
          <div className="glassy-card4 ">
          <div className="card-icon">
            <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <div className="count-info text-right" >
            <span className="count-numbers">{sentCount}</span>
            <span className="count-name">Clarification</span>
          </div>
          </div>
        </div>
        <hr></hr>
      </div> 
    </div>
    </div>
   
   
  );
}

export default DashBoard;
