import http from '../../helpers/http'


export const login = (username, password) => {
    const param = new URLSearchParams()
    param.append('username', username)
    param.append('password', password)
    return ({
        type: 'AUTH_LOGIN',
        payload: http().post('/auth/login', param)
    })
}

export const getDataUser = (token) => {
    return ({
        type: 'AUTH_USERDATA',
        payload: http(token).get('/profile')
    })
}

export const getHistoryUser = (token) => {
    return ({
        type: 'AUTH_USER_HISTORY',
        payload: http(token).get('/myHistory')
    })
}

export const userEdit = (data, userId) => {
    const param = new URLSearchParams(data)

    return ({
        type: 'AUTH_USERDATA',
        payload: http().patch(`users/profile/:${userId}`, param)
    })
}

export const requestResetPassword = (email) => {
    const params = new URLSearchParams()
    params.append('email', email)
    return {
        type: 'REQUEST_RESET_PASSWORD',
        payload: http().post('auth/forgotPassword', params),
        extra: email,
    }
}

export const resetPassword = (code, email, password, confirmPassword) => {
    const params = new URLSearchParams()
    params.append('code', code)
    params.append('email', email)
    params.append('password', password)
    params.append('confirmPassword', confirmPassword)
    return {
        type: 'RESET_PASSWORD',
        payload: http().post('auth/forgotPassword', params)
    }
}

export const verifyUser = (token, code = null) => {
    const params = new URLSearchParams()
    if (code) {
        params.append('code', code)
    }
    return {
        type: 'VERIFY_USER',
        payload: http(token).post('auth/verifyUser', params)
    }
}