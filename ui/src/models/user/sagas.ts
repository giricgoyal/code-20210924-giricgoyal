import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './action-types'
import api from '../../common/api'
import * as types from './types'

function* fetchUser() {
    const data: types.USER = (yield call(api.v1.get, 'user'))?.data

    yield put({
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: data,
    })
}

export const fetchUserSaga = takeLatest(actionTypes.FETCH_USER, fetchUser)

export default [fetchUserSaga]
