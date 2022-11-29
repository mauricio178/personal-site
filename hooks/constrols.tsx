import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { BannerWorkProps } from '../components/BannerWork';

interface ControlsProviderProps {
    children: any;
}

export type SectorProps = {
    id?: number,
    name: string
}

export type ChargeProps = {
    id?: number,
    name: string
    sectorId?: number
}

interface ControlsContextData {
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    dataModal: BannerWorkProps 
    setDataModal: Dispatch<SetStateAction<BannerWorkProps>>
}

export const ControlsContext = createContext(({} as ControlsContextData));

function ControlsProvider({ children }: ControlsProviderProps) {

    const [modal, setModal] = useState<boolean>(true)

    const [dataModal, setDataModal] = useState<BannerWorkProps>({} as BannerWorkProps)

    return (
        <div>
            <ControlsContext.Provider
                value={{
                    modal,
                    setModal,
                    dataModal,
                    setDataModal
                }}
            >
                {children}
            </ControlsContext.Provider>
        </div>
    )
}

function useControls() {
    return useContext(ControlsContext)
}

export { ControlsProvider, useControls }