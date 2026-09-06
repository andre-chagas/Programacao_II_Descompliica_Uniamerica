const doctorService = {

}

const deleteDoctor = async (id) => {
    return await doctorRepository.deleteDoctor(id);
}

// login
const getDoctorByLogin = async(login) => {
    return await DoctorRepository.getDoctorByLogin(login);
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorService;