// import fetch from "cross-fetch";
import {
    actionTopTracksPending,
    actionTopTracksSuccess,
    actionTopTracksError,
} from "../state/tracks/topTracksAction";

export default function fetchTopTracks(id) {
    return (dispatch) => {
        dispatch(actionTopTracksPending());
        fetch("local-json/tracks.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
            .then((res) => res.json())
            .then((res) => {
                dispatch(actionTopTracksSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionTopTracksError(error));
            });
    };
}