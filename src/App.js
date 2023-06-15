import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

const App = () => {
  console.log('app.js rendered')
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
