type Sesuatu = {
    id: string
};

export const temukanDaftarSesuatuById = <SEsuatu extends Sesuatu>(
    sesesuatu: SEsuatu[],
    id: string
) => {
    return sesesuatu.findIndex((sesuatu: SEsuatu) => sesuatu.id === id)
};

export function hapusSesuatuDiDaftar<SEsuatu> (
    himpunan: SEsuatu[],
    daftar: number
) {
    return [...himpunan.slice(0, daftar), ...himpunan.slice(daftar + 1)]
}

export function pasangSesuatuDiDaftar<SEsuatu> (
    himpunan: SEsuatu[],
    sesuatu: SEsuatu,
    daftar: number
) {
    return [...himpunan.slice(0, daftar), sesuatu, ...himpunan.slice(daftar)]
}

export const pindahSesuatu = <SEsuatu>(
    himpunan: SEsuatu[],
    dari: number,
    untuk: number
) => {
    const sesuatu = himpunan[dari];
    return pasangSesuatuDiDaftar(hapusSesuatuDiDaftar(himpunan, dari), sesuatu, untuk);
}