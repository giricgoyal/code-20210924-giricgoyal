import { all } from 'redux-saga/effects'
import actionSagas from '../../models/user/sagas'
import topbarSagas from '../../modules/topbar/sagas'

function* rootSagas() {
    yield all([...actionSagas, ...topbarSagas])
}

export default rootSagas
