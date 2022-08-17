import Main from './main/Main'
import Community from './Community'
import './scss/style.scss'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route path="/community" component={Community}></Route>
      <Route exact path="/" component={Main}></Route>
    </>
  )
}

export default App
