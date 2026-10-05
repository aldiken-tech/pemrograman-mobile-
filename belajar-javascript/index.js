const ipk = 3.45;

if (ipk >= 3.5) {
  console.log('Predikat Cumlaude');
} else if (ipk >= 3.0) {
  console.log('Predikat Sangat Memuaskan');
} else if (ipk >= 1) {
  console.log('Predikat tidak Memuaskan');
}else {
    console.log('predikat memuaskan');
}

// ternary operator
const statusKelulusan = ipk >= 2.0 ? 'Lulus' : 'Tidak Lulus';

console.log(statusKelulusan);
