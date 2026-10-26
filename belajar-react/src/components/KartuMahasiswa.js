function KartuMahasiswa({
  nama = "Tidak Diketahui",
  nim = "Tidak Diketahui",
  program_studi = "Tidak Diketahui"
}) {
  return (
    <div>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {program_studi}</p>
    </div>
  )
}

export default KartuMahasiswa;
