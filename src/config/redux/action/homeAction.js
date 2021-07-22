import Axios from "axios"

export const setDataBlog = (page) => (dispatch) => {
  const api_node_fetch = `/.netlify/functions/node-fetch`;
  
  Axios.get(`${api_node_fetch}/v1/blog/posts?page=${page}&perPage=2`, {
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
