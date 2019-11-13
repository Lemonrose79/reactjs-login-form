import axios from "axios"


export default {


    // Saves a book to the database
    registerUser: function (user) {
        console.log(user)
        return axios.post("/users/register", user);
    },



}