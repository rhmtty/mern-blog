import React from 'react'
import { Link } from '../../atoms'
import './blogItem.scss'
import {useHistory} from 'react-router-dom'

const BlogItem = (props) => {
    const history = useHistory()
    const {image, title, name, date, body, _id, onDelete} = props
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="poster" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => history.push(`/create-blog/${_id}`)}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)}>Delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Link title="Lihat Detail" onClick={() => history.push(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItem
