import { useDrag } from "react-dnd";
import { gunakanStateApp } from "../state/AppStateContext";
import { GeserSesuatu } from "../components/GeserSesuatu";
import { aturGeserSesuatu } from "../state/aksi";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";

export const gunakanGeserSesuatu = (sesuatu: GeserSesuatu) => {
    const { kiriman } = gunakanStateApp()
    const [, geser, tinjauan] = useDrag({
        type: sesuatu.jenis,
        item: () => {
            kiriman(aturGeserSesuatu(sesuatu))
            return sesuatu
        },
        end: () => kiriman(aturGeserSesuatu(null))
    })
    useEffect(() => {
        tinjauan(getEmptyImage(), { captureDraggingState: true })
    }, [tinjauan])
    return { geser }
}