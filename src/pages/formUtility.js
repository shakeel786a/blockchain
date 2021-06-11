import { showToastMessage } from "../helper/utility"

export const validation = formInfo => {
    const { file, name, description, royalties, dateTime, startingPrice, minimumPrice, reservePrice } = formInfo || {}

    const formValidationMessage = {
        fileValidationMessage: undefined,
        nameValidationMessage: undefined,
        sellerFeeValidationMessage: undefined,
        dateTimeValidationMessage: undefined,
        startingPriceValidationMessage: undefined,
        minimumPriceValidationMessage: undefined,
        reservePriceValidationMessage: undefined
    }

    let status = true
    
    if (!file && formInfo.hasOwnProperty('file')) {
        formValidationMessage.fileValidationMessage = 'File required'
        status = false
    } else {
        formValidationMessage.fileValidationMessage = undefined
    }

    if (!name && formInfo.hasOwnProperty('name')) {
        formValidationMessage.nameValidationMessage = 'Name required'
        status = false
    } else {
        formValidationMessage.nameValidationMessage = undefined
    }
    
    if (!royalties && formInfo.hasOwnProperty('royalties')) {
        formValidationMessage.sellerFeeValidationMessage = 'Seller fee required'
        status = false
    } else {
        formValidationMessage.sellerFeeValidationMessage = undefined
    }

    if (!dateTime && formInfo.hasOwnProperty('dateTime')) {
        formValidationMessage.dateTimeValidationMessage = 'Date and Time required'
        status = false
    } else {
        formValidationMessage.dateTimeValidationMessage = undefined
    }

    if (!startingPrice && formInfo.hasOwnProperty('startingPrice')) {
        formValidationMessage.startingPriceValidationMessage = 'Starting price required'
        status = false
    } else {
        formValidationMessage.startingPriceValidationMessage = undefined
    }

    if (!minimumPrice && formInfo.hasOwnProperty('minimumPrice')) {
        formValidationMessage.minimumPriceValidationMessage = 'Minimum price required'
        status = false
    } else {
        formValidationMessage.minimumPriceValidationMessage = undefined
    }

    if (!reservePrice && formInfo.hasOwnProperty('reservePrice')) {
        formValidationMessage.reservePriceValidationMessage = 'Reserve price required'
        status = false
    } else {
        formValidationMessage.reservePriceValidationMessage = undefined
    }

    return { status, formValidationMessage }
}