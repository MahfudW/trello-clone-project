import { Aksi } from "./aksi";
import { nanoid } from "nanoid";
import { pindahSesuatu, temukanDaftarSesuatuById } from "../utils/arrayUtils";
import { GeserSesuatu } from "../components/GeserSesuatu";

export type Tugas = {
    id: string
    teks: string
};

export type Jadwal = {
    id: string
    teks: string
    tetugas: Tugas[]
};

export type AppState = {
    jejadwal: Jadwal[]
    menggeserSesuatu: GeserSesuatu | null
};

export const appStateReducer = (
    draft: AppState,
    aksi: Aksi
): AppState | void => {
    switch (aksi.jenis) {
        case "TAMBAH_JADWAL": {
            draft.jejadwal.push({
                id: nanoid(),
                teks: aksi.muatan,
                tetugas: []
            })
            break
        }
        case  "TAMBAH_TUGAS": {
            const { teks, jadwalId } = aksi.muatan;
            const targetDaftarJadwal = temukanDaftarSesuatuById(draft.jejadwal, jadwalId);

            draft.jejadwal[targetDaftarJadwal].tetugas.push({
                id: nanoid(),
                teks
            })
            break
        }
        case "PINDAH_JADWAL": {
            const { seretId, arahId } = aksi.muatan;
            const seretDaftar = temukanDaftarSesuatuById(draft.jejadwal, seretId);
            const arahDaftar = temukanDaftarSesuatuById(draft.jejadwal, arahId);
            draft.jejadwal = pindahSesuatu(draft.jejadwal, seretDaftar, arahDaftar);
            break
        }
        case "ATUR_GESER_SESUATU": {
            draft.menggeserSesuatu = aksi.muatan
            break
        }
        case "PINDAH_TUGAS": {
            const {
                menyeretItemId,
                arahItemId,
                sumberKolomId,
                sasaranKolomId
            } = aksi.muatan

            const sumberDaftarIndek = temukanDaftarSesuatuById(
                draft.jejadwal,
                sumberKolomId
            )
            const sasaranDaftarIndek = temukanDaftarSesuatuById(
                draft.jejadwal,
                sasaranKolomId
            )

            const geserIndek = temukanDaftarSesuatuById(
                draft.jejadwal[sumberDaftarIndek].tetugas,
                menyeretItemId
            )
            //....
            const arahIndek = arahItemId ? temukanDaftarSesuatuById(
                draft.jejadwal[sasaranDaftarIndek].tetugas,
                arahItemId
            )
            : 0

            const sesuatu = draft.jejadwal[sumberDaftarIndek].tetugas[geserIndek]

            //* remove the task from the source list
            draft.jejadwal[sumberDaftarIndek].tetugas.splice(geserIndek, 1)

            //* Add the task to the target list
            draft.jejadwal[sasaranDaftarIndek].tetugas.splice(arahIndek, 0, sesuatu)
            break
        }
    }
};