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
            ariaHideApp={false}
            style={{
                content: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "var(--main-bg)",
                    color: "var(--text-color)",
                    padding: " 1rem",
                    height: "80%",
                    width: "80%",
                }
            }}
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
