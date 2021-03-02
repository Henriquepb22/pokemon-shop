import { ModalContext, ModalContextProps } from 'contexts/ModalContext'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Modal from '.'

describe('<Modal />', () => {
    it('should render the modal', () => {
        const value: ModalContextProps = {
            isOpen: true,
            closeModal: jest.fn(),
            openModal: jest.fn(),
        }
        renderWithTheme(
            <ModalContext.Provider value={value}>
                <Modal title="modal title" message="modal message" />
            </ModalContext.Provider>
        )

        expect(
            screen.getByRole('heading', { name: /modal title/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/modal message/i)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /fechar/i })
        ).toBeInTheDocument()
    })

    it('should focus on modal when it its opened', () => {
        const value: ModalContextProps = {
            isOpen: true,
            closeModal: jest.fn(),
            openModal: jest.fn(),
        }
        const { container } = renderWithTheme(
            <ModalContext.Provider value={value}>
                <Modal title="modal title" message="modal message" />
            </ModalContext.Provider>
        )

        expect(container.firstChild?.firstChild).toHaveFocus()
    })

    it('should close modal on esc key', () => {
        const closeModal = jest.fn()
        const value: ModalContextProps = {
            isOpen: true,
            closeModal,
            openModal: jest.fn(),
        }
        renderWithTheme(
            <ModalContext.Provider value={value}>
                <Modal title="modal title" message="modal message" />
            </ModalContext.Provider>
        )

        expect(
            screen.getByRole('heading', { name: /modal title/i })
        ).toBeInTheDocument()

        fireEvent.keyDown(screen.getByText(/modal message/i), {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27,
        })
        expect(closeModal).toHaveBeenCalled()
    })
})
