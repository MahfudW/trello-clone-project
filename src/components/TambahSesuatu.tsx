import { useState } from "react";
import { TombolTambahSesuatu } from "../styles";
import { FormTambahBaru } from "../components/FormTambahBaru";

type PropsTambahSesuatu = {
    diTambahkan(teks: string): void;
    TeksTombol: string;
    gelap?: boolean;
}

export const TambahSesuatu = (props: PropsTambahSesuatu) => {
    const [tampilForm, aturTampilForm] = useState(false);
    const { diTambahkan, TeksTombol, gelap } = props;

    if (tampilForm) {
        return (
            <FormTambahBaru
            diTambahkan={(teks) => {
                diTambahkan(teks)
                aturTampilForm(false)
          }}
        />
        );
    }

    return (
        <TombolTambahSesuatu gelap={gelap} onClick={() => aturTampilForm(true)} >
            {TeksTombol}
        </TombolTambahSesuatu>
    );
};