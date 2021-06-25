import React, { useState, useEffect } from 'react'

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
                const signature = await signMsg(walletAddress)
    
                handleOnChange({ signature, walletAddress })
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
                console.log('registerData===============', registerData)
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
            console.log('registerInfo===========', registerInfo)
            postRegister({
                api: postRegistrationAPI,
                payload: {
                    body: {
                        ...registerInfo
                    }
                }
            })
        }
    }

    if (!isVisible) {
        return null
    }

    return (
        <section class="at-login-form">
            <div class="modal fade" id="at-signup-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Welcome</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onClickClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group text-center">
                                <FileDropSection selectedFile={handleOnSelectFile}>
                                    <label class="label-with-input-file-hidden">
                                        <span class="ui-avatar size-80 cp">
                                            <Avatar uri={avatar} />
                                        </span>
                                        <div class="tac mt-1">
                                            <span class="cp small">Choose Profile Picture</span>
                                        </div>
                                    </label>
                                </FileDropSection>
                                <ValidationTextComponent validationMessage={avatarValidationMessage} />
                            </div>
                            <div class="form-group">
                                <label for="Nickname">Nickname</label>
                                <input type="text" class="form-control-form " placeholder="Nickname" value={nickName} onChange={e => handleOnChange({ nickName: e.target.value })} />
                                <ValidationTextComponent validationMessage={nickNameValidationMessage} />
                            </div>
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="email" class="form-control-form " placeholder="Email" value={email} onChange={e => handleOnChange({ email: e.target.value })} />
                                <ValidationTextComponent validationMessage={emailValidationMessage} />
                            </div>
                            <div class="form-group">
                                <label for="wallet_address">Wallet Address</label>
                                <input type="text" class="form-control-form " placeholder="Wallet Address" value={walletAddress} disabled />
                                <ValidationTextComponent validationMessage={walletAddressValidationMessage} />
                            </div>
                            <Button class="btn-lgin" isLoading={isRegisterLoading} label="Register" onClick={onClickRegister} />
                        </div>
                        <div class="p-4 border-top">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <p class="ta-l mb-0">Already have an account ? </p>
                                </div>
                                <div class="col-md-6">
                                    <button class="site-btn" data-toggle="modal" data-dismiss="modal"
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