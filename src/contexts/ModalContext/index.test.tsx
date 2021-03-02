import { useContext } from 'react'
import { screen, waitFor } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import ModalProvider, { ModalContext } from '.'

describe('<ModalContext />', () => {
    it('should open and close the modal', async () => {
        const Element = () => {
            const { openModal } = useContext(ModalContext)
            const handleOpen = () => openModal('modal title', 'modal message')

            return (
                <div>
                    <button type="button" onClick={handleOpen}>
                        open modal
                    </button>
                </div>
            )
        }

        renderWithTheme(
            <ModalProvider>
                <Element />
            </ModalProvider>
        )

        const openButton = screen.getByRole('button', { name: /open modal/i })
        expect(
            screen.queryByRole('heading', { name: /modal title/i })
        ).not.toBeInTheDocument()
        expect(screen.queryByText(/modal message/i)).not.toBeInTheDocument()

        // open modal
        userEvent.click(openButton)

        await waitFor(() => {
            expect(
                screen.queryByRole('heading', { name: /modal title/i })
            ).toBeInTheDocument()
            expect(screen.queryByText(/modal message/i)).toBeInTheDocument()
        })

        const closeButton = screen.getByRole('button', { name: /fechar/i })
        expect(closeButton).toBeInTheDocument()

        //close modal
        userEvent.click(closeButton)

        await waitFor(() => {
            expect(
                screen.queryByRole('heading', { name: /modal title/i })
            ).not.toBeInTheDocument()
            expect(screen.queryByText(/modal message/i)).not.toBeInTheDocument()
        })
    })
})
