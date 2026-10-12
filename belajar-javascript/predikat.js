function predikatKelulusan(ipk) {
  if (ipk >= 2.00 && ipk <= 2.75) {
    return "Memuaskan";
  } else if (ipk >= 2.76 && ipk <= 3.50) {
    return "Sangat Memuaskan";
  } else if (ipk >= 3.51 && ipk <= 4.00) {
    return "Cum Laude (Dengan Pujian)";
  } else {
    return "IPK tidak valid";
  }
}

module.exports = {
    predikatKelulusan
}