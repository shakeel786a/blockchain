import { GET, POST } from './api.http.service'

export function postUploadFileAPI(payload) {
    return POST('api/api/UploadFile')(payload)
}

export function getUserAPI(payload) {
    return GET('api/api/GetUser')(payload)
}