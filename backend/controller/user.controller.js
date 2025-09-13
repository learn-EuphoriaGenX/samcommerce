let User = require('../models/user.model')
const bcrypt = require('bcryptjs')

module.exports.userRegister = async (request, response) => {
    let { name, email, password } = request.body
    if (!name || !email || !password) {
        return response.status(400).json({ message: "All Fields Are Required", success: false })
    } else {
        try {
            let existingUser = await User.findOne({ email: email })
            console.log(existingUser);

            if (existingUser) {
                return response.status(409).json({ message: "User Already Exists", success: false })
            }
            let hasshedPassword = await bcrypt.hashSync(password, 4)
            let newUser = await User.create({
                name,
                email,
                password: hasshedPassword
            })
            delete newUser._doc.password
            return response.status(201).json({ message: "User Registered Successfully!", success: true, user: newUser })
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: "Internal Server Problem", success: false })
        }
    }
}
module.exports.userLogin = async (request, response) => {
    let { email, password } = request.body
    if (!email || !password) {
        return response.status(400).json({ message: "All Fields Are Required", success: false })
    } else {
        try {
            let user = await User.findOne({ email: email })
            if (!user) {
                return response.status(404).json({ message: "User Not Found!", success: false })
            } else {
                let isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return response.status(401).json({ message: "User Not Found!", success: false })
                }
                delete user._doc.password
                return response.status(201).json({ message: "User LoggedIn Successfully!", success: true, user })
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: "Internal Server Problem", success: false })
        }

    }

}

module.exports.userProfile = (request, response) => {
    return response.send("User Profile logic")
}