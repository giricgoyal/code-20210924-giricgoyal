import * as helpers from './helpers'

function fetchData(url: string, method = 'GET', data?: any) {
    return fetch(url, {
        method,
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            contentType: 'application/json',
        },
        referrerPolicy: 'no-referrer',
        body: data ? JSON.stringify(data) : undefined,
    })
}

function createGet(version = 'v1') {
    return async (path: string, params?: any) => {
        const url: string = helpers.getURL(path, version)
        const result = await fetchData(url, 'GET')
        const json = await result.json()
        return json
    }
}

function createPost(version = 'v1') {
    return async (path: string, data?: any) => {
        const url: string = helpers.getURL(path, version)
        const result = await fetchData(url, 'POST', data)
        const json = await result.json()
        return json
    }
}

function createPut(version = 'v1') {
    return async (path: string, data?: any) => {
        const url: string = helpers.getURL(path, version)
        const result = await fetchData(url, 'PUT', data)
        const json = await result.json()
        return json
    }
}

function createDelete(version = 'v1') {
    return async (path: string) => {
        const url: string = helpers.getURL(path, version)
        const result = await fetchData(url, 'DELETE')
        const json = await result.json()
        return json
    }
}

export default {
    v1: {
        get: createGet(),
        put: createPut(),
        post: createPost(),
        delete: createDelete(),
    },
}
