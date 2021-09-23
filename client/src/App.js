import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import About from './pages/About'
import AddReview from './pages/AddReview'
import AlbumReviews from './pages/AlbumReviews'
import EditReview from './pages/EditReview'
import Feed from './pages/Feed'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Reviews from './pages/Reviews'
import Search from './pages/Search'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
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
      <Nav
        handleLogOut={handleLogOut}
        authenticated={authenticated}
        user={user}
      />
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
          {authenticated && user ? (
            <ProtectedRoute
              authenticated={authenticated}
              user={user}
              exact
              path="/"
              component={() => (
                <Home user={user} authenticated={authenticated} />
              )}
            />
          ) : (
            <Route exact path="/" component={Landing} />
          )}
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
            path="/userprofile/:user_id"
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
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            exact
            path="/editreview/:review_id"
            component={EditReview}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
