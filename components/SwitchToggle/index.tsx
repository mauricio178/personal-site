import styles from './styles.module.scss';

interface SwitchToggleProps {
    language: string,
    type: string;
    onChange: () => void
}

export function SwitchToggle(props: SwitchToggleProps) {

    const { language, type, onChange } = props

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

            <img
                src={language === "br" ? "bandeira-do-brasil.png" : "bandeira-estados-unidos.png"}
                width={54}
                height={35}
                className={styles.slider}
            />
        </label>

    );
}
