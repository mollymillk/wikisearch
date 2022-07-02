import Icon from "./img/Logo"
import styles from'./Header.module.css'

export const Header = () => {
    return (
            <header>
                <Icon/>
                <p className={styles.heading}>Wiki Search</p>
            </header>
    )
}