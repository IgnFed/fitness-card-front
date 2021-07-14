import { useState } from 'react';
import { Card } from '../components/Card'
import { ModifyCard } from '../components/ModifyCard'

export const CreateCard = () => {

   const [inputValue, setInputValue] = useState(
      {
         
         title: "Title",
         description: "Description Card",
         color: "#000",
         background: "#546EE1DE",
         img: null
      })

   const changeHandler = (e) => {

      setInputValue(
         {
            ...inputValue, [e.target.name]: e.target.value
         }
      )
   }

   const generateNewCard = (e) => {
      e.preventDefault()
      fetch(`http://localhost:3001/`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
         },
         body: JSON.stringify(inputValue)
      })
         .then(_data => _data.json())
   }

   return (
      <div className="createCardContainer">

         <div className="cardSide">
            <Card
               img={inputValue.img}
               title={inputValue.title}
               description={inputValue.description}
               background={inputValue.background}
               color={inputValue.color}
               resizable={true}
            />
         </div>
         <div className="inputSide">
            <ModifyCard changeHandler={changeHandler} generateNewCard = {generateNewCard}/>
         </div>

      </div>
   )
}