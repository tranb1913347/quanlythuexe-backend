import React, {useEffect} from 'react'
// import Footer from '../Components/Footer'
import MenuAdminPage from '../Components/MenuAdminPage'
import { useDispatch, useSelector  } from 'react-redux'
import LoginRootForm from '../Components/LoginRootForm';
import { GetAllRootUser } from '../Redux/Actions/ManagerAction';
import RegisterRootUser from '../Components/RegisterRootUser';
import MenuHeader from '../Components/MenuHeader';
import QuanLyUsers from '../Components/QuanLyUsers';

export default function AdminPage({content}) {

  const dispatch = useDispatch();
  const {rootList} = useSelector(state => state.ManagerReducer);

  console.log(rootList.length)

  useEffect(() => {
    // dispatch({
    //   type: "SHOW_MODAL_WITH_CONTENT",
    //   content: <LoginRootForm/>,
    //   title: "ĐĂNG NHẬP ADMIN"
    // })

      dispatch(GetAllRootUser())

  }, [])

  useEffect(() => {
    if(rootList.length > 0) {
       dispatch({
      type: "SHOW_MODAL_WITH_CONTENT",
      content: <LoginRootForm/>,
      title: "ĐĂNG NHẬP ADMIN"
    })
    }
    else{
      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        content: <RegisterRootUser/>,
        title: "ĐĂNG KÝ ADMIN"
      })
    }
    console.log("hey")
  }, [rootList])

  return (
    <div>
        <MenuAdminPage/>
        <div className="md:px-40 px-5 mt-10 pb-40">
            {<QuanLyUsers/>}
        </div>
        {/* <Footer/> */}
    </div>
  )
}
