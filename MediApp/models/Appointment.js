import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    date: {
        type: Data,
        required: [true, 'Appointmenent Date is required.']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctorid Date is required.']
    },
    pacientId: {
        type: String,
        required: [true, 'PacientId Date is required.']
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;