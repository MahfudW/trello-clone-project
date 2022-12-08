import { useState } from "react";
import {
    WadahTambahForm,
    TombolTambahForm,
    InputTambahSesuatu
} from "../styles";
import { gunakanFokus } from "../utils/gunakanFokus";

type PropsTambahForm = {
    diTambahkan(teks: string): void
}

export const FormTambahBaru = ({ diTambahkan }: PropsTambahForm) => {
    const [teks, aturTeks] = useState("");
    const inputRef = gunakanFokus();

    const tanganiTambahTeks = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            diTambahkan(teks);
        }
    }

    return (
        <WadahTambahForm>
            <InputTambahSesuatu
                ref={inputRef}
                value={teks}
                onChange={(e) => aturTeks(e.target.value)}
                onKeyPress={tanganiTambahTeks}
            />
            <TombolTambahForm onClick={() => diTambahkan(teks)} >Buat</TombolTambahForm>
        </WadahTambahForm>
    );
}