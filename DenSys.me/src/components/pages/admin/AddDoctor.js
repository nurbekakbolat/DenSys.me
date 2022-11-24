import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ratings = [];
for (let i = 0; i <= 10; i++) {
    ratings.push(<option value={i}>{i}</option>);
}

const AddDoctor = () => {
    const [iin, setIin] = useState("000000000000");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [departmentID, setDepartmentID] = useState("");
    const [specializationDetailsID, setSpecializationDetailsID] = useState("");
    const [experienceInYears, setExperienceInYears] = useState(0);
    const [category, setCategory] = useState("");
    const [priceOfAppointment, setPriceOfAppointment] = useState(0.0);
    const [scheduleDetails, setScheduleDetails] = useState("");
    const [degree, setDegree] = useState("");
    const [rating, setRating] = useState(0);
    const [address, setAddress] = useState("");
    const [homepageURL, setHomepageURL] = useState("");

    const navigate = useNavigate();

    const saveDoctor = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/doctor",
                {
                    iin,
                    firstName,
                    lastName,
                    middleName,
                    birthDate,
                    contactNumber,
                    departmentID,
                    specializationDetailsID,
                    experienceInYears,
                    category,
                    priceOfAppointment,
                    scheduleDetails,
                    degree,
                    rating,
                    address,
                    homepageURL,
                },
                { withCredentials: true }
            );
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveDoctor}>
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
                        <label className="label">Contact Number</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={contactNumber}
                                onChange={(e) =>
                                    setContactNumber(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Department ID</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={departmentID}
                                onChange={(e) =>
                                    setDepartmentID(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">
                            Specialization Details ID
                        </label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={specializationDetailsID}
                                onChange={(e) =>
                                    setSpecializationDetailsID(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Experience in years</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={experienceInYears}
                                onChange={(e) =>
                                    setExperienceInYears(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Category</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Price of appointment</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={priceOfAppointment}
                                onChange={(e) =>
                                    setPriceOfAppointment(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Schedule Details</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={scheduleDetails}
                                onChange={(e) =>
                                    setScheduleDetails(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Degree</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Rating</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    {ratings}
                                </select>
                            </div>
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
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Homepage URL</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={homepageURL}
                                onChange={(e) => setHomepageURL(e.target.value)}
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="field">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
