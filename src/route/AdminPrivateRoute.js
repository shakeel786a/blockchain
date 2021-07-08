import React, { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'

const {
  auth: { loginRoute }
} = fixedData.routeName

const AdminPrivateRoute = ({ component: Component, render, customState, isLogin, isLoading, ...rest }) => {
  const [isAvailable, setIsAvailable] = useState(false)

  // console.log('isLogin===============', isLogin, isLoading)

  setTimeout(function(){
    setIsAvailable(true)
  }, 1000)

  return (
    <Route
      {...rest}
      render={props =>
        isAvailable ? (
          !isLogin ? (
            <Redirect
              to={{
                pathname: getFullRoute(loginRoute)
              }}
            />
          ) : (
            render ? render() : <Component {...props} />
          )
        ) : null
      }
    />
  )
}

const mapStateToProps = state => ({
  isLogin: state && state.admin && state.admin.app && state.admin.app.auth && state.admin.app.auth.isLogin
})

export default connect(mapStateToProps)(AdminPrivateRoute)
