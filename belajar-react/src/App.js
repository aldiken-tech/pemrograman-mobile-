import { useState } from "react";
import KartuMahasiswa from "./components/KartuMahasiswa";

const mahasiswa = [
  {
    nama: "Budi Santoso",
    nim: "231002",
    programStudi: "Informatika"
  },
  {
    nama: "Siti Aminah",
    nim: "231003",
    programStudi: "Sistem Informasi"
  },
  {
    nama: "Rina Putri",
    nim: "231004",
    programStudi: "Informatika"
  }
];

function App() {
  const [kehadiran, setKehadiran] = useState(0);

  return (
    <div>
      <h1>Absensi Mahasiswa</h1>

      {mahasiswa.map((mhs) => (
        <div key={mhs.nim}>
          <KartuMahasiswa
            nama={mhs.nama}
            nim={mhs.nim}
            program_studi={mhs.programStudi}
          />

          <button onClick={() => setKehadiran(kehadiran + 1)}>
            Absen
          </button>
        </div>
      ))}

      <h2>Jumlah Kehadiran: {kehadiran}</h2>

      <button onClick={() => setKehadiran(kehadiran - 1)}>
        Kurangi
      </button>

      <button onClick={() => setKehadiran(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;

