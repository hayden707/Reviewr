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
import AlbumReviews from './pages/AlbumReviews'
import ProtectedRoute from './components/ProtectedRoute'
import Logout from './pages/Logout'

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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={About} />
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
          <Route
            exact
            path="/logout"
            component={(props) => (
              <Logout
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/"
            component={() => <Home user={user} authenticated={authenticated} />}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            path="/addreview/:album_id"
            component={(props) => <AddReview {...props} user={user} />}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/reviews"
            component={Reviews}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/search"
            component={Search}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/userprofile"
            component={UserProfile}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/feed"
            component={Feed}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            path="/albumreviews/:album_id"
            component={(props) => <AlbumReviews {...props} />}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
