import React, { useState, useEffect } from 'react'
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
import { CheckSession } from './services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home user={user} authenticated={authenticated} />}
          />
          <Route exact path="/about" component={About} />
          <Route
            path="/addreview/:album_id"
            component={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            exact
            path="/login"
            component={(props) => (
              <Login
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
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
