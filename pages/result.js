import React, {useContext} from 'react'
import { NameContext } from '../context/NameContext';
import { ClassContext } from '../context/ClassContext'
import { DobContext } from '../context/DobContext';
//import Image from 'next/image'
import style from '../styles/Result.module.css'

function result() {

    const { name } = useContext(NameContext);
    const { role } = useContext(ClassContext);
    const { dob } = useContext(DobContext);

    let src = (role == 'Warrior') ? '/warrior.png' : (role == 'Wizard') ? '/wizard.png' : (role == 'Rogue') ? '/rogue.png' : undefined

    return (

        <div className={style.resultContainer}>
            <p>Greetings {name}, born on {dob}. You will be a legendary {role}!</p>
            <div className={style.imageContainer}>
            <img src={src}></img>
            </div>
        </div>

    )
}

export default result
