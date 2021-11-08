import React, { useContext, useState } from 'react'
import { NameContext } from '../context/NameContext';
import { TextField, Button } from '@mui/material';
import style from '../styles/FirstQuestion.module.css'


function FirstQuestion({setSecondUnlock}) {

  //Disable button after click
  const [disabled, setDisabled] = useState(false);

  //Character name state
  const { name, setName } = useContext(NameContext);


  //name state change handler
  const onChangeHandler = (e) => {
    setName(e.target.value); 
  }

  //Button submit handler with empty input validation
  const submitHandler = () => {
    if(name == '') {
      alert('please input a valid name')
    } else {
      setDisabled(true);
      setSecondUnlock(100);
    }
  }

    return (
        <div className={style.firstQuestion}>
          <p>Let's start off with your Character's name</p>
          <div className={style.inputContainer}>
            <TextField id="outlined-basic" label="Character Name" variant="outlined" color='primary' InputProps={{className: style.textfieldInput}} focused disabled={disabled} onChange={onChangeHandler}/>
            <Button variant="outlined" onClick={submitHandler}>Submit</Button>
          </div>
        </div>
    )
}

export default FirstQuestion