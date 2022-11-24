import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
axios.defaults.withCredentials = true;

const UserList = () => {
    const [showPatient, setShowPatient] = useState(true);

    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        await axios
            .get("http://localhost:5000/patient")
            .then(function (response) {
                // handle success
                setPatients(response.data);
                console.log(response);
            })
            .catch(function (error) {
                if (error.response && error.response.status === 403) {
                    navigate("/");
                }
            });
        await axios
            .get("http://localhost:5000/doctor")
            .then(function (response) {
                // handle success
                setDoctors(response.data);
                console.log(response);
            })
            .catch(function (error) {
                if (error.response && error.response.status === 403) {
                    navigate("/");
                }
            });
    };

    const deleteUser = async (userType, id) => {
        try {
            if (userType === "patient") {
                await axios.delete(`http://localhost:5000/patient/${id}`);
            }
            if (userType === "doctor") {
                await axios.delete(`http://localhost:5000/doctor/${id}`);
            }
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    const [alignment, setAlignment] = useState("Patients");

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
        if (newAlignment === "Patients") {
            setShowPatient(true);
        } else if (newAlignment === null) {
            return;
        } else {
            setShowPatient(false);
        }
    };

    return (
        <div>
            <div className="columns mt-3 ml-5">
                <div className="column is-half">
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton className="Btn-Blue-BG" value="Patients">
                            Patients
                        </ToggleButton>
                        <ToggleButton value="Doctors">Doctors</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            {showPatient ? (
                <div className="columns mt-3 ml-5">
                    <div className="column is-half">
                        <Link to={`patient/add`} className="button is-success">
                            Add New Patient
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
                                {patients.map((user, index) => (
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
                                                to={`patient/edit/${user.id}`}
                                                className="button is-small is-info mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteUser(
                                                        "patient",
                                                        user.id
                                                    )
                                                }
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
            ) : (
                <div className="columns mt-3 ml-5">
                    <div className="column is-half">
                        <Link to={`doctor/add`} className="button is-success">
                            Add New Doctor
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
                                    <th>Contact</th>
                                    <th>Department ID</th>
                                    <th>Specialization Details ID</th>
                                    <th>Experience</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Schedule Details</th>
                                    <th>Degree</th>
                                    <th>Rating</th>
                                    <th>Address</th>
                                    <th>Homepage URL</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.id}</td>
                                        <td>{user.iin}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.middleName}</td>
                                        <td>{user.birthDate}</td>
                                        <td>{user.contactNumber}</td>
                                        <td>{user.departmentID}</td>
                                        <td>{user.specializationDetailsID}</td>
                                        <td>{user.experienceInYears}</td>
                                        <td>{user.category}</td>
                                        <td>{user.priceOfAppointment}</td>
                                        <td>{user.scheduleDetails}</td>
                                        <td>{user.degree}</td>
                                        <td>{user.rating}</td>
                                        <td>{user.address}</td>
                                        <td>{user.homepageURL}</td>
                                        <td>
                                            <Link
                                                to={`doctor/edit/${user.id}`}
                                                className="button is-small is-info mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteUser(
                                                        "doctor",
                                                        user.id
                                                    )
                                                }
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
            )}
        </div>
    );
};

export default UserList;
