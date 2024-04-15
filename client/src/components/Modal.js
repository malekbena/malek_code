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
            <div className={Styles.modal__footer}>
                <button className="outlined" onClick={() => handleClose()}>
                    Retour aux projets
                </button>
            </div>
        </ReactModal>
    )
}

export default ModalProject
