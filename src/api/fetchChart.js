// import fetch from "cross-fetch";
import {
    actionTopArtistsPending,
    actionTopArtistsSuccess,
    actionTopArtistsError,
} from "../state/chart/topArtistsAction";

export default function fetchChart() {
    console.log("inside fetch chart");
    return (dispatch) => {
        dispatch(actionTopArtistsPending());
        fetch("local-json/albums.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
            .then((res) => res.json())
            .then((res) => {
                dispatch(actionTopArtistsSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionTopArtistsError(error));
            });
    };
}