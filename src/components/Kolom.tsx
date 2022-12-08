import {
    WadahKolom,
    JudulKolom
} from "../styles";
import { Kartu } from "../components/Kartu";
import { TambahSesuatu } from "../components/TambahSesuatu";
import { gunakanStateApp } from "../state/AppStateContext";
import {
    pindahJadwal,
    tambahTugas,
    pindahTugas,
    aturGeserSesuatu
} from "../state/aksi"
import { useRef } from "react";
import { gunakanGeserSesuatu } from "../utils/gunakanGeserSesuatu";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { terSembunyikah } from "../utils/terSembunyikah";

type PropsKolom = {
    teks: string;
    id: string;
    tinJauankah?: boolean
};

export const Kolom = ({ teks, id, tinJauankah }: PropsKolom) => {
    const { menggeserSesuatu, ambilTetugasDariIdJadwal, kiriman } = gunakanStateApp();

    const tetugas = ambilTetugasDariIdJadwal(id);

    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: ["KOLOM", "KARTU"],
        hover: throttle(200, () =>{
            if (!menggeserSesuatu) {
                return
            }
            if (menggeserSesuatu.jenis === "KOLOM") {
                if (menggeserSesuatu.id === id) {
                    return
                }

                kiriman(pindahJadwal(menggeserSesuatu.id, id))
            } else {
                if (menggeserSesuatu.kolomId === id) {
                    return
                }
                if (tetugas.length) {
                    return
                }

                kiriman(
                    pindahTugas(menggeserSesuatu.id, null, menggeserSesuatu.kolomId, id)
                )
                kiriman(aturGeserSesuatu({ ...menggeserSesuatu,
                kolomId: id}))
            }
        })
    })

    const { geser } = gunakanGeserSesuatu({jenis: "KOLOM", id, teks})

    geser(drop(ref))

    return (
    <WadahKolom
        tinJauankah={tinJauankah}
        ref={ref}
        terSembunyikah={terSembunyikah(menggeserSesuatu, "KOLOM", id)}
    >
        <JudulKolom>{teks}</JudulKolom>
        {tetugas.map((tugas) => (
            <Kartu
              kolomId={id}
              teks={tugas.teks}
              key={tugas.id}
              id={tugas.id}
            />
        ))}
        <TambahSesuatu
            TeksTombol="+ Tambah kartu lain"
            diTambahkan={(teks) => kiriman(tambahTugas(teks, id))}
            gelap
        />
    </WadahKolom>
    );
}