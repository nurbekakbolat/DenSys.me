import Patient from "../models/PatientModel.js";
import Doctor from "../models/DoctorModel.js";

export const getUsers = (userType) => {
    return async (req, res) => {
        try {
            if (userType === "patient") {
                const response = await Patient.findAll();
                res.status(200).json(response);
            } else if (userType === "doctor") {
                const response = await Doctor.findAll();
                res.status(200).json(response);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getUserById = (userType) => {
    return async (req, res) => {
        try {
            if (userType === "patient") {
                const response = await Patient.findOne({
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json(response);
            } else if (userType === "doctor") {
                const response = await Doctor.findOne({
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json(response);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const createUser = (userType) => {
    return async (req, res) => {
        try {
            if (userType === "patient") {
                await Patient.create(req.body);
                res.status(201).json({ msg: "Patient Created" });
            } else if (userType === "doctor") {
                await Doctor.create(req.body);
                res.status(201).json({ msg: "Doctor Created" });
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const updateUser = (userType) => {
    return async (req, res) => {
        try {
            if (userType === "patient") {
                await Patient.update(req.body, {
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json({ msg: "Patient Updated" });
            } else if (userType === "doctor") {
                await Doctor.update(req.body, {
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json({ msg: "Doctor Updated" });
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const deleteUser = (userType) => {
    return async (req, res) => {
        try {
            if (userType === "patient") {
                await Patient.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json({ msg: "Patient Deleted" });
            } else if (userType === "doctor") {
                await Doctor.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                res.status(200).json({ msg: "Doctor Deleted" });
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};
