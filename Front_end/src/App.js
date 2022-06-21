import React, { Component, Suspense} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// import WelcomePage from '../src/views/pages/welcomePage/welcomePage'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const ForgotPassword = React.lazy(() => import("./views/pages/ForgotPassword/ForgotPassword"))
const ResetPassword = React.lazy(() => import('./views/pages/resetPassword/ResetPassword'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
          {/* <Route exact path="/welcome"  element={<WelcomePage />} /> */}
            <Route exact path="/login"  element={<Login />} />
            <Route exact path="/register"  element={<Register />} />
            <Route exact path="/404"  element={<Page404 />} />
            <Route exact path="/500"  element={<Page500 />} />
            <Route exact path="/forgot-password"  element={<ForgotPassword />} />
            <Route exact path="/reset-password/:token"  element={<ResetPassword />} />
            <Route path="*"  element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
