import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFOund from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFOund} />
  </Switch>
)

export default App
