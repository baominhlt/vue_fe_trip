import { Modal } from 'antd';

export default function CustomModal({ zIndex, title, open, onOk, onCancel, width, children}) {
    return (
        <Modal
            zIndex={zIndex}
            title={title}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            width={width}
        // modalRender={children}
        >
            {children}
        </Modal>

    );
}
