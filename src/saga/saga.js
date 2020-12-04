import { call, put } from "redux-saga/effects";
import { list } from "../api";
import { GET_LOCATION_LIST_SUCCESS, GET_LOCATION_LIST_FAILED } from "./types";

export function* fnwatcher() {
  try {
    const response = yield call(list);
    yield put({ type: GET_LOCATION_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_LOCATION_LIST_FAILED, error: true });
  }
}
