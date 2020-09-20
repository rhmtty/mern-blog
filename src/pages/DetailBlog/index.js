import React from 'react'
import { Link } from '../../components'
import './detailBlog.scss'
import {useHistory} from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci voluptate nostrum veritatis nihil aperiam! Similique sapiente blanditiis dignissimos culpa accusamus temporibus fugit cumque illo iusto? Repellat aperiam doloremque itaque.</p>
            <Link title="kembali ke home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
