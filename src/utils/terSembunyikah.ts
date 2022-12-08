import { GeserSesuatu } from "../components/GeserSesuatu";

export const terSembunyikah = (
    menggeserSesuatu: GeserSesuatu | null,
    jenisSesuatu: string,
    id: string,
    tiNjauankah?: boolean
): boolean => {
    return Boolean(
    !tiNjauankah &&
        menggeserSesuatu &&
        menggeserSesuatu.jenis === jenisSesuatu &&
        menggeserSesuatu.id === id
    )
}