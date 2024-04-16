'use client'
import ReactModal from 'react-modal'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Buttons'
import Styles from '@/styles/Modal.module.css'

const ModalProject = ({ children }) => {
    const router = useRouter()

    const handleClose = () => {
        router.back()
    }

    return (
        <ReactModal
            isOpen={true}
            contentLabel="Project Modal"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => handleClose()}
            className={Styles.modal}
            ariaHideApp={false}
        >
            {children}
            <div className={Styles.modal__footer}>
                <Button
                    text='Retour aux projets'
                    onClick={() => handleClose()}
                />
            </div>
        </ReactModal>
    )
}

export default ModalProject
