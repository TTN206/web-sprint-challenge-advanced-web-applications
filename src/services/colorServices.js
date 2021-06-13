import {axiosWithAuth} from '../helpers/axiosWithAuth';
// import React, { useEffect, useState } from "react";
// import {useHistory} from 'react-router-dom';
// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";

export const editColorService = () => {
    axiosWithAuth()
      .put(`/colors`) // i have the wrong params to find the id of the editingColors
      .then(res => {
        console.log(res.data)
        // updateColor(res.data)
        // history.push(`/colors`)
      })
      .catch(err => console.log(err))
}

export const deleteColorService = () => {
    axiosWithAuth()
      .delete(`/colors`)
      .then(res => {
          console.log(res.data)
        // setColors(res.data)
        // history.push(`/colors`)
      })
      .catch(err => console.log(err))
}