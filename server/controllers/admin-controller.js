const User = require("../models/user_model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
    try {  
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No User found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async (req, res, next) => {
    try {  
        const contacts = await Contact.find({});
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Contact found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getAllContacts };
