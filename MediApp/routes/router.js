import { express } from "express";
import appointmentController from "./AppoitmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";

let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!" });
});

router.uuse("/", appointmentController);
router.use("/",  doctorController);
router.use("/",  pacientController);
router.use("/",  prescriptionController);

export default router;
