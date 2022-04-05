// import fetch from "cross-fetch";
import {
    actionChartArtistsPending,
    actionChartArtistsSuccess,
    actionChartArtistsError,
} from "../state/chartArtist/chartArtistAction";

export default function fetchChartArtist() {
    return (dispatch) => {
        dispatch(actionChartArtistsPending());
        fetch("local-json/artists.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
            .then((res) => res.json())
            .then((res) => {
                dispatch(actionChartArtistsSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionChartArtistsError(error));
            });
    };
}