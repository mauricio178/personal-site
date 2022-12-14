import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { useControls } from '../../hooks/controls'
import { Modal } from '../Modal'

export type BannerWorkProps = {
    banner: HTMLImageElement
    name: string,
    text: string,
    repo: string,
    video: string,
    site: string,
    documentation?: string,
    period: string,
    techs: string
}

export function BannerWork(data: BannerWorkProps) {

    const {setModal, modal, dataModal, setDataModal} = useControls()

    function openModal() {
        setModal(true)
        
        const workData = {
            name: data.name,
            banner: data.banner,
            text: data.text,
            techs: data.techs,
            site: data.site,
            documentation: data.documentation,
            period: data.period,
            video: data.video,
            repo: data.repo
        }

        setDataModal(workData)
    }


    return (
        <li className={styles.container}>
            <Image src={data.banner} alt={data.name} fill/>
            <p>
                {data.name}
            </p>
            <BsFillInfoCircleFill onClick={() => openModal()}/>
        </li>
    )
}