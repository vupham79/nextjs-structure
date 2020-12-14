import { takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../types'
import { exampleSaga } from './example'

export default function * watchAll () {
  yield takeLatest(actionTypes.EXAMPLE_TYPE, exampleSaga)
}
