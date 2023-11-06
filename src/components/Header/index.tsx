import { HeaderContainer, HeaderTitle } from './styles'
import logoJotaR from '../../assets/jotaR.svg'

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={logoJotaR} height={36}></img>
			<HeaderTitle/>
		</HeaderContainer>
	)
}