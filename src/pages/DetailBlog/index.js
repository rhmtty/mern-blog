import React, { useEffect, useState } from 'react'
import './detailBlog.scss'
import { Link } from '../../components'
import {useHistory, withRouter} from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = (props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const id = props.match.params.id;
        Axios.get(`https://kopisob-api.herokuapp.com/v1/blog/post/${id}`)
        .then(res => {
            console.log('success: ', res);
            setData(res.data.data)
        })
        .catch(err => {
            console.log('err: ', err);
        })
    }, [props])
    const history = useHistory()
    if(data.author) {
        return (
            <div className="detail-blog-wrapper">
                {/* <img className="img-cover" src={`https://kopisob-api.herokuapp.com/${data.image}`} alt="thumb" /> */}
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Link title="kembali ke home" onClick={() => history.push('/')} />
            </div>
        )
    }
    return <p>Loading data...</p>
}

export default withRouter(DetailBlog)
