import {
    GET_CHART_ARTISTS_LOADING,
    GET_CHART_ARTISTS_SUCCESS,
    GET_CHART_ARTISTS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    artist: [],
    error: null,
};

export default function chartArtists(state = initialState, action) {
    switch (action.type) {
        case GET_CHART_ARTISTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_CHART_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                artist: action.payload,
            };
        case GET_CHART_ARTISTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}