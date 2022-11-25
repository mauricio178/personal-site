import styles from './styles.module.scss'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';

export function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contacts}>
                    <h2>Contacts</h2>
                    <div className={styles.list}>
                        <div className={styles.col}>
                            <div className={styles.whatsapp}>
                                <Image src={'/wpp-icon.png'} alt={'whatsapp icon'} width={'30'} height={'30'} />
                                <a href={'https://web.whatsapp.com/send?phone=5561982243585'} target="_blank">Start a conversation</a>
                            </div>
                            <div className={styles.linkedin}>
                                <Image src={'/linkedin.png'} alt={'whatssapp icon'} width={'30'} height={'30'} />
                                <a href={'https://www.linkedin.com/in/mauricio-rodrigues-659352186/'} target="_blank">Visit profile</a>
                            </div>
                            <div className={styles.github}>
                                <Image src={'/github.png'} alt={'whatsapp icon'} width={'30'} height={'30'} />
                                <a href={'https://github.com/mauricio178'} target="_blank">Visit profile</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sitemap}>
                    <h2>Sitemap</h2>
                    <div className={styles.list}>
                        <div className={styles.col}>
                            <p>Home</p>
                            <p>What i do</p>
                        </div>
                        <div className={styles.col}>
                            <p>My works</p>
                            <p>About me</p>
                        </div>
                        <div className={styles.col}>
                            <p>Get in touch</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.copyright}>
                    <p>Copy Right © Mauricio Rodrigues LTDA. - 2022</p>
                </div>

                <div className={styles.made}>
                    <p>This site was made with</p>
                    <Image src={'/nextjs.png'} width={'25'} height={'25'} alt={'nextjs'} />
                    <Image src={'/react.webp'} width={'25'} height={'25'} alt={'nextjs'} />
                    <Image src={'/ts.png'} width={'30'} height={'22'} alt={'nextjs'} />
                </div>
            </div>

        </div>
    );
}
