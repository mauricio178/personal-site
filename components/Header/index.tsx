import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import Image from 'next/image';
import { LanguageProps, useControls } from '../../hooks/controls';
import { Input } from '../Input';
import { SkeletonComponent } from '../SkeletonComponent';
import { SwitchToggle } from '../SwitchToggle';

export function Header() {

    const { setCurrentLanguage, currentLanguage } = useControls();

    const [loading, setLoading] = useState(false);

    const [languageSelected, setLanguageSelected] = useState<LanguageProps>({ language: "br" });

    function goToGetInTouch() {
        const el = document.getElementById('getintouch');
        const elCoordenadas = el!.getBoundingClientRect();
        window.scrollTo({
            top: (elCoordenadas.y - 20),
            behavior: 'smooth'
        })
    }

    function changeLanguage() {
        setLanguageSelected({ language: languageSelected.language === "br" ? "us" : "br" })
    }

    useEffect(() => {
        setCurrentLanguage(languageSelected);
    }, [languageSelected])

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {

            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentLanguage]);

    return (
        <div className={styles.container}>
            <div>
                <Image src={'/favicon.ico'} alt={'logo'} width={'50'} height={'50'} />

                <SwitchToggle
                    language={languageSelected.language}
                    type="checkbox" onChange={() => {
                        changeLanguage()
                    }} />

                <div>
                    <Button
                        label={currentLanguage.language === "br" ? "Me contate" : "Get in touch"}
                        theme={'white'}
                        onClick={() => goToGetInTouch()}
                    />

                </div>


            </div>

        </div>
    );
}
