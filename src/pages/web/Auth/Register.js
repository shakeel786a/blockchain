import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { authAction } from '../../../actions'
import { useFetchAPI } from '../../../hooks'
import { postUploadProfilePicAPI, postRegistrationAPI } from '../../../http/common.http.service'
import { getAccount, signMsg } from '../../../web3Integration/global.service'
import { Avatar, Button, FileDropSection, ValidationTextComponent } from '../../../commonPages'

function Register(props) {
    const { isVisible, onClickClose, onClickLogin } = props
    const [registerInfo, setRegisterInfo] = useState()

    const { nickName, avatar, email, walletAddress } = registerInfo || {}
    const [validationMessage, setValidationMessage] = useState({})
    const {
        nickNameValidationMessage,
        emailValidationMessage,
        avatarValidationMessage,
        walletAddressValidationMessage
    } = validationMessage

    const dispatch = useDispatch()

    const [
        {
            isLoading: isProfileUploadLoading,
            response: { isSuccess: isProfileUploadSuccess, data: { path: filePath = "" } = {} } = {}
        },
        getProfileUpload
    ] = useFetchAPI()

    const [
        {
            isLoading: isRegisterLoading,
            response: { isSuccess: isRegisterSuccess, data: registerData } = {}
        },
        postRegister
    ] = useFetchAPI()

    useEffect(() => {
        if(isVisible) {
            (async () => {
                const walletAddress = await getAccount()
                // const signature = await signMsg(walletAddress)
    
                handleOnChange({ walletAddress })
            })()
        }
    }, [isVisible])

    useEffect(() => {
        if (isProfileUploadLoading === false) {
            if (isProfileUploadSuccess && filePath) {
                handleOnChange({ avatar: filePath })
            }
        }
    }, [isProfileUploadLoading, isProfileUploadSuccess, filePath])

    useEffect(() => {
        if (isRegisterLoading === false) {
            if (isRegisterSuccess && registerData) {
                // console.log('registerData===============', registerData)
                dispatch({ type: authAction.SET_WEB_USER_INFO, payload: registerData })
                onClickClose()
            }
        }
    }, [isRegisterLoading, isRegisterSuccess, registerData])

    const handleOnChange = info => {
        setRegisterInfo({ ...registerInfo, ...info })
    }

    const handleOnSelectFile = ({ file }) => {
        getProfileUpload({
            api: postUploadProfilePicAPI,
            payload: {
                body: {
                    file
                }
            }
        })
    }

    const validation = () => {
        let status = true
        const validationMessage = {}
        if (!nickName) {
            validationMessage.nickNameValidationMessage = 'Nick name required'
            status = false
        } else {
            validationMessage.nickNameValidationMessage = undefined
        }
        if (!email) {
            validationMessage.emailValidationMessage = 'Email required'
            status = false
        } else {
            validationMessage.emailValidationMessage = undefined
        }
        if (!avatar) {
            validationMessage.avatarValidationMessage = 'File required'
            status = false
        } else {
            validationMessage.avatarValidationMessage = undefined
        }
        if (!walletAddress) {
            validationMessage.walletAddressValidationMessage = 'Wallet address required'
            status = false
        } else {
            validationMessage.walletAddressValidationMessage = undefined
        }

        setValidationMessage(validationMessage)
        return status
    }

    const onClickRegister = () => {
        if (validation()) {
            // console.log('registerInfo===========', registerInfo)

            (async () => {
                const signature = await signMsg(walletAddress)
                
                if (signature) {
                    postRegister({
                        api: postRegistrationAPI,
                        payload: {
                            body: {
                                ...registerInfo,
                                signature
                            }
                        }
                    })
                }
            })()
        }
    }

    if (!isVisible) {
        return null
    }

    return (
        <section className="at-login-form">
            <div className="modal fade" id="at-signup-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Welcome</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClickClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group text-center">
                                <FileDropSection selectedFile={handleOnSelectFile}>
                                    <label className="label-with-input-file-hidden">
                                        <span className="ui-avatar size-80 cp">
                                            <Avatar uri={avatar} />
                                        </span>
                                        <div className="tac mt-1">
                                            <span className="cp small">Choose Profile Picture</span>
                                        </div>
                                    </label>
                                </FileDropSection>
                                <ValidationTextComponent validationMessage={avatarValidationMessage} />
                            </div>
                            <div className="form-group">
                                <label for="Nickname">Nickname</label>
                                <input type="text" className="form-control-form" placeholder="Nickname" value={nickName} onChange={e => handleOnChange({ nickName: e.target.value })} />
                                <ValidationTextComponent validationMessage={nickNameValidationMessage} />
                            </div>
                            <div className="form-group">
                                <label for="Email">Email</label>
                                <input type="email" className="form-control-form" placeholder="Email" value={email} onChange={e => handleOnChange({ email: e.target.value })} />
                                <ValidationTextComponent validationMessage={emailValidationMessage} />
                            </div>
                            <div className="form-group">
                                <label for="wallet_address">Wallet Address</label>
                                <input type="text" className="form-control-form" placeholder="Wallet Address" value={walletAddress} disabled />
                                <ValidationTextComponent validationMessage={walletAddressValidationMessage} />
                            </div>
                            <div class="text-center">
                            <Button className="bg-primary site-btn" isLoading={isRegisterLoading} label="Register" onClick={onClickRegister} />
                        </div>  
                        </div>  
                        <div className="p-4 border-top">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-3">
                                    <p className="ta-l mb-0">Already have an account ? </p>
                                </div>
                                <div className="col-md-6 text-md-right">
                                    <button className="site-btn" data-toggle="modal" data-dismiss="modal"
                                        data-target="#at-login" onClick={onClickLogin}>Login </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register