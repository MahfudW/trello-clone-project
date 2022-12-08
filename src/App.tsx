import { WadahAplikasi } from "./styles";
import { Kolom } from "./components/Kolom";
import { TambahSesuatu } from "./components/TambahSesuatu";
import { gunakanStateApp } from "./state/AppStateContext";
import { tambahJadwal } from "./state/aksi";
import { LapisanKustomGeser } from "./components/LapisanKustomGeser";

export const App = () => {
  const { jejadwal, kiriman } = gunakanStateApp();

  return (
    <WadahAplikasi>
      <LapisanKustomGeser />
      {jejadwal.map((jadwal) => (
        <Kolom teks={jadwal.teks} key={jadwal.id} id={jadwal.id} />
      ))}
      <TambahSesuatu TeksTombol="+ Tambah tugas lain" diTambahkan={(teks) => kiriman(tambahJadwal(teks))} />
    </WadahAplikasi>
  )
}