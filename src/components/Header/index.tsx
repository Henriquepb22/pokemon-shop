import { Search } from '@styled-icons/fa-solid/Search'
import { ThemeContext } from 'contexts/ThemeContext'
import { useContext } from 'react'
import Input from 'components/Input'

import * as S from './styles'

const Header = () => {
    const { selectedTheme } = useContext(ThemeContext)

    return (
        <S.Wrapper>
            <S.Title>{selectedTheme} Pokémon Shop</S.Title>
            <Input placeholder="Pesquisar..." id="search" icon={<Search />} />
        </S.Wrapper>
    )
}

export default Header
