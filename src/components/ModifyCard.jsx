import modify from 'styles/ModifyCard.module.css'
import { Button } from 'components/Button'

export const ModifyCard = ({changeHandler, generateNewCard}) => {

   
   return (
      <div className = {modify.modifyContainer}>
         <div className={modify.modifyFormContainer}>

         <form className={modify.form}>

               <div className={modify.inputContainer}>
                  <label htmlFor="title">TITLE</label>
                  <input type="text" id ="title" className={modify.input} name ="title"  placeholder="Title"onChange={e=>changeHandler(e)}/>
               </div>

               <div className={modify.inputContainer}>
                  {/*<label htmlFor="description">DESCRIPCIÓN</label>
                   <input type="text" id="description" className={modify.input} name="description" placeholder="Description" onChange={e => changeHandler(e)}/> */}
                  <label htmlFor="description">DESCRIPTION</label>
                  <textarea type="text" id ="description" className={modify.input} name ="description"  placeholder="Description" onChange={e=>changeHandler(e)}></textarea>
               </div>

               <div className={modify.inputContainer}>
                  <label htmlFor="color">COLOR</label>
                  <input type="text" id ="color" className={modify.input} name="color" placeholder="Color: #000 or BLACK" onChange={e=>changeHandler(e)}/>
               </div>

               <div className={modify.inputContainer}>
                  <label htmlFor="background">BACKGROUND</label>
                  <input type="text" id="background" className={modify.input} name="background" placeholder="Background-Color: #546EE1DE or rgba(84, 110, 225, 0.871)" onChange={e=>changeHandler(e)}/>
               </div>

               <div className={modify.inputContainer}>
                  <label htmlFor="img">IMAGE</label>
                  <input type="text" id ="img" className={modify.input} name ="img"  placeholder="Image" onChange={e=>changeHandler(e)}/>
               </div>
               <div className={modify.inputContainer}>
                  <div className={modify.flexBtnContainer}>
                     
                     <button type="button" onClick={(e)=>generateNewCard(e)} className="button"><Button text={"CREATE"} link={"/"} styletype={"create"}/></button>
                     <button type="button" className="button"><Button text={"BACK"} link={"/"} styletype={"back"}/></button>
                  </div>
               </div>
         </form>

         </div>
      </div>
   )
}
