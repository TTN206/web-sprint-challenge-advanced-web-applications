import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
// import {useHistory} from 'react-router-dom';
// import { editColorService, deleteColorService } from '../services/colorServices';
import {fetchColorService} from '../services/fetchColorService';

const BubblePage = () => {
  // const initialColor = {
  //   color: "",
  //   code: { hex: "" }
  // };
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  // const history = useHistory();


  useEffect(()=>{ 
    fetchColorService()
    // axiosWithAuth()
    //   .get('/colors')  
      .then((res)=>{
        console.log(res)// returning the data
        setColors(res.data) // rendering!!!! OMFG!
      })
      .catch(err=>console.log(err))
  }, []) // almost forgot my [] to keep the call from going infinite, i may have crashed my browser before i caught my error...
  console.log(colors);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // editColor.preventDefault();
    // editColorService(editColor);
  };    

  const deleteColor = (colorToDelete) => {
    // colorToDelete.preventDefault();
    // deleteColorService(colorToDelete)
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles data-test-id='bubbles' colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
// [x] 1. When the component mounts, make an axios call to retrieve all color data and push to state.
// [ ] 2. Complete saveEdit, deleteColor functions
