import { mongoose } from 'mongoose';
import Pacient from './Pacient.js';
import Doctor from './Doctor.js';

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    date: {
        type: Data,
        required: [true, 'Appointmenent Date is required.']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctorid Date is required.'],
        validate: {
            validator: async function(value) {
                const id = new mongoose.Types.ObjectId(value);
                return Doctor.exists({ _id: id });
            },
            message: props =>
                `DoctorID ${props.value} not found.`
        }
    },
    pacientId: {
        type: String,
        required: [true, 'PacientId is required.'],
        validate: {
            validator: function (value) {
                const id = new mongoose.Types.ObjectId(value);
                return Pacient.exists({ _id: id });
            },
            message: props =>
                `PacientID ${props.value} not found.`
        }
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;