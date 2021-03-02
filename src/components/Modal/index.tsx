import { useContext, useRef, useEffect } from 'react'
import { Times } from '@styled-icons/fa-solid/Times'
import { ModalContext } from 'contexts/ModalContext'
import Button from 'components/Button'

import * as S from './styles'

type ModalProps = {
    title: string
    message: string
}

const Modal = ({ title, message }: ModalProps) => {
    const { closeModal, isOpen } = useContext(ModalContext)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (modalRef.current) modalRef.current.focus()
    }, [modalRef])

    return (
        <S.Wrapper
            aria-hidden={!isOpen}
            isOpen={isOpen}
            onKeyDown={(e) => {
                if (e.key === 'Escape') closeModal()
            }}
        >
            <S.Modal ref={modalRef} tabIndex={0}>
                <Button
                    aria-label="fechar"
                    onlyIcon
                    icon={<Times aria-hidden />}
                    onClick={closeModal}
                />
                <S.Title>{title}</S.Title>
                <S.Message>{message}</S.Message>
            </S.Modal>
            <S.CloseOverlay aria-hidden onClick={closeModal} />
        </S.Wrapper>
    )
}

export default Modal
