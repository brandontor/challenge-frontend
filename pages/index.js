import React, {useState} from 'react';
import style from '../styles/Home.module.css'
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion';



export default function Home() {
  
  const [secondUnlock, setSecondUnlock] = useState(0);
  const [thirdUnlock, setThirdUnlock] = useState(0)

  return (
    <div className={style.homeContainer}>
      {secondUnlock == 0 ? <p>Welcome to the RPG Character Maker!</p> :undefined}
    
       <FirstQuestion setSecondUnlock={setSecondUnlock}/>
        
       <SecondQuestion secondUnlock={secondUnlock} setThirdUnlock={setThirdUnlock}/>

      <ThirdQuestion thirdUnlock={thirdUnlock}/>

    </div>
  )
}
