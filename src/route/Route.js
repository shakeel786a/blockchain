import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'
// import { useMetaInformation } from 'hooks/api'

// #region Import Pages
import Form from '../pages/admin/collection/Form'
import Login from '../pages/admin/auth/Login'
import Register from '../pages/admin/auth/Register'
import NftTokenList from '../pages/admin/nftToken/NftTokenList'
import Test from '../pages/admin/web3Integration/Test'

// import Test from 'components/Test'
// import Footer from 'components/Footer'
// import Underdevelopment from 'commonUI/Underdevelopment'
// import PrivateRoute from './PrivateRoute'
// import RouteWithHeader from './RouteWithHeader'
// import Demo from '../components/Demo'

const {
  auth: { loginRoute, registerRoute },
  formRoute,
  nftTokenListRoute,
  testRoute
} = fixedData.routeName

const Routes = () => {
  // const { isLoading, response } = useMetaInformation()

  return (
    <BrowserRouter>
      <Switch>
        {/* ======== Authentication ======== */}
        {/* <RouteWithHeader exact path={getFullRoute(loginRoute)} component={Login} /> */}
        <Route exact path='/' component={Form} />
        <Route exact path={getFullRoute(formRoute)} component={Form} />
        <Route exact path={getFullRoute(loginRoute)} component={Login} />
        <Route exact path={getFullRoute(nftTokenListRoute)} component={NftTokenList} />
        <Route exact path={getFullRoute(registerRoute)} component={Register} />
        <Route exact path={getFullRoute(testRoute)} component={Test} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Routes
