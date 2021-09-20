import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import AddReview from './pages/AddReview'
import Login from './pages/Login'
import Reviews from './pages/Reviews'
import Search from './pages/Search'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
import Feed from './pages/Feed'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addreview" component={AddReview} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </main>
    </div>
  )
}

export default App
