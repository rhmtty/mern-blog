import React from 'react'
import {Button, Gap, Input, TextArea, Upload} from '../../components'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className="blog-post">
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="save" />
            </div>
            <Gap height={60} />
        </div>
    )
}

export default CreateBlog
