# SWIKI
scraper for ```https://id.wikipedia.org```

## Usage
* Clone this repos
```
git clone https://github.com/defrindr/swiki.git
```
* If you are not installed deno in your system, run this command
```
make install
```
* Try to using it
```
deno run --allow-net examples/wiki-cli.ts --help
```

## Example
In CLI
``` 
☻ nightsec ♦ greyxploiter  ✔                                                                            …/Documents/coding/projects/wikipedia
>_ deno run --allow-net examples/wiki-cli.ts --query="jam tangan"
Compile file:///home/nightsec/Documents/coding/projects/wikipedia/examples/wiki-cli.ts
Jam tangan atau arloji adalah penunjuk waktu yang dipakai di pergelangan tangan manusia. Jam tangan pertama kali 
diperkenalkan pada abad ke-16. Pada saat itu semua jam tangan dan alat penunjuk waktu lainnya menggunakan mesin penggerak 
mekanik manual (hand-winding). Jam tangan tertua yang diketahui adalah jam tangan milik Ratu Inggris Elizabeth I yang 
dibuat oleh Robert Dudley pada tahun 1571. Dari abad 16 hingga awal abad 20, jam tangan hanya digunakan oleh wanita, 
sedangkan pria menggunakan jam saku.
Dominasi jam tangan bermesin mekanik selama berabad-abad dengan segala keindahan, kerumitan, dan kemewahannya, akhirnya 
sedikit terganggu dengan hadirnya jam tangan bermesin elektrik yang pertama kali diperkenalkan pada tahun 1957 di 
Lancaster, Pennsylvania, Amerika Serikat oleh Hamilton Watch Company. Penelitian arloji elektrik tersebut sebenarnya telah
 dimulai sejak tahun 1946.
Eksistensi jam tangan elektrik ternyata tidak bertahan lama, hingga Seiko dari Jepang memperkenalkan jam tangan bermesin 
penggerak quartz (baterai) pertama di dunia, Seiko Astron 35SQ pada tahun 1969. Kelahiran jam tangan quartz ini diakui 
oleh IEEE (Institute of Electrical and Electronics Engineers) untuk masuk kedalam daftar tonggak sejarah perkembangan ilmu 
teknik elektro dunia. Jam tangan jenis ini jugalah yang kemudian benar-benar merusak hegemoni industri jam tangan mekanik 
Swiss. Jam tangan quartz mendominasi pasar, digunakan oleh merk-merk lain, dan menjadi awal perubahan industri jam secara 
global. Jam tangan yang awalnya diproduksi dengan jumlah yang terbatas dan eksklusif, berubah menjadi produksi massal 
dengan harga jual yang lebih terjangkau.
 ☻ nightsec ♦ greyxploiter  ✔                                                                            …/Documents/coding/projects/wikipedia
>_ 
```

Or web based

```
import { SWIKI } from 'https://raw.githubusercontent.com/defrindr/swiki/master/mod.ts'

const swiki = new SWIKI();

let result1 = await swiki.run("baju");
console.log(result1);

console.log("\n ==== \n")

let result2 = await swiki.run("rumah");
console.log(result2);
```

## License
This project under [MIT LICENSE](LICENSE)
