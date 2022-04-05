import {
    GET_CHART_ARTISTS_LOADING,
    GET_CHART_ARTISTS_SUCCESS,
    GET_CHART_ARTISTS_ERROR,
} from "../../core/constants/action-types";

export function actionChartArtistsPending() {
    return {
        type: GET_CHART_ARTISTS_LOADING,
    };
}

export function actionChartArtistsSuccess(data) {
    return {
        type: GET_CHART_ARTISTS_SUCCESS,
        payload: data,
    };
}

export function actionChartArtistsError(error) {
    return {
        type: GET_CHART_ARTISTS_ERROR,
        payload: error,
    };
}