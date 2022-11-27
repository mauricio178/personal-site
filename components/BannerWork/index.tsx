import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import {BsFillInfoCircleFill} from 'react-icons/bs'

type BannerWorkProps = {
    banner: HTMLImageElement
    name: string
}

export function BannerWork(data: BannerWorkProps) {
    return (
        <li className={styles.container}>
            <Image src={data.banner} alt={data.name} width={'230'} height={'140'}/>
            <p>
                {data.name}
            </p>
            <BsFillInfoCircleFill/>
        </li>
    )
}