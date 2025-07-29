// app/product/card/page.tsx

"use client";

import { useEffect, useState } from 'react';

// Import library eksternal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';

// Import CSS untuk library
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

// Definisikan tipe data untuk kartu agar lebih aman
interface Card {
  id: number;
  name: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  label1?: string; desc1?: string;
  label2?: string; desc2?: string;
  label3?: string; desc3?: string;
  label4?: string; desc4?: string;
  label5?: string; desc5?: string;
  label6?: string; desc6?: string;
  label7?: string; desc7?: string;
  label8?: string; desc8?: string;
  label9?: string; desc9?: string;
  label10?: string; desc10?: string;
}

// ===================================================================
// KOMPONEN UNTUK MENAMPILKAN GAMBAR PRODUK DENGAN SLIDER (SWIPER)
// ===================================================================
const ProductImages = ({ item }: { item: Card }) => {
  const images = [];
  for (let i = 1; i <= 5; i++) {
    const image = item[`image${i}` as keyof Card];
    if (image) {
      images.push(
        <SwiperSlide key={i}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${image}`}
            alt={`${item.name} - Tampilan ${i}`}
            className="img-fluid"
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </SwiperSlide>
      );
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {images}
    </Swiper>
  );
};

// ===================================================================
// KOMPONEN UNTUK MENAMPILKAN INFO PRODUK SECARA DINAMIS
// ===================================================================
const ProductInfo = ({ item }: { item: Card }) => {
  const infoItems = [];
  for (let i = 1; i <= 10; i++) {
    const label = item[`label${i}` as keyof Card];
    const desc = item[`desc${i}` as keyof Card];
    if (label) {
      infoItems.push(
        <div className="info-item" key={i}>
          <div className="info-key">{label}</div>
          <div className="info-separator">:</div>
          <div className="info-value">{desc}</div>
        </div>
      );
    }
  }
  return <div className="info-list">{infoItems}</div>;
};


// ===================================================================
// KOMPONEN UTAMA HALAMAN
// ===================================================================
export default function RfidCardPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [banner, setBanner] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect untuk mengambil data dari API dan inisialisasi library
  useEffect(() => {
    // Inisialisasi AOS (Animasi)
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Ambil data dari API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cards`)
      .then(res => res.json())
      .then(data => {
        if (data && data.cards) setCards(data.cards);
        if (data && data.cardBanner) setBanner(data.cardBanner);
      })
      .catch(error => console.error("Gagal mengambil data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* Anda bisa menaruh komponen spinner di sini */}
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Bagian Banner */}
      {banner && (
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${banner}`}
            className="banner"
            alt="RFID Smart Card Banner"
            data-aos="fade-in"
            style={{ width: '100%' }}
          />
          <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>
            RFID SMART CARD
          </h1>
        </div>
      )}

      {/* Bagian Produk */}
      <section className="products container py-5">
        {cards.length > 0 ? (
          cards.map((item) => (
            <div className="card mb-3 position-relative" style={{ border: 'none' }} data-aos="fade-up" data-aos-delay="200" key={item.id}>
              <div className="product-item row g-0">
                <div className="product-image col-md-4 d-flex justify-content-center">
                  <ProductImages item={item} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title pb-1" style={{ fontWeight: 'bold', textAlign: 'left' }}>{item.name}</h2>
                    <ProductInfo item={item} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Produk tidak ditemukan.</p>
        )}
      </section>
    </>
  );
}