

//.....Api add doctors
const addDoctors = async (req, res) => {
    try {
        const { name, speciality, experience, email, password, degree, about, fees, address } = req.body
        const imageFile = req.file

        console.log({ name, speciality, experience, email, password, degree, about, fees, address }, imageFile)

    } catch (error) {
        console.error("addDoctors:", error);
        res.status(500).json({ message: "error" });
    }
}

export { addDoctors }