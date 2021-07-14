import { useEffect, useState } from 'react'
import mainStyle from 'styles/Main.module.css'
import { Card } from 'components/Card'
import {Button} from 'components/Button'
import {Spinn} from 'components/Spinn'


export const Main = () => {
   const [cards, setCards] = useState([])
   const [spinner, setSpinner] = useState(true)
   const fetchCards =async ()=>{
      const data = await fetch('http://localhost:3001/')
      const retrive = await data.json()
      setCards(retrive)
      cards ? setSpinner(false): setSpinner(true)
      
   }

   useEffect(()=>{
      fetchCards()
   },[spinner])


   return (
      <main className={mainStyle.main}>
         {spinner ? (
            <Spinn/>
         ):
            <div className={mainStyle.cardsContainer}>

               {
                  cards.map((el, idx) => (
                     <div key={idx} className={mainStyle.card}>
                        <Card
                           title={el.title}
                           description={el.description}
                           img={el.image}
                           color={el.color}
                           background={el.background}
                        />
                     </div>
                  ))
               }

               <div className={mainStyle.createButton}>
                  <div><Button type={"create"} text={"GENERATE A NEW CARD"} link={"/create"} /></div>
               </div>

            </div>
         
         }
      </main>
   )
}
