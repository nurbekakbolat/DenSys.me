import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
axios.defaults.withCredentials = true;

const EditPatient = () => {
    const [iin, setIin] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [bloodGroup, setBloodgroup] = useState(0);
    const [emergencyContact, setEmergencyContact] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("unknown");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPatientById();
    }, []);

    const updatePatient = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/patient/${id}`, {
                iin,
                firstName,
                lastName,
                middleName,
                birthDate,
                bloodGroup,
                emergencyContact,
                contact,
                email,
                address,
                maritalStatus,
            });
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    const getPatientById = async () => {
        const response = await axios.get(`http://localhost:5000/patient/${id}`);
        setIin(response.data.iin);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setMiddleName(response.data.middleName);
        setBirthDate(response.data.birthDate);
        setBloodgroup(response.data.bloodGroup);
        setEmergencyContact(response.data.emergencyContact);
        setContact(response.data.contact);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setMaritalStatus(response.data.maritalStatus);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updatePatient}>
                    <div className="field">
                        <label className="label">IIN</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={iin}
                                onChange={(e) => setIin(e.target.value)}
                                placeholder="IIN"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Middle Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                                placeholder="Middle Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Birth Date</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                placeholder="Birth Date"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Blood Group</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={bloodGroup}
                                    onChange={(e) =>
                                        setBloodgroup(e.target.value)
                                    }
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Emergency Contact</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={emergencyContact}
                                onChange={(e) =>
                                    setEmergencyContact(e.target.value)
                                }
                                placeholder="Emergency Contact"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Contact</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="Contact"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Marital Status</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={maritalStatus}
                                    onChange={(e) =>
                                        setMaritalStatus(e.target.value)
                                    }
                                >
                                    <option value="single">single</option>
                                    <option value="married">married</option>
                                    <option value="divorced">divorced</option>
                                    <option value="widow">widow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPatient;
