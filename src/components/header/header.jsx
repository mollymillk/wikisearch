import React, { useEffect, useState } from "react";
import Icon from "./img/Logo";
import styles from'./Header.module.css';

export const Header = ({searchRequest}) => {
    const [isClassNameChanged, setIsClassNameChanged] = useState(false);

    useEffect(() => {
        if (searchRequest !== '') {
            setIsClassNameChanged(true)
        } else setIsClassNameChanged(false)
    }, [searchRequest])

    const LogoClassName = `logo${isClassNameChanged ? 'Small' : ''}`

    return (
            <header className={`${styles[LogoClassName]}`}>
                <Icon/>
                <p className={styles.heading}>Wiki Search</p>
            </header>
    )
}

