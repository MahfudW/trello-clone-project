export type KartuGeserSesuatu = {
    id: string
    kolomId: string
    teks: string
    jenis: "KARTU"
}

export type KolomGeserSesuatu = {
    id: string
    teks: string
    jenis: "KOLOM"
};

export type GeserSesuatu = KartuGeserSesuatu | KolomGeserSesuatu;