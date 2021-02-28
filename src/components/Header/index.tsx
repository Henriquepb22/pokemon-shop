import { useContext } from 'react'
import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart'
import { Search } from '@styled-icons/fa-solid/Search'
import { ThemeContext } from 'contexts/ThemeContext'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

const Header = () => {
    const { selectedTheme } = useContext(ThemeContext)

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>{selectedTheme} Pokémon Shop</S.Title>
                <Input
                    placeholder="Pesquisar..."
                    id="search"
                    icon={<Search />}
                />
                <Button
                    icon={<ShoppingCart aria-label="Carrinho de compras" />}
                    onlyIcon
                />
            </S.Container>
        </S.Wrapper>
    )
}

export default Header
