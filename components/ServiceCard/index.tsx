import styles from './styles.module.scss'
import React, { ReactNode } from 'react'
import { Button } from '../Button';
import Image from 'next/image';

type ServiceProps = {
    icon: HTMLImageElement,
    title: string,
    text: string
}

export function ServiceCard(data: ServiceProps) {

    return (
        <div className={styles.container}>
            <Image src={data.icon} width={'70'} height={'70'} alt={data.title}/>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
        </div>
    );
}
