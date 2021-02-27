import { Search } from '@styled-icons/fa-solid/Search'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Input from '.'

describe('<Input />', () => {
    it('should render the input with label', () => {
        renderWithTheme(<Input label="Label" labelFor="Field" id="Field" />)

        expect(screen.getByLabelText('Label')).toBeInTheDocument()
    })

    it('should not render the label', () => {
        renderWithTheme(<Input />)

        expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
    })

    it('should render with placeholder', () => {
        renderWithTheme(<Input placeholder="placeholder" />)

        expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument()
    })

    it('should render with an icon', () => {
        renderWithTheme(<Input icon={<Search data-testid="icon" />} />)

        expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
    })
})
