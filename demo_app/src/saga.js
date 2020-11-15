import Axios from 'axios';
import { all, takeLatest, takeEvery, fork, put, call } from 'redux-saga/effects';
import { PostData } from './api';

function* authWorker(action) {
    const response = yield call(PostData, action.payload);
    
}

function* AuthSaga() {
    yield takeEvery(
        'token_api', authWorker
    )
}

export default function* saga() {
    yield all([fork(AuthSaga)])
}