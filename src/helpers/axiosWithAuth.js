import axios from "axios";

//Task List:
// [x] Build and export a function used to send in our authorization token

export const axiosWithAuth = () =>{
   
    const token = localStorage.getItem('token');

    return axios
            .create({
                baseURL:'http://localhost:5000/api', // from handlers.js line 93: const urlBase = 'http://localhost:5000/api';
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${token}`,
                }
            });
}