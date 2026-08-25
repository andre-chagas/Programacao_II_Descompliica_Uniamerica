import express  from "express";
import bcrypt from "bcrypt";
import DoctorService from "../services/DoctorService.js"

let router = express.Router();

router.get("/doctors", async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctores();
        res.send(doctors);
    }   catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/getDoctor/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        res.send(appointment);
    }   catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/postDoctor", async (req, res) => {
    const { name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
            const hashedPasswrod = await bcrypt.hash(password, 10);
            const doctor = await DoctorService.saveDoctor({ name, password: hashedPasswrod, medicalSpecialty });
            res.status(201).send(doctor);
    }   catch (error) {
            console.log(error);
            res.status(500).send("Falha ao registrar médico" + error);
    }
});

router.put("/appointments/:id", async (req, res) => {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const appointment = await AppointmentService.updateAppointment(id, { date, doctorId, pacientId });
        res.send(appointment);
    }   catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete("/doctors/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor);
    }   catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;