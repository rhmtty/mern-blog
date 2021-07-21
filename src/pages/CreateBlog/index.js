import React, { useEffect, useState } from 'react'
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components'
import './createBlog.scss'
import {useHistory, withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const CreateBlog = (props) => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body} = form;
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const id = props.match.params.id;
        if(id){
            setIsUpdate(true);
            Axios.get(`https://kopisob-api.herokuapp.com/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data;
                console.log('res: ', data);
                dispatch(setForm('title', data.title));
                dispatch(setForm('body', data.body));
                dispatch(setImgPreview(`https://kopisob-api.herokuapp.com/${data.image}`));
            })
            .catch(err => {
                console.log('err: ', err);
            })
        }
    }, [props, dispatch])

    const onSubmit = () => {
        const id = props.match.params.id;
        if(isUpdate){
            console.log('update data');
            updateToAPI(form, id)
            notify('Data sukses di update.')
        } else{
            console.log('create data');
            postToAPI(form)
            notify('Data sukses di tambah.')
        }
    }

    const onImgaeUpload = (event) => {
        const file = event.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }

    const notify = (message) => toast.success(message, {
        duration: 3000
    })

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange={(event) => dispatch(setForm('title', event.target.value))} />
            <Upload onChange={event => onImgaeUpload(event)} img={imgPreview} />
            <TextArea value={body} onChange={event => dispatch(setForm('body', event.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap height={60} />
            <Toaster />
        </div>
    )
}

export default withRouter(CreateBlog)
