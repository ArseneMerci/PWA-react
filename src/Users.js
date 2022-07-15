import React,{ useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Users(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((result) => {
            setData(result);
        })
    }, [])
    return (
        <div>
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
