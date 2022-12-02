import React, { ChangeEvent, ReactNode, useState } from "react";

import styles from './styles.module.scss'

type InputProps = {
    placeholder: string;
    type: string;
    value: string | [];
    onchange: any;
    theme?: 'primary' | 'white';
    error?: boolean;
    textarea?: boolean
}

export function Input({
    placeholder,
    type,
    value,
    onchange,
    theme = 'primary',
    error = false,
    textarea = false
}: InputProps) {


    function changeInputValue(text: string) {
        onchange(text);
    }

    return (
        <div
            className={`${styles.container} ${theme === 'primary' ? styles.primary : styles.white} ${error ? styles.errorContainer : ''} ${textarea ? styles.textArea : ''}`}>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(text) => changeInputValue(text.target.value)}
            />
        </div>
    )
}