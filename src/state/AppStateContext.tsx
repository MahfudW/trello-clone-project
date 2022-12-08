import React, { createContext, Dispatch, useContext } from "react";
import {
    appStateReducer,
    Tugas,
    Jadwal,
    AppState
 } from "./appStateReducer";
import { Aksi } from "./aksi";
import { useImmerReducer } from "use-immer";
import { GeserSesuatu } from "../components/GeserSesuatu";

const appData: AppState = {
    menggeserSesuatu: null,
    //....

    jejadwal: [
        {
            id: "0",
            teks: "Akan Berjalan",
            tetugas: [{id: "c0", teks: "Menulis kode di VSCode"}]
        },
        {
            id: "1",
            teks: "Sedang Berjalan",
            tetugas: [{id: "c2", teks: "Mempelajari TypeScript"}]
        },
        {
            id: "2",
            teks: "Sudah Berjalan",
            tetugas: [{id: "c3", teks: "Memulai gunakan ketikan statik"}]
        }
    ]
}

//* Define the Context
type PropsContextAppState = {
    menggeserSesuatu: GeserSesuatu | null
    jejadwal: Jadwal[];
    ambilTetugasDariIdJadwal(id: string): Tugas[];
    kiriman: Dispatch<Aksi>
};

const ContextAppState = createContext<PropsContextAppState> (
    {} as PropsContextAppState
)

//* Define the Context provider
export const PemberiStateApp = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, kiriman] = useImmerReducer(appStateReducer, appData);

    const { menggeserSesuatu, jejadwal } = state;

    const ambilTetugasDariIdJadwal = (id: string) => {
        return jejadwal.find((jadwal) => jadwal.id ===id)?.tetugas || []
    }

    return (
        <ContextAppState.Provider value={{menggeserSesuatu, jejadwal, ambilTetugasDariIdJadwal, kiriman}}>
            {children}
        </ContextAppState.Provider>
    );
}

//* Implement Custom Hook
export const gunakanStateApp = () => {
    return useContext(ContextAppState);
}