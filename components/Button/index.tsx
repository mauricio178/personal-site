import React from 'react'
import styles from './styles.module.scss'

type ButtonProps = {
    label: string
    theme: 'white' | 'white fill' | 'black fill' | 'black' | 'green'
}

export function Button(data: ButtonProps) {
    return (
        <div className={data.theme === 'white' ? styles.white : 
            data.theme === 'white fill' ? styles.white_fill :
            data.theme === 'black' ? styles.black :
            data.theme === 'green' ? styles.green :
            data.theme === 'black fill' ? styles.black_fill : styles.none}>
            <p>
                {data.label}
            </p>
        </div>
    )
}