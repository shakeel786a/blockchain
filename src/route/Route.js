import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'
// import { useMetaInformation } from 'hooks/api'

// #region Import Pages
import Form from '../pages/collection/Form'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import NftTokenList from '../pages/nftToken/NftTokenList'

// import Test from 'components/Test'
// import Footer from 'components/Footer'
// import Underdevelopment from 'commonUI/Underdevelopment'
// import PrivateRoute from './PrivateRoute'
// import RouteWithHeader from './RouteWithHeader'
// import Demo from '../components/Demo'

const {
  auth: { loginRoute, registerRoute },
  formRoute,
  nftTokenListRoute
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
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Routes
