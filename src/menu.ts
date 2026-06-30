export type Size = { size: string; price: number };
export type Item = { name: string; image: string; sizes: Size[] };
export type MenuCategory = { category: string; items: Item[] };

// Menu Prices
export const menu: MenuCategory[] = [
  {
    category: "🥖 Pideler",
    items: [
      {
        name: "Kıymalı",
        image: "pideler_kiymali.webp",
        sizes: [
          { size: "1 porsiyon", price: 280 },
          { size: "1.5 porsiyon", price: 420 },
        ],
      },
      {
        name: "Lahmacun",
        image: "pideler_lahmacun.webp",
        sizes: [
          { size: "1 adet", price: 160 },
          { size: "2 adet", price: 320 },
        ],
      },
      {
        name: "Kuşbaşılı",
        image: "pideler_kusbasili.webp",
        sizes: [
          { size: "1 porsiyon", price: 320 },
          { size: "1.5 porsiyon", price: 480 },
        ],
      },
      {
        name: "Kuşbaşılı Yumurtalı",
        image: "pideler_kusbasili_yumurtali.webp",
        sizes: [
          { size: "1 porsiyon", price: 340 },
          { size: "1.5 porsiyon", price: 510 },
        ],
      },
      {
        name: "Kuşbaşılı Kaşarlı",
        image: "pideler_kusbasili_kasarli.webp",
        sizes: [
          { size: "1 porsiyon", price: 370 },
          { size: "1.5 porsiyon", price: 555 },
        ],
      },
      {
        name: "Kıymalı Yumurtalı",
        image: "pideler_kiymali_yumurtali.webp",
        sizes: [
          { size: "1 porsiyon", price: 300 },
          { size: "1.5 porsiyon", price: 450 },
        ],
      },
      {
        name: "Karışık",
        image: "pideler_karisik.webp",
        sizes: [
          { size: "1 porsiyon", price: 340 },
          { size: "1.5 porsiyon", price: 510 },
        ],
      },
      {
        name: "Kıyma Kaşar Yumurta",
        image: "pideler_kiyma_kasar_yumurta.webp",
        sizes: [
          { size: "1 porsiyon", price: 320 },
          { size: "1.5 porsiyon", price: 480 },
        ],
      },
      {
        name: "Kıyma Kaşar",
        image: "pideler_kiyma_kasar.webp",
        sizes: [
          { size: "1 porsiyon", price: 320 },
          { size: "1.5 porsiyon", price: 465 },
        ],
      },
      {
        name: "Kuşbaşı Kaşar Yumurta",
        image: "pideler_kusbasili_yumurtali.webp",
        sizes: [
          { size: "1 porsiyon", price: 380 },
          { size: "1.5 porsiyon", price: 570 },
        ],
      },
      {
        name: "Kaşarlı",
        image: "pideler_kasarli.webp",
        sizes: [
          { size: "1 porsiyon", price: 280 },
          { size: "1.5 porsiyon", price: 420 },
        ],
      },
      {
        name: "Kaşarlı Sebzeli",
        image: "pideler_kasarli_sebzeli.webp",
        sizes: [
          { size: "1 porsiyon", price: 300 },
          { size: "1.5 porsiyon", price: 450 },
        ],
      },
    ],
  },
  {
    category: "🥩 Kebaplar",
    items: [
      {
        name: "Adana",
        image: "kebaplar_adana.webp",
        sizes: [
          { size: "1 porsiyon", price: 340 },
          { size: "1.5 porsiyon", price: 510 },
          { size: "0.5 porsiyon", price: 170 },
        ],
      },
      {
        name: "Tavuk Şiş",
        image: "kebaplar_tavuk_sis.webp",
        sizes: [
          { size: "1 porsiyon", price: 280 },
          { size: "1.5 porsiyon", price: 420 },
          { size: "0.5 porsiyon", price: 140 },
        ],
      },
      {
        name: "Kanat",
        image: "kebaplar_kanat.webp",
        sizes: [
          { size: "1 porsiyon", price: 290 },
          { size: "1.5 porsiyon", price: 435 },
          { size: "0.5 porsiyon", price: 145 },
        ],
      },
      {
        name: "Beyti",
        image: "kebaplar_beyti.webp",
        sizes: [
          { size: "1 porsiyon", price: 370 },
          { size: "1.5 porsiyon", price: 555 },
        ],
      },
      {
        name: "Sac Kavurma",
        image: "kebaplar_sac_kavurma.webp",
        sizes: [
          { size: "1 porsiyon", price: 450 },
          { size: "1.5 porsiyon", price: 650 },
        ],
      },
      {
        name: "Kiremitte Tavuk",
        image: "kebaplar_kiremitte_tavuk.webp",
        sizes: [
          { size: "1 porsiyon", price: 320 },
          { size: "1.5 porsiyon", price: 480 },
        ],
      },
      {
        name: "Kiremitte Kuşbaşı",
        image: "kebaplar_kiremitte_kusbasi.webp",
        sizes: [
          { size: "1 porsiyon", price: 380 },
          { size: "1.5 porsiyon", price: 570 },
        ],
      },
      {
        name: "Et Şiş",
        image: "kebaplar_et_sis.webp",
        sizes: [
          { size: "1 porsiyon", price: 470 },
          { size: "1.5 porsiyon", price: 705 },
          { size: "0.5 porsiyon", price: 235 },
        ],
      },
      {
        name: "Ciğer Şiş",
        image: "kebaplar_ciger_sis.webp",
        sizes: [
          { size: "1 porsiyon", price: 390 },
          { size: "1.5 porsiyon", price: 585 },
          { size: "0.5 porsiyon", price: 195 },
        ],
      },
      {
        name: "Yedoy Special",
        image: "kebaplar_yedoy_special.webp",
        sizes: [
          { size: "1 porsiyon", price: 420 },
          { size: "1.5 porsiyon", price: 630 },
        ],
      },
      {
        name: "Karışık Izgara",
        image: "kebaplar_karisik_izgara.webp",
        sizes: [
          { size: "1 porsiyon", price: 455 },
          { size: "Et Ciğer Çeşit", price: 885 },
        ],
      },
    ],
  },
  {
    category: "🍲 Çorbalar",
    items: [
      {
        name: "Mercimek",
        image: "corbalar_mercimek.webp",
        sizes: [
          { size: "1 porsiyon", price: 100 },
          { size: "0.5 porsiyon", price: 60 },
        ],
      },
      {
        name: "Ezogelin",
        image: "corbalar_ezogelin.webp",
        sizes: [
          { size: "1 porsiyon", price: 100 },
          { size: "0.5 porsiyon", price: 60 },
        ],
      },
    ],
  },
  {
    category: "🥤 İçecekler",
    items: [
      {
        name: "Su 0.5lt",
        image: "icecekler_su_05lt.webp",
        sizes: [{ size: "1 adet", price: 20 }],
      },
      {
        name: "Su 1.5lt",
        image: "icecekler_su_15lt.webp",
        sizes: [{ size: "1 adet", price: 30 }],
      },
      {
        name: "Su 5lt",
        image: "icecekler_su_5lt.webp",
        sizes: [{ size: "1 adet", price: 40 }],
      },
      {
        name: "Soda",
        image: "icecekler_soda.webp",
        sizes: [{ size: "1 adet", price: 40 }],
      },
      {
        name: "Şalgam",
        image: "icecekler_salgam.webp",
        sizes: [{ size: "1 adet", price: 60 }],
      },
      {
        name: "Kutu Meyve Suyu",
        image: "icecekler_kutu_meyve_suyu.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Kola",
        image: "icecekler_kutu_kola.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Kola Zero",
        image: "icecekler_kutu_kola_zero.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Pepsi",
        image: "icecekler_kutu_pepsi.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Pepsi Zero",
        image: "icecekler_kutu_pepsi_zero.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Sprite",
        image: "icecekler_kutu_sprite.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Fanta",
        image: "icecekler_kutu_fanta.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Kutu Didi",
        image: "icecekler_kutu_didi.webp",
        sizes: [{ size: "1 adet", price: 80 }],
      },
      {
        name: "Şişe Kola",
        image: "icecekler_sise_kola.webp",
        sizes: [{ size: "1 adet", price: 60 }],
      },
      {
        name: "Şişe Gazoz",
        image: "icecekler_sise_gazoz.webp",
        sizes: [{ size: "1 adet", price: 60 }],
      },
      {
        name: "Kola 1lt",
        image: "icecekler_kola_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Kola 2.5lt",
        image: "icecekler_kola_25lt.webp",
        sizes: [{ size: "1 adet", price: 120 }],
      },
      {
        name: "Fanta 1lt",
        image: "icecekler_fanta_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Fanta 2.5lt",
        image: "icecekler_fanta_25lt.webp",
        sizes: [{ size: "1 adet", price: 120 }],
      },
      {
        name: "Ayran Küçük",
        image: "icecekler_ayran_kucuk.webp",
        sizes: [{ size: "Küçük Boy", price: 20 }],
      },
      {
        name: "Ayran Büyük",
        image: "icecekler_ayran_buyuk.webp",
        sizes: [{ size: "Büyük Boy", price: 30 }],
      },
      {
        name: "Pepsi 1lt",
        image: "icecekler_pepsi_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Pepsi 2.5lt",
        image: "icecekler_pepsi_25lt.webp",
        sizes: [{ size: "1 adet", price: 120 }],
      },
      {
        name: "Uludağ Gazoz 1lt",
        image: "icecekler_uludag_gazoz_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Uludağ Gazoz 2.5lt",
        image: "icecekler_uludag_gazoz_25lt.webp",
        sizes: [{ size: "1 adet", price: 120 }],
      },
      {
        name: "Şalgam 1lt",
        image: "icecekler_salgam_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Ayran 1lt",
        image: "icecekler_ayran_1lt.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Şişe Çamlıca Gazoz Portakal",
        image: "icecekler_sise_camlica_gazoz_portakal.webp",
        sizes: [{ size: "1 adet", price: 60 }],
      },
      {
        name: "Şişe Uludağ Sade Gazoz",
        image: "icecekler_sise_uludag_sade_gazoz.webp",
        sizes: [{ size: "1 adet", price: 60 }],
      },
    ],
  },
  {
    category: "🍰 Tatlılar",
    items: [
      {
        name: "Kadayıf",
        image: "tatlilar_kadayif.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Künefe",
        image: "tatlilar_kunefe.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
      {
        name: "Baklava",
        image: "tatlilar_baklava.webp",
        sizes: [{ size: "1 adet", price: 100 }],
      },
    ],
  },
  {
    category: "🫓 Lavaş - Pide İç",
    items: [
      {
        name: "Lavaş",
        image: "lavas_pide_ic_lavas.webp",
        sizes: [{ size: "1 adet, Hazır", price: 40 }],
      },
      {
        name: "Pide Hazırlama",
        image: "lavas_pide_ic_pide_hazirlama.webp",
        sizes: [
          { size: "1 adet, Hazır", price: 40 },
          { size: "1 adet, Yedoy", price: 45 },
        ],
      },
    ],
  },
];

export default menu;
