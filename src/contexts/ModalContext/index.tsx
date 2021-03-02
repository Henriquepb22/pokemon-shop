/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'
import { ModalTheme } from 'styles/themes/ModalTheme'
import Modal from 'components/Modal'

export type ModalContextProps = {
    isOpen: boolean
    openModal: (modalTitle: string, modalMessage: string) => void
    closeModal: () => void
}

const initialValue: ModalContextProps = {
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
}

export const ModalContext = createContext(initialValue)

type ModalProviderProps = {
    children: React.ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [animationFinished, setAnimationFinished] = useState(true)

    const openModal = (modalTitle: string, modalMessage: string) => {
        setIsOpen(true)
        setTitle(modalTitle)
        setMessage(modalMessage)
        setAnimationFinished(false)
    }

    const closeModal = () => {
        setIsOpen(false)

        setTimeout(() => {
            setAnimationFinished(true)
        }, 400)
    }

    const value: ModalContextProps = {
        isOpen,
        closeModal,
        openModal,
    }
    return (
        <ModalContext.Provider value={value}>
            <ModalTheme isOpen={isOpen} />
            {(!!isOpen || !animationFinished) && (
                <Modal title={title} message={message} />
            )}
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
