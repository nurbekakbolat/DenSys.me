import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5 ml-5">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>IIN</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Birth Date</th>
              <th>Blood Group</th>
              <th>Emergency Contact</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Marital Status</th>
              <th>Registration Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.iin}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.middleName}</td>
                <td>{user.birthDate}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.emergencyContact}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.registrationDate}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default UserList;