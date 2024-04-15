'use client'
import ReactModal from 'react-modal'
import { useRouter } from 'next/navigation'
import Styles from '@/styles/Modal.module.css'

const ModalProject = ({ children }) => {
    const router = useRouter()

    const handleClose = () => {
        router.back()
    }

    return (
        <ReactModal
            isOpen={true}
            contentLabel="Minimal Modal Example"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => handleClose()}
            className={Styles.modal}
            ariaHideApp={false}
        >
            {children}
            <button className='outlined' onClick={() => handleClose()}>
                Retour
            </button>
        </ReactModal>
    )
}

export default ModalProject
