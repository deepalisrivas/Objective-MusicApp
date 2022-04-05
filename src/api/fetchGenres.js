// import fetch from "cross-fetch";
import {
    actionGenreLoading,
    actionGenreSuccess,
    actionGenreError,
} from "../state/genres/genresAction";

export default function fetchGenres() {
    return (dispatch) => {
        dispatch(actionGenreLoading());
        fetch("local-json/genre.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionGenreSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionGenreError(error));
            });
    };
}