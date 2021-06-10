import { GET, POST } from './api.http.service'

export function postUploadFileAPI(payload) {
    return POST('api/api/UploadFile')(payload)
}

// export function postAdminBannerAddAPI(payload) {
//     return GET('content/adminBannerAdd')(payload)
// }