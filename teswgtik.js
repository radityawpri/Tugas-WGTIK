function kenaRazia(tanggal, dataKendaraan) {
    const tilangPerOrang = {};
    const lokasiGanjilGenap = ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];

    dataKendaraan.forEach(kendaraan => {
        const platTerakhir = parseInt(kendaraan.plat.slice(-1), 10);
        const isTanggalGenap = tanggal % 2 === 0;
        const isPlatGenap = platTerakhir % 2 === 0;
        const ruteMelintasGanjilGenap = [];
        for (let i = 0; i < kendaraan.rute.length; i++) {
            if (lokasiGanjilGenap.indexOf(kendaraan.rute[i]) !== -1) {
                ruteMelintasGanjilGenap.push(kendaraan.rute[i]);
            }
        }

        if (kendaraan.type === "Mobil" && ruteMelintasGanjilGenap.length > 0) {
            if ((isTanggalGenap && !isPlatGenap) || (!isTanggalGenap && isPlatGenap)) {
                if (!tilangPerOrang[kendaraan.name]) {
                    tilangPerOrang[kendaraan.name] = 0;
                }
                tilangPerOrang[kendaraan.name] += ruteMelintasGanjilGenap.length;
            }
        }
    });

    return Object.entries(tilangPerOrang).map(([nama, jumlahTilang]) => {
        return { name: nama, tilang: jumlahTilang };
    });
}

const dataKendaraan = [
    {
        name: "Toni",
        plat: "B 1234 ABC",
        type: "Mobil",
        rute: ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"]
    },
    {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"]
    }
];

const result = kenaRazia(2, dataKendaraan);
console.log(result);