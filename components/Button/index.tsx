import React, { HTMLAttributes, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useControls } from '../../hooks/controls'
import { SkeletonComponent } from '../SkeletonComponent'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    label?: string
    theme: 'white' | 'white fill' | 'black fill' | 'black' | 'green' | 'red'
}

export function Button({ label, theme, ...rest }: ButtonProps) {

    const { currentLanguage } = useControls();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {

            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentLanguage]);



    return (
        <button {...rest} className={theme === 'white' ? styles.white :
            theme === 'white fill' ? styles.white_fill :
                theme === 'black' ? styles.black :
                    theme === 'green' ? styles.green :
                        theme === 'red' ? styles.red :
                            theme === 'black fill' ? styles.black_fill : styles.none} >
            <p>
                {loading ?
                    <SkeletonComponent localUsed='button' /> : label
                }
            </p>
        </button>
    )
}