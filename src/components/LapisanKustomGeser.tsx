import { useDragLayer } from "react-dnd";
import { Kolom } from "./Kolom";
import { gunakanStateApp } from "../state/AppStateContext";
import {
    PembungkusTinjauanGeser,
    LapisanKustomWadahGeser
 } from "../styles";
import { Kartu } from "./Kartu";

export const LapisanKustomGeser = () => {
    const { menggeserSesuatu } = gunakanStateApp();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }));

    return menggeserSesuatu && currentOffset ? (
        <LapisanKustomWadahGeser>
            <PembungkusTinjauanGeser position={currentOffset} >
            {menggeserSesuatu.jenis === "KOLOM" ? (
                <Kolom
                id={menggeserSesuatu.id}
                teks={menggeserSesuatu.teks}
                tinJauankah
              />
            ) : (
                <Kartu
                  kolomId={menggeserSesuatu.kolomId}
                  tiNjauankah
                  id={menggeserSesuatu.id}
                  teks={menggeserSesuatu.teks}
                  />
            )}
            </PembungkusTinjauanGeser>
        </LapisanKustomWadahGeser>
    ) : null
}