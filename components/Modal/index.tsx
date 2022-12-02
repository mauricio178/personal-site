import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { useControls } from '../../hooks/constrols'
import { BannerWorkProps } from '../BannerWork'
import { Button } from '../Button'
import { url } from 'inspector'

export function Modal() {

    const { modal, setModal, dataModal, setDataModal } = useControls()

    function closeModal() {
        setModal(false)
        setDataModal({} as BannerWorkProps)
    }

    return (
        <div className={modal ? styles.show : styles.hide}>
            <div className={styles.content} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${dataModal.banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <div className={styles.top}>
                    <h2>{dataModal.name}</h2>
                    <Button label={'X'} theme={'red'} onClick={() => closeModal()} />
                </div>
                <p className={styles.text}>{dataModal.text}</p>
                <div className={styles.infos}>
                    <div className={styles.col}>
                        <div className={styles.info}>
                            <span>Period</span>
                            <p>{dataModal.period}</p>
                        </div>
                        <div className={styles.info}>
                            <span>Link Repository</span>
                            {dataModal.repo === 'private' ? <p className={styles.unavailable}>Private</p> : <a href={dataModal.repo}>Link here</a>}
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.info}>
                            <span>Techologies used</span>
                            <p>{dataModal.techs}</p>
                        </div>
                        <div className={styles.info}>
                            <span>Link site</span>
                            {dataModal.site === 'Unavailable' ? <p className={styles.unavailable}>Unavailable</p> : <a href={dataModal.site} target='_blank'>Link here</a>}
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.info}>
                            <span>Demo Aplication</span>
                            {dataModal.video === 'Unavailable' ? <p className={styles.unavailable}>Unavailable</p> : <a href={dataModal.video} target='_blank'>Link here</a>}
                        </div>

                        {dataModal.documentation ?
                            <div className={styles.info}>
                                <span>Documentation</span>
                                <a href={dataModal.documentation} target='_blank'>See Research</a>
                            </div>

                            : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}