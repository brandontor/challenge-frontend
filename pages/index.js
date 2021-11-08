import React, {useState} from 'react';
import style from '../styles/Home.module.css'
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion';



export default function Home() {
  
  //State for unlocking second and third questions
  const [secondUnlock, setSecondUnlock] = useState(0);
  const [thirdUnlock, setThirdUnlock] = useState(0)

  return (

    //Arranged each question as its own component
    

    <div className={style.homeContainer}>

         {/* Ternary to make the welcome go away after first question answered*/}
      {secondUnlock == 0 ? <p>Welcome to the RPG Character Maker!</p> :undefined}
    
       <FirstQuestion setSecondUnlock={setSecondUnlock}/>
        
       <SecondQuestion secondUnlock={secondUnlock} setThirdUnlock={setThirdUnlock}/>

      <ThirdQuestion thirdUnlock={thirdUnlock}/>

    </div>
  )
}
