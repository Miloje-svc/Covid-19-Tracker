import { Home, SignUp, LogIn } from './pages'
import { Switch, Route } from 'react-router-dom'
import ROUTES from './routes'
import GlobalStyle from './GlobalStyles'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={LogIn} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        <Route exact path='/' component={Home} />
      </Switch>
      <GlobalStyle />
    </>
  )
}