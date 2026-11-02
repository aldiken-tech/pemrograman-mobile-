
import { useState } from "react";

function KehadiranMahasiswa() {
  const [kehadiran, setKehadiran] = useState(0);

  return (
    <div>
      <h1>Jumlah Kehadiran Mahasiswa</h1>
      <p>{kehadiran}</p>

      <button onClick={() => setKehadiran(kehadiran + 1)}>
        Tambah
      </button>

      <button onClick={() => setKehadiran(kehadiran - 1)}>
        Kurangi
      </button>

      <button onClick={() => setKehadiran(0)}>
        Reset
      </button>
    </div>
  );
}

export default KehadiranMahasiswa;
