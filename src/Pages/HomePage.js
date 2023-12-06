import React, {useEffect} from 'react'
import MenuHeader from '../Components/MenuHeader'
import LoginForm from '../Components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { Button, Carousel } from 'antd';



export default function HomePage() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const navigate = useNavigate();

  let userData = localStorage.getItem("login_user");
  userData = userData && JSON.parse(userData);
  if (!userData) userData = {};

  useEffect(() => {
    if(userData.type === 'OWNER') navigate('/quanlyxe')
  }, [])

  return (
    <div>
        {<MenuHeader/>}
      <div className='h-96 text-white flex justify-start pl-10 items-center shadow-lg' style={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/8724730.jpg)',
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
          <div className='text-center'>
            <p className='text-6xl font-bold'>HAPPY CAR</p>
            <p className='py-5'>Chào mừng bạn đã đến với dịch vụ thuê xe của chúng tôi</p>
            <button className='bg-white text-black py-2 w-full px-5 shadow-xl rounded-xl cursor-pointer hover:bg-black hover:text-white duration-150'>Thuê ngay</button>
          </div>
      </div>  

      <div className='md:px-40 py-5'>
        <h1 className='text-5xl color-red font-bold text-red-700'>HAPPY CAR</h1>
        <p className='text-3xl border-b-4 border-yellow-200 '>Chào mừng đến với chúng tôi!</p>
        <div className='flex items-center mt-5'>
          <div className=' w-96 h-80 rounded-lg overflow-hidden' style={{
        backgroundImage: 'url(https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg)',
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>

          </div>
          <div className='w-3/4 ml-5 text-xl text-justify'>
            Happy Car - Nền tảng thuê xe hàng đầu cho mọi chuyến đi của bạn! Chào mừng đến với Happy Car, nơi bạn có thể dễ dàng tìm thấy các dịch vụ thuê xe linh hoạt và phong phú. Từ các dòng xe tiết kiệm nhiên liệu cho chuyến du lịch gia đình đến những dòng xe sang trọng phục vụ cho các chuyến công tác, chúng tôi luôn cam kết mang đến sự thoải mái và tiện ích tối đa. Với giao diện thân thiện và dịch vụ chăm sóc khách hàng 24/7, Happy Car hy vọng sẽ là đối tác tin cậy trong mọi hành trình của bạn. Hãy khám phá ngay hôm nay và biến mỗi chuyến đi của bạn trở nên trọn vẹn với Happy Car!
            </div>
        </div>


        <div className='text-right mt-10'>
        <h1 className='text-5xl color-red font-bold text-red-700'>LOẠI XE</h1>
        <p className='text-3xl border-b-4 border-yellow-200 '>Đa dạng, hiện đại, uy tín</p>
        </div>
        <div className='flex items-center mt-5'>
       
          <div className='w-3/4 mx-5 text-2xl text-justify'>
          Happy Car cung cấp một loạt các loại xe đa dạng, từ các dòng xe nhỏ linh động và tiết kiệm nhiên liệu phù hợp cho chuyến đi đô thị đến các dòng xe gia đình rộng rãi và an toàn. Ngoài ra, chúng tôi cũng có sẵn các dòng xe thể thao, xe sedan và SUV sang trọng dành cho những chuyến đi công tác hoặc kỳ nghỉ đẳng cấp. Bất kể dòng xe nào bạn chọn, Happy Car cam kết cung cấp những chiếc xe chất lượng và an toàn, giúp bạn có một trải nghiệm lái xe tuyệt vời trên mọi hành trình.
            </div>
            <div className=' w-96 h-80 rounded-lg overflow-hidden' style={{
        backgroundImage: 'url(https://www.theglobeandmail.com/resizer/gew4suGzG44SaHLq5yXVIoEY3Qc=/arc-anglerfish-tgam-prod-tgam/public/2XCT3JN7ZRGMNAFSMZM2RSTH2I.jpeg)',
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>

          </div>
        </div>


        <div className='text-left mt-10'>
        <h1 className='text-5xl color-red font-bold text-red-700 border-b-4 border-yellow-200 '>Xe dành cho bạn</h1>
        </div>
        <div className='grid mt-5 grid-cols-4 gap-6 w-full'>

        <div className='bg-blue-50 shadow-md w-full rounded-sm py-5 px-2 relative'>
        <div className='w-full rounded-md overflow-hidden h-56 mr-10'
        style={{
            backgroundImage: `url(https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174155/new-Tata-Safari.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'></p>
          <p><b>Hãng xe:</b> TOYOTA</p>
          <p><b>Số chổ:</b> 12</p>
          <p><b>Giá cho thuê:</b> 10000VND</p>
          <p style={{whiteSpace: 'pre-line'}}><b>Mô tả:</b> Xe xịn</p>
          <button className='bg-red-500 text-white w-40 rounded-md p-2 ml-12 mt-5 shadow-lg hover:scale-110 duration-100'>Thuê ngay!</button>
        </div>
      </div> 

      <div className='bg-blue-50 shadow-md w-full rounded-sm py-5 px-2 relative'>
        <div className='w-full rounded-md overflow-hidden h-56 mr-10'
        style={{
            backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/nissanz2023-1673297639.jpeg?crop=0.426xw:0.568xh;0.337xw,0.378xh&resize=640:*)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'></p>
          <p><b>Hãng xe:</b> SUZUKI</p>
          <p><b>Số chổ:</b>6 </p>
          <p><b>Giá cho thuê:</b> 12000VND</p>
          <p style={{whiteSpace: 'pre-line'}}><b>Mô tả:</b> Xe xịn</p>
          <button className='bg-red-500 text-white w-40 rounded-md p-2 ml-12 mt-5 shadow-lg hover:scale-110 duration-100'>Thuê ngay!</button>
        </div>
      </div> 

      <div className='bg-blue-50 shadow-md w-full rounded-sm py-5 px-2 relative'>
        <div className='w-full rounded-md overflow-hidden h-56 mr-10'
        style={{
            backgroundImage: `url(https://www.usnews.com/object/image/00000182-a537-dc41-a1db-a57f46460000/1_2021_bugatti_chiron_super_sport.jpg?update-time=&size=responsive640)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'></p>
          <p><b>Hãng xe:</b> SUZUKI</p>
          <p><b>Số chổ:</b> 12 </p>
          <p><b>Giá cho thuê:</b> 30000VND</p>
          <p style={{whiteSpace: 'pre-line'}}><b>Mô tả:</b> Xe xịn</p>
          <button className='bg-red-500 text-white w-40 rounded-md p-2 ml-12 mt-5 shadow-lg hover:scale-110 duration-100'>Thuê ngay!</button>
        </div>
      </div> 

      <div className='bg-blue-50 shadow-md w-full rounded-sm py-5 px-2 relative'>
        <div className='w-full rounded-md overflow-hidden h-56 mr-10'
        style={{
            backgroundImage: `url(https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kushaq/9771/1697178106968/front-left-side-47.jpg?impolicy=resize&imwidth=480)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b text-2xl'></p>
          <p><b>Hãng xe:</b> SUZUKI</p>
          <p><b>Số chổ:</b> 12 </p>
          <p><b>Giá cho thuê:</b> 30000VND</p>
          <p style={{whiteSpace: 'pre-line'}}><b>Mô tả:</b> Xe xịn</p>
          <button className='bg-red-500 text-white w-40 rounded-md p-2 ml-12 mt-5 shadow-lg hover:scale-110 duration-100'>Thuê ngay!</button>
        </div>
      </div> 


        </div>
      </div>
        
      

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">

                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HAPPY CAR</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Xe mới</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Thuê xe</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Về chúng tôi</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Liên lạc</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Happycar</a>. Bản quyền thuộc về Huyen Tran</span>
    </div>
</footer>
    </div>
  )
}
