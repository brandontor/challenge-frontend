import React, {useState, useContext} from 'react';
import { ClassContext } from '../context/ClassContext';
import { Button } from '@mui/material';
import { DobContext } from '../context/DobContext';
import Link from 'next/link'
import style from '../styles/ThirdQuestion.module.css'

function ThirdQuestion({thirdUnlock}) {

    const [disabled, setDisabled] = useState(false);
    //This opacity state is for the link component that takes you to the result page
    const [opacity, setOpacity] = useState(0);
    const { role } = useContext(ClassContext);
    const { dob, setDob } = useContext(DobContext);


    const selectHandler = (e) => {
      setDob(e.target.value)
    }

    //dob change handler with  empty input validation
    const submitHandler = () => {
        if(dob == '') {
          alert('Please enter a valid date ')
        } else {
          setOpacity(100);
          setDisabled(true);
        }
    }

    //went with dob html input as it was most straight forward option
    //I was having trouble styling the MUI date picker component and opted for a simpler option 
    return (
        <div className={style.thirdQuestion} style={{opacity: `${thirdUnlock}`}}>
          <p>A fine choice. You will be a fantastic {role}! Finally, when were you born?</p>
          <div>
            <input type="date" onChange={selectHandler} ></input>
            <Button variant="outlined" className={style.submit} onClick={submitHandler} disabled={disabled}>Submit</Button>
          </div>
            <Button variant="outlined" style={{opacity: `${opacity}`}}><Link href="/result">See your Character!</Link></Button>
        </div>
    )
}

export default ThirdQuestion
