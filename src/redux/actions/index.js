export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SEARCHED_JOB = "GET_SEARCHED_JOB";

export const getSearchedJobAction = (query) => {
  return (dispatch) => {
    fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
        query +
        "&limit=20"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((arrayJobs) => {
        console.log(arrayJobs);
        dispatch({
          type: GET_SEARCHED_JOB,
          payload: arrayJobs.data,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};
