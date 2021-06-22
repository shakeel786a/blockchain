import React from 'react'

function Register(props) {
    const { isVisible, onClickClose, onClickLogin } = props

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
                            <form>
                                <div class="form-group text-center">
                                    <label class="label-with-input-file-hidden">
                                        <span class="ui-avatar size-80 cp">
                                            <img src="./img/default_avatar.jpg" />
                                        </span>
                                        <div class="tac mt-1">
                                            <span class="cp small">Choose Profile Picture</span>
                                        </div>
                                        <input type="file" />
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="Nickname">Nickname</label>
                                    <input type="text" class="form-control-form " id="Nickname" placeholder="Nickname" />
                                </div>
                                <div class="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" class="form-control-form " id="Email" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="wallet_address">Wallet Address</label>
                                    <input type="text" class="form-control-form " id="wallet_address" placeholder="Wallet Address" />
                                </div>
                                <button type="submit" class="btn-lgin">Register</button>
                            </form>
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