import {axiosWithAuth} from '../helpers/axiosWithAuth';
// import React, { useEffect, useState } from "react";
// import {useHistory} from 'react-router-dom';
// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";

const fetchColorService = () => {

    return axiosWithAuth()
        .get(`/colors`)
        .then((res)=>{
            console.log(res)
            setColors(res.data)
        })
        .catch((err)=>console.log(err))
};
export default fetchColorService;