import Icon from "./img/logo"
import './header.css'

export const Header = () => {
    return (
        <>
            <header>
                <Icon/>
                <p className="heading">Wiki Search</p>
            </header>
        </>
    )
}