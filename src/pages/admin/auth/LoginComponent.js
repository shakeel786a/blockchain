import React, { useState } from 'react'

import { Button, ValidationTextComponent } from '../../../commonPages'

function LoginComponent(props) {
    const { isLoading, onClickSignIn, onClickSignUp } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [warningMessage, setWarningMessage] = useState({ userNameWarningMessage: undefined, passwordWarningMessage: undefined })
    const { userNameWarningMessage, passwordWarningMessage} = warningMessage || {}

    const validation = () => {
        let status = true
        const warningMessage = {}
        if (!username) {
            warningMessage.userNameWarningMessage = 'Username required'
            status = false
        } else {
            warningMessage.userNameWarningMessage = undefined
        }
        if (!password) {
            warningMessage.passwordWarningMessage = 'Password required'
            status = false
        } else {
            warningMessage.passwordWarningMessage = undefined
        }

        setWarningMessage(warningMessage)

        return status
    }

    const onClickSubmit = () => {
        const status = validation()
        if (status) {
            onClickSignIn({ username, password })
        }
    }

    return (
        <body class="h-100">
            <div class="authincation h-100">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-md-6">
                            <div class="authincation-content">
                                <div class="row no-gutters">
                                    <div class="col-xl-12">
                                        <div class="auth-form">
                                            <div class="text-center mb-3">
                                                <a href="index.html"><img src="images/logo-full.png" alt="" /></a>
                                            </div>
                                            <h4 class="text-center mb-4 text-white">Sign in your account</h4>
                                            <div class="form-group">
                                                <label class="mb-1 text-white"><strong>Username</strong></label>
                                                <input type="text" class="form-control" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                                                <ValidationTextComponent validationMessage={userNameWarningMessage} />
                                            </div>
                                            <div class="form-group">
                                                <label class="mb-1 text-white"><strong>Password</strong></label>
                                                <input type="password" class="form-control" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                                                <ValidationTextComponent validationMessage={passwordWarningMessage} />
                                            </div>
                                            <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div class="form-group">
                                                <div class="custom-control custom-checkbox ml-1 text-white">
                                                        <input type="checkbox" class="custom-control-input" id="basic_checkbox_1" />
                                                        <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <a class="text-white" href="page-forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <Button className="btn bg-white text-primary btn-block" label="Sign In" isLoading={isLoading} onClick={onClickSubmit} />
                                            </div>
                                            {/* <div class="new-account mt-3">
                                                <p class="text-white">Don't have an account? <a class="text-white" role="button" onClick={onClickSignUp}>Sign Up</a></p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LoginComponent