import { Input, Select } from 'antd'
import Search from 'antd/es/input/Search'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { GetAllCar } from '../Redux/Actions/ManagerAction';

export default function SearchButton() {

    const dispatch = useDispatch();

    const [dataType, setDataType] = useState('1');
    console.log(dataType);
const onSearch = (value) => {
    if(value === "") dispatch(GetAllCar());
    switch (dataType) {
        case '1':
            console.log("name" + value);
            dispatch({
                type: "SEARCH_BY_NAME",
                content: value
            })
            break;
        case '2':
            console.log("company" + value);
            dispatch({
                type: "SEARCH_BY_COMPANY",
                content: value
            })
            break;
        case '3':
            console.log("number" + value);
            dispatch({
                type: "SEARCH_BY_NUMBER",
                content: value
            })
            break;
        default:
            break;
    }
}
const handleChange = (value) => {
  setDataType(value)
}
  return (
    <div className='w-full px-20 mt-5'>
        <Select
      defaultValue='1'
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: '1', label: 'Tên xe' },
        { value: '2', label: 'Hãng xe' },
        { value: '3', label: 'Số chổ' },
      ]}
    />
        <Search className='w-full' placeholder="Tìm kiếm" onSearch={onSearch} style={{ width: '90%' }} />
    </div>
  )
}
