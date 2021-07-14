import {Main} from 'pages/Main'
import { CreateCard } from 'pages/CreateCard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const Routes = () => {
   return (
      <>

         <Router>

            <Switch>
               <Route exact path="/" component={Main}/>

               <Route path="/create" component={CreateCard} />
            </Switch>
         
         </Router>


      </>
   )
}
