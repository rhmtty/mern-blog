import React from 'react'
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components'
import './createBlog.scss'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action'

const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body} = form;
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = () => {
        postToAPI(form)
    }

    const onImgaeUpload = (event) => {
        const file = event.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(event) => dispatch(setForm('title', event.target.value))} />
            <Upload onChange={event => onImgaeUpload(event)} img={imgPreview} />
            <TextArea value={body} onChange={event => dispatch(setForm('body', event.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
            <Gap height={60} />
        </div>
    )
}

export default CreateBlog
