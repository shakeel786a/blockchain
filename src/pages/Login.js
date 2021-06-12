import React, { useEffect } from 'react'

import { getFullRoute, showToastMessage } from '../helper/utility'
import * as fixedData from '../helper/settings'
import { useFetchAPI } from '../hooks'
import { LoginAPI } from '../http/common.http.service'
import LoginComponent from './LoginComponent'

const {
    formRoute
} = fixedData.routeName

function Login(props) {
    const { history } = props

    const [
        {
            isLoading: isSignInLoading,
            response: { isSuccess: isSignInSuccess, data }
        },
        getSignIn
    ] = useFetchAPI()

    useEffect(() => {
        if (isSignInLoading === false && isSignInSuccess) {
            history.push({ pathname: getFullRoute(formRoute) })
        } else {
            data && showToastMessage(data)
        }
    }, [isSignInLoading, isSignInSuccess, data])

    const onClickSignIn = ({ username, password }) => {
        getSignIn({
            api: LoginAPI,
            payload: {
                body: {
                    username,
                    password
                }
            }
        })
    }

    return (
        <LoginComponent isLoading={isSignInLoading} onClickSignIn={onClickSignIn} />
    )
}

export default Login