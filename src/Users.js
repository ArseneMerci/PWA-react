import React,{ useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Users(props) {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((result) => {
            setData(result);
            localStorage.setItem('users', JSON.stringify(result));
        }).catch((err)=>{
            setMode('offline')
            const users = JSON.parse(localStorage.getItem('users'));
            setData(users)
        })
    }, [])
    return (
        <div>
            {
                mode === 'offline'?
                <div className='alert alert-warning' role='alert'>
                    <h4 className='alert-heading'>Offline Mode</h4>
                    <p>You are in offline mode. Please check your internet connection.</p>
                </div>:null
            }
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                  data.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                    </tr>
                ))
                }
            </tbody>
        </Table>
        </div>
    );
}

export default Users;
