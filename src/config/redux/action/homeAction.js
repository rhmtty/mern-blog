import Axios from "axios"

export const setDataBlog = (page) => (dispatch) => {  
  Axios.get(`https://kopisob-api.herokuapp.com/v1/blog/posts?page=${page}&perPage=2`, {
    headers: { 
      accept: "Accept: application/json" 
    } 
  })
    .then((result) => {
      const responseAPI = result.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
}
