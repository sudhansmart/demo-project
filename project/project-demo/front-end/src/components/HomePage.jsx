import React, { useState } from 'react'
import DashBoard from './DashBoard'
import TableFilter from './TableFilter'
import DataTable from './DataTable'
import { useEffect } from 'react'
import axios from 'axios'

function HomePage() {
  const [data,setData] =useState([
    {
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
    specialInstructions: ''
  }])
  // Define a function to fetch data using GET
  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('https://demo-project-8fkj.onrender.com/list'); // Replace with your endpoint
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data)
      } else {
        console.error('Failed to fetch data from the server');
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  // Call the fetch data function within useEffect
  useEffect(() => {
    fetchDataFromServer();
  }, []); 


    const columns = [
        { Header: 'S.No', accessor: 'index', id: 'index' },
        // { Header: 'Application No', accessor: '_id' },
        { Header: 'Category', accessor: 'category' },
        { Header: 'Date of Receiving', accessor: 'dateOfReceiving' },
        { Header: 'Received From', accessor: 'receivedFrom' },
        { Header: 'Designation', accessor: 'designation' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Application Type', accessor: 'internalOrExternal' },
        { Header: 'Priority', accessor: 'priority' },
        { Header: 'Subject', accessor: 'subject' },
        { Header: 'Reference Number', accessor: '_id' },
        { Header: 'Reminder Date', accessor: 'reminderDate' },
      ];
    
      const handleDelete = async (rowIndex) => {
        const itemToDelete = data[rowIndex];
        const id = itemToDelete._id;
        try {
          const response = await fetch(`https://demo-project-8fkj.onrender.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemToDelete),
          });
    
          if (response.ok) {
            const newData = [...data];
            newData.splice(rowIndex, 1);
            setData(newData);
            alert("Data Deleted Sucessfully")
          } else {
            console.error('Failed to delete item from the API');
          }
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      };
      
  return (
    <div>
        <DashBoard/>
        <TableFilter/>
        <DataTable data={data} columns={columns}  onDelete={handleDelete}/>
    </div>
  )
}

export default HomePage
