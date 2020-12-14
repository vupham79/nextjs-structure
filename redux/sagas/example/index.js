import { call, put } from 'redux-saga/effects'
import { exampleAction } from '../../actions/example'
import API from '../../apis/example'

export function * exampleSaga () {
  try {
    const response = yield call(API.exampleAPI)
    yield put(exampleAction(response.data))
  } catch (error) {
    console.log(error)
  }
}
