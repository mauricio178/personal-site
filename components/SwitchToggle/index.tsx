import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface SwitchToggleProps {
    language: string,
    type: string;
    onChange: () => void
}

export function SwitchToggle(props: SwitchToggleProps) {

    const { language, type, onChange } = props

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {

            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [language]);

    return (
        <label className={styles.switch}>
            <input
                defaultValue={language}
                type={type}
                value={language}
                onChange={() => {
                    onChange()
                }}
            />

            <img src={
                loading ? "loading.gif" :
                    language === "br" ?
                        "bandeira-do-brasil.png" : "bandeira-estados-unidos.png"}
                className={styles.slider}
            />
        </label>

    );
}
