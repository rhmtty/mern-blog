import Axios from "axios"

export const setDataBlog = () => (dispatch) => {
    Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=4')
    .then(result => {
        const responseAPI = result.data

        dispatch({type: 'UPADATE_DATA_BLOG', payload: responseAPI.data})
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}