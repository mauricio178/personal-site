import styles from './styles.module.scss'
import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';

export function Footer() {

    const [coordenadas, setCoordenadas] = useState()

    function go(section: string) {
        let techs = document.getElementById('techs');
        let aboutme = document.getElementById('aboutme');
        let whatido = document.getElementById('whatido');
        let top = document.getElementById('top');
        let works = document.getElementById('works');


        if (section === 'getintouch') {
            let getintouch = document.getElementById('getintouch');
            let elCoordenadas = getintouch!.getBoundingClientRect();

            window.scrollTo({
                top: (elCoordenadas.y),
                behavior: 'smooth'
            })
            console.log('getintouch')
        }
        if (section === 'techs') {
            let elCoordenadas2 = techs!.getBoundingClientRect();
            window.scrollTo({
                top: (elCoordenadas2.y - elCoordenadas2.y),
                behavior: 'smooth'
            })
            console.log('techs', elCoordenadas2)

        }
        if (section === 'aboutme') {
            let elCoordenadas3 = aboutme!.getBoundingClientRect();
            window.scrollTo({
                top: (elCoordenadas3.y - 20),
                behavior: 'smooth'
            })
            console.log('aboutme')
        }
        if (section === 'whatido') {
            let elCoordenadas4 = whatido!.getBoundingClientRect();
            window.scrollTo({
                top: (elCoordenadas4.y - 20),
                behavior: 'smooth'
            })
            console.log('whatido')
        }
        if (section === 'top') {
            let elCoordenadas5 = top!.getBoundingClientRect();
            window.scrollTo({
                top: (elCoordenadas5.y),
                behavior: 'smooth'
            })

            console.log('top')
        }
        if (section === 'works') {
            let elCoordenadas6 = works!.getBoundingClientRect();
            window.scrollTo({
                top: (elCoordenadas6.y),
                behavior: 'smooth'
            })
            console.log('works')
        }
    }

    return (
        <div className={styles.container} id={"getintouch"}>
            <div className={styles.content}>
                <div className={styles.contacts}>
                    <h1>Get in touch</h1>
                    <p>and lets work together</p>
                    <div className={styles.list}>
                        <div className={styles.col}>
                            <div className={styles.whatsapp}>
                                <Image src={'/wpp-icon.png'} alt={'whatsapp'} width={'30'} height={'30'} />
                                <a href={'https://wa.me/5561982243585?text=Olá,%20Mauricio!'} target="_blank">Start a conversation</a>
                            </div>
                            <div className={styles.linkedin}>
                                <Image src={'/linkedin.png'} alt={'linkedin'} width={'30'} height={'30'} />
                                <a href={'https://www.linkedin.com/in/mauricio-rodrigues-659352186/'} target="_blank">Visit profile</a>
                            </div>

                        </div>
                        <div className={styles.col}>
                            <div className={styles.github}>
                                <Image src={'/github.png'} alt={'github'} width={'30'} height={'30'} />
                                <a href={'https://github.com/mauricio178'} target="_blank">Visit profile</a>
                            </div>
                            <div className={styles.mail}>
                                <Image src={'/mail.png'} alt={'mail'} width={'30'} height={'30'} />
                                <a  href="mailto:mauriciodev178@gmail.com?subject=Write something." target="_blank">Send a mail</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={styles.sitemap}>
                    <h2>Sitemap</h2>
                    <div className={styles.list}>
                        <div className={styles.col}>
                            <p onClick={() => go('top')}>Home</p>
                            <p onClick={() => go('whatido')}>What i do</p>
                            <p onClick={() => go('works')}>My works</p>
                        </div>
                        <div className={styles.col}>
                            <p onClick={() => go('aboutme')}>About me</p>
                            <p onClick={() => go('techs')}>Technologies</p>
                            <p onClick={() => go('getintouch')}>Get in touch</p>
                        </div>
                    </div>

                </div> */}
            </div>

            <div className={styles.bottom}>
                <div className={styles.copyright}>
                    <p>Copy Right © Mauricio Rodrigues LTDA. - 2022</p>
                </div>

                <div className={styles.made}>
                    <p>This site was made with</p>
                    <Image src={'/nextjs.png'} width={'25'} height={'25'} alt={'nextjs'} />
                    <Image src={'/react.webp'} width={'25'} height={'25'} alt={'reactjs'} />
                    <Image src={'/ts.png'} width={'25'} height={'25'} alt={'ts'} />
                </div>
            </div>

        </div>
    );
}
