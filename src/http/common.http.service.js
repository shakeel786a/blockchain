import { GET, POST, FILE_UPLOAD } from './api.http.service'

// Post API
export function postUploadFileAPI(payload) {
    return FILE_UPLOAD('api/api/UploadFile')(payload)
}
export function saveTokenAPI(payload){
    return POST('api/api/saveToken')(payload)
}
export function LoginAPI(payload) {
    return POST('api/api/Login')(payload)
}
// Get API
export function getUserAPI(payload) {
    return GET('api/api/GetUser')(payload)
}
export function getTokenidAPI(payload) {
    return GET('api/api/getTokenid')(payload)
}
export function getNftTokenListAPI(payload) {
    return GET('api/api/getNftTokenList')(payload)
}

// For web
// Get API
export function getNftTokenListAllAPI(payload) {
    return GET('api/api/getNftTokenListAll')(payload)
}