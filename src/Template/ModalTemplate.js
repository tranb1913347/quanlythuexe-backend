import React from 'react'
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';

export default function ModalTemplate() {

    const {isShow, content, title} = useSelector(state => state.ModalReducer);

  return (
    <div>
        <Modal title={title} open={isShow} footer={false} closable={false}>
        {content}
      </Modal>
    </div>
  )
}
