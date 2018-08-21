import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as NavLinkBase,
  Redirect
} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import ErrorNotFound from './screens/ErrorNotFound'
import User from './screens/User'

const navLinkStyle = {
  padding: 4,
  transition: '0.4s',
  textDecoration: 'none'
}

const navLinkStyleActive = {
  color: 'coral'
}

const NavLink = (props) => (
  <NavLinkBase
    {...props}
    style={navLinkStyle}
    activeStyle={navLinkStyleActive}
  />
)

class App extends React.Component {
  state = {
    username: 'Pro100_Petya'
  }
  render() {
    const { username } = this.state

    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/about' exact>About</NavLink>
          </nav>

          <Switch>
            {
              this.state.isUserLoggedIn
                ? null
                : <Redirect from='/info' to='/about' exact />
            }
            
            <Route path='/' exact render={() => <Home username={username} />} />

            <Route path='/about' exact component={About} />

            <Route path='/users/:user' exact render={(props) => <User {...props} />} />

            <Route component={ErrorNotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App