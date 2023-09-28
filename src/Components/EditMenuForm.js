import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import React from 'react'
import { AddNewMenu, UpdateMenu } from '../Redux/Actions/ManagerAction'

export default function EditMenuForm() {

    const dispatch = useDispatch();

    const {typeId, initContent} = useSelector(state => state.ManagerReducer);

    const [selectedImage, setSelectedImage] = useState();
    const [dataContent, setDataContent] = useState({
        title: '',
        content: ''
    })



    const updateImageSelected = (event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
    }


    const getDataContent = (e) => {
        setDataContent({
            ...dataContent,
            [e.target.name]: e.target.value
        })
    }

    const submitButton = () => {
      dispatch(UpdateMenu(
        {
          title: dataContent.title,
          content: dataContent.content
        },
        initContent.id,
        selectedImage
      ))
      setSelectedImage()
    }

    useEffect(() => {
        setDataContent({
            title: initContent.title,
            content: initContent.content
        })
    }, [initContent])
    
    
  return (
    <div className='w-full'>
        <div className='md:flex w-full'>
            <div className='md:w-1/3 md:mr-2 mb-2 rounded-md overflow-hidden' >
                <div className='w-full relative mr-2 h-40 bg-slate-200'
                style={{
                    backgroundImage: `${(selectedImage ? 
                        `url(${URL.createObjectURL(selectedImage)})` : 
                        `url(${initContent.img?.replaceAll(
                            "\\",
                            "/"
                          )})`
                        )}`,

                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                >
                <label className='absolute cursor-pointer duration-100 bottom-0 right-0 w-full bg-red-500 text-white py-2 bg-opacity-80 text-center hover:bg-red-300' for="upload-img">
                    <p>Upload Image</p>
                </label>
                </div>
                <input 
                accept="image/png, image/jpeg, image/jpg" 
                id='upload-img' 
                className='hidden' 
                name="myImage"
                type={'file'}
                onChange={updateImageSelected}/>
               
            </div>
            <div>
            <Input onChange={getDataContent} name='title' value={dataContent.title} className='mb-2' placeholder='Nhập tên món ăn'></Input>
            <TextArea onChange={getDataContent} value={dataContent.content}  name='content' rows={5} placeholder='Nhập mô tả công thức'></TextArea>
            </div>
        </div>
        <div className='flex justify-center'>
        <button onClick={() => {
          submitButton()
        }} className='w-20 rounded-md my-5 py-2 bg-red-500 text-white'>UPDATE</button>
        <button 
        className='w-20 rounded-md my-5 ml-2 py-2 bg-blue-500 text-white'
        onClick={() => {
          dispatch({type: "CLOSE_MODAL"})
        }}
        >CANCEL</button>
        </div>

    </div>
  )
}
