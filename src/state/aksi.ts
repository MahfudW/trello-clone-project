import { GeserSesuatu } from "../components/GeserSesuatu";

export type Aksi =
    | {
        jenis: "TAMBAH_JADWAL"
        muatan: string
      }
    | {
        jenis: "TAMBAH_TUGAS"
        muatan: { teks: string; jadwalId: string }
      }
    | {
        jenis: "PINDAH_JADWAL"
        muatan: {
            seretId: string
            arahId: string
        };
      }
    | {
        jenis: "ATUR_GESER_SESUATU"
        muatan: GeserSesuatu | null
      }
    | {
        jenis: "PINDAH_TUGAS"
        muatan: {
            menyeretItemId: string
            arahItemId: string | null
            sumberKolomId: string
            sasaranKolomId: string
        }
      }


export const tambahTugas = (teks: string, jadwalId: string): Aksi => ({
    jenis: "TAMBAH_TUGAS",
    muatan: {
        teks,
        jadwalId
    }
});

export const tambahJadwal = (teks: string): Aksi => ({
    jenis: "TAMBAH_JADWAL",
    muatan: teks
});

export const pindahJadwal = (
    seretId: string,
    arahId: string
): Aksi => ({
    jenis: "PINDAH_JADWAL",
    muatan: {
        seretId,
        arahId
    }
});

export const aturGeserSesuatu = (
    menggeserSesuatu: GeserSesuatu | null
): Aksi => ({
    jenis: "ATUR_GESER_SESUATU",
    muatan: menggeserSesuatu
});

export const pindahTugas = (
    menyeretItemId: string,
    arahItemId: string | null,
    sumberKolomId: string,
    sasaranKolomId: string
): Aksi => ({
    jenis: "PINDAH_TUGAS",
    muatan: {
        menyeretItemId,
        arahItemId,
        sumberKolomId,
        sasaranKolomId
    }
})