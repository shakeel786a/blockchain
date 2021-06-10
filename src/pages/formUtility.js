import { showToastMessage } from "../helper/utility"

export const valiation = formInfo => {
    const { file, name, description, sellerFee, dateTime, startingPrice, minimumPrice, reservePrice } = formInfo || {}
    
    if (!file) {
        showToastMessage('File required')
        return false
    }
    if (!name) {
        showToastMessage('Name required')
        return false
    }
    if (!sellerFee) {
        showToastMessage('Seller fee required')
        return false
    }
    if (!dateTime) {
        showToastMessage('Date and Time required')
        return false
    }
    if (!startingPrice) {
        showToastMessage('Starting price required')
        return false
    }
    if (!minimumPrice) {
        showToastMessage('Minimum price required')
        return false
    }
    if (!reservePrice) {
        showToastMessage('Reserve price required')
        return false
    }

    return true
}