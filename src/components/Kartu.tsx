import { useRef } from "react"
import { WadahKartu } from "../styles";
import { gunakanGeserSesuatu } from "../utils/gunakanGeserSesuatu";
import { useDrop } from "react-dnd";
import { gunakanStateApp } from "../state/AppStateContext";
import { terSembunyikah } from "../utils/terSembunyikah";
import { pindahTugas, aturGeserSesuatu } from "../state/aksi";
import { throttle } from "throttle-debounce-ts";

type PropsKartu = {
    teks: string;
    id: string;
    kolomId: string
    tiNjauankah?: boolean
};

export const Kartu = ({
    teks,
    id,
    kolomId,
    tiNjauankah
}: PropsKartu) => {
    const { menggeserSesuatu, kiriman } = gunakanStateApp()

    const ref = useRef<HTMLDivElement>(null)
    
    const { geser } = gunakanGeserSesuatu({
        jenis: "KARTU",
        id,
        teks,
        kolomId
    })

    const [, drop] = useDrop({
        accept: "KARTU",
        hover: throttle(200, () => {
            if (!menggeserSesuatu) {
                return
            }
            if (menggeserSesuatu.jenis !== "KARTU") {
                return
            }
            if (menggeserSesuatu.id === id) {
                return
            }

            kiriman(
                pindahTugas(menggeserSesuatu.id, id, menggeserSesuatu.kolomId, kolomId)
            )
            kiriman(aturGeserSesuatu({...menggeserSesuatu, kolomId }))
        })
    })

    geser(drop(ref))

    return (
    <WadahKartu
       terSembunyikah={terSembunyikah(menggeserSesuatu, "KARTU", id, tiNjauankah)}
       tinJauankah={tiNjauankah}
       ref={ref}
    >
        {teks}
    </WadahKartu>
    )
};