import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function TableFilter() {
  return (
    <div className='Table'>
        <div className='sub-title'><h3>Application List</h3></div>
   <div className='filter'>
      <Row className="col-12">
        <Col xs={2}>
          <Form.Group controlId="formGridState" style={{width:"150px"}}>
            <Form.Label>Sort By</Form.Label>
            <Form.Select defaultValue="Sort by">
              <option value="">-SortBy- </option>
              <option value="10">10 </option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="All">All</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={5}>
        <Form.Group controlId="formGridExport" style={{width:"100px"}}>
            <Form.Label>Export</Form.Label>
            <Form.Select defaultValue="Export">
              <option value="PDF">PDF</option>
              <option value="Excel">Excel</option>
              <option value="Print">Print</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={4} className="text-end">
          <Form.Group controlId="formGridSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search..." />
          </Form.Group>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default TableFilter