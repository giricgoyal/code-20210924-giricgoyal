import axios from 'axios'

export type ErrorType = {
    status: number
    message: string
    error?: Error
}

export const logError = (errorObj: ErrorType) => {
    console.log(new Date(), 'ERROR', errorObj)
}

export const logInfo = (str: string, ...params) => {
    console.log(new Date(), 'INFO', str, ...params)
}

export const get500Error = (error: any): ErrorType => {
    if (error.status) {
        return error
    }

    const errorObj = {
        status: 500,
        message: 'An error occured.',
        errorMessage: error?.response?.data?.message,
        error,
    }
    logError(errorObj)
    return errorObj
}

export const get400Error = (message: string): ErrorType => {
    const errorObj = {
        status: 400,
        message,
    }
    logError(errorObj)
    return errorObj
}

export const get = async (url, params = {}) => {
    try {
        const result = await axios.get(url, { params })
        return result.data
    } catch (error) {
        throw get500Error(error)
    }
}

export const add = async (url, data = {}) => {
    try {
        const result = await axios.post(url, data)
        return result.data
    } catch (error) {
        throw get500Error(error)
    }
}

export const update = async (url, data = {}) => {
    try {
        const result = await axios.put(url, data)
        return result.data
    } catch (error) {
        throw get500Error(error)
    }
}

export const remove = async (url) => {
    try {
        const result = await axios.delete(url)
        return result.data
    } catch (error) {
        throw get500Error(error)
    }
}
