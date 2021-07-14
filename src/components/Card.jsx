import card from 'styles/Card.module.css'
import reol from 'images/Reol.png'


export const Card = ({ img, title, description,background, color,resizable=false}) => {
   return (
      <div className={`${card.CardContainer} ${resizable ? card.resizable:""}`}>

         <div className={card.cardContent} style={{ background: background ? `${background}` : "#546EE1DE" }}>

            <div className={card.rightContainer}>
               <div className={card.imgContainer}>
                  <img className={card.img} src={img || reol} alt="" />
               </div>
            </div>

            <div className={card.leftContainer}>
               <div className={card.textContainer}>
                  <div className={card.titleFitness} style={{ color: color ? `${color}` : "#000" }}>
                     <h3>{title || "CARD TITLE"}</h3>
                  </div>

                  <div className={card.descriptionFitness} style={{ color: color ? `${color}` : "#000" }}>
                     <p>{description || "CARD DESCRIPTION"}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
