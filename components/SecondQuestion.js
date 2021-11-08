import React, {useContext, useState} from 'react'
import { NameContext } from '../context/NameContext';
import { ClassContext } from '../context/ClassContext';
import style from '../styles/SecondQuestion.module.css'
import { Button, ButtonGroup} from '@mui/material';




function SecondQuestion({ secondUnlock , setThirdUnlock}) {

    const [disabled, setDisabled] = useState(false);
    const { name } = useContext(NameContext);
    const { setRole } = useContext(ClassContext);


    const submitHandler = (e) => {
        setDisabled(true)
        setRole(e.target.value)
        setThirdUnlock(100);
    }

    return (
        <div className={style.secondQuestion} style={{opacity: `${secondUnlock}`}}>
            <p>Hello {name}! Please select the class you would like to play.</p>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" disabled={disabled}>
            <Button value={'Warrior'} onClick={submitHandler}>Warrior</Button>
            <Button value={'Wizard'} onClick={submitHandler}>Wizard</Button>
            <Button value={'Rogue'} onClick={submitHandler}>Rogue</Button>
            </ButtonGroup>
        </div>
    )
}

export default SecondQuestion
