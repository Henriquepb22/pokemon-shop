import { Search } from '@styled-icons/fa-solid/Search'
import Input from 'components/Input'

import * as S from './styles'

const Header = () => (
    <S.Wrapper>
        <S.Title>Pokémon Shop</S.Title>
        <Input placeholder="Pesquisar..." id="search" icon={<Search />} />
    </S.Wrapper>
)

export default Header
