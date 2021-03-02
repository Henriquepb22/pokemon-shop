import { useContext } from 'react'
import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart'
import { ShoppingCartContext } from 'contexts/ShoppingCartContext'
import { Search } from '@styled-icons/fa-solid/Search'
import Button from 'components/Button'
import Input from 'components/Input'

import * as S from './styles'

type HeaderProps = {
    findByName: (name: string) => void
    title: string
    logoImage?: string
    logoAlt?: string
}

const Header = ({ findByName, title, logoImage, logoAlt }: HeaderProps) => {
    const { products, openCart } = useContext(ShoppingCartContext)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        findByName(e.currentTarget.value)
    }

    return (
        <S.Wrapper>
            <S.Container>
                {!!logoImage && <S.LogoImage src={logoImage} alt={logoAlt} />}
                <S.Title>{title}</S.Title>
                <Input
                    placeholder="Pesquisar..."
                    id="search"
                    icon={<Search />}
                    onChange={onChange}
                />
                <Button
                    icon={<ShoppingCart aria-label="Carrinho de compras" />}
                    onlyIcon
                    badge={products.length ? `${products.length}` : ''}
                    onClick={() => openCart()}
                />
            </S.Container>
        </S.Wrapper>
    )
}

export default Header
