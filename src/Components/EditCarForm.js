import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import React from 'react'
import { AddNewMenu, UpdateCar, UpdateMenu } from '../Redux/Actions/ManagerAction'

export default function EditCarForm() {

    const dispatch = useDispatch();

    const {initContent} = useSelector(state => state.ManagerReducer);

    const [selectedImage, setSelectedImage] = useState();
    const [dataContent, setDataContent] = useState({
        name: '',
        company: '',
        numberOfSeat: '',
        cost: '',
        description:''
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
      dispatch(UpdateCar(
        {
            name: dataContent.name,
            company: dataContent.company,
            numberOfSeat: dataContent.numberOfSeat,
            cost: dataContent.cost,
            description: dataContent.description,
        },
        initContent.id,
        selectedImage
      ))
      setSelectedImage()
    }

    useEffect(() => {
        setDataContent({
            name: initContent.name,
            company: initContent.company,
            numberOfSeat: initContent.numberOfSeat,
            cost: initContent.cost,
            description: initContent.description
        })
    }, [initContent])
    
    
  return (
    <div className='w-full'>
        <div className='w-full'>
            <div className='mb-2 rounded-md overflow-hidden' >
                <div className='w-full relative mr-2 h-80 bg-slate-200'
                style={{
                    backgroundImage: `${(selectedImage ? 
                        `url(${URL.createObjectURL(selectedImage)})` : 
                        `url(${initContent.image?.replaceAll(
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
            <p><b>Tên xe:</b> </p>
            <Input onChange={getDataContent} name='name' value={dataContent.name} className='mb-2' placeholder='Nhập tên chiếc xe'></Input>
            <p><b>Hãng xe:</b> </p>
            <Input onChange={getDataContent} name='company' value={dataContent.company} className='mb-2' placeholder='Nhập hãng xe'></Input>
            <p><b>Số chổ ngồi:</b> </p>
            <Input onChange={getDataContent} name='numberOfSeat' type="number" value={dataContent.numberOfSeat} className='mb-2' placeholder='Nhập số chổ ngồi'></Input>
            <p><b>Giá:</b> </p>
            <Input onChange={getDataContent} name='cost' type="number" value={dataContent.cost} className='mb-2' placeholder='Nhập giá cho thuê'></Input>
            <p><b>Mô tả:</b> </p>
            <TextArea onChange={getDataContent} value={dataContent.description}  name='description' rows={5} placeholder='Nhập mô tả'></TextArea>
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
