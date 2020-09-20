import React from 'react'
import { RegisterBG } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBG} alt="post" />
            <div className="content-detail">
                <p className="title">Title blog</p>
                <p className="author">Author - date post</p>
                <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui repellendus esse repudiandae deserunt soluta quasi asperiores ipsum ab dolores a obcaecati maxime, alias doloremque dolorum recusandae officiis minus necessitatibus saepe.</p>
            </div>
        </div>
    )
}

export default BlogItem
