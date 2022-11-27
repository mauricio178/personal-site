import React, { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    label: string
    theme: 'white' | 'white fill' | 'black fill' | 'black' | 'green'
}

export function Button({label, theme, ...rest}: ButtonProps) {
    return (
        <button {...rest} className={theme === 'white' ? styles.white : 
            theme === 'white fill' ? styles.white_fill :
            theme === 'black' ? styles.black :
            theme === 'green' ? styles.green :
            theme === 'black fill' ? styles.black_fill : styles.none} >
            <p>
                {label}
            </p>
        </button>
    )
}