import styles from './styles.module.scss'
import React from 'react'
import { Button } from '../Button';
import Image from 'next/image';



export function Header() {

    function goToGetInTouch() {
        const el = document.getElementById('getintouch');
        const elCoordenadas = el!.getBoundingClientRect();
        window.scrollTo({
            top: (elCoordenadas.y - 20),
            behavior: 'smooth'
        })
        
    }

    

    return (
        <div className={styles.container}>

            <Image src={'/favicon.ico'} alt={'logo'} width={'50'} height={'50'} />

            <div>
                <Button label={'Get in touch'} theme={'white'} onClick={() => goToGetInTouch()}/>
            </div>

        </div>
    );
}
