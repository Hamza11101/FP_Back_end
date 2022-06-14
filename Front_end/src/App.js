import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import TableTag from './views/base/tables/tagTable'
import AddTag from './views/base/tables/addTag'
import AddUser from './views/base/tables/addUser'
import UpdateTag from './views/base/tables/updateTag'
import UpdateUser from './views/base/tables/updateUser'
import TableEvent from './views/base/tables/eventTable'
import AddEvent from './views/base/tables/addEvent';
import UpdateEvent from './views/base/tables/updateEvent'
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
const ForgotPassword = React.lazy(()=> import("./views/pages/ForgotPassword/ForgotPassword"))
const ResetPassword = React.lazy(()=> import('./views/pages/ressetPassword/ressetPassword'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route exact path="/forgotpassword" name="Forgot Password" element={<ForgotPassword />} />
            <Route exact path="/resetpassword" name="Reset Password" element={<ResetPassword />} />
            <Route exact path="/tagtable" name="Tags table " element={<TableTag />} />
            <Route exact path="/addtag" name="Add Tags " element={<AddTag />} />
            <Route exact path="/adduser" name="Add Users" element={<AddUser />} />
            <Route exact path="/updatetag/:id" name="Update Tag" element={<UpdateTag />} />
            <Route exact path="/updateuser/:id" name="Update User" element={<UpdateUser />} />
            <Route exact path="/eventtable" name="Event Table" element={<TableEvent />} />
            <Route exact path="/addevent" name="Add Event" element={<AddEvent />} />
            <Route exact path="/updateevent" name="Update Event" element={<UpdateEvent />} />

          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
