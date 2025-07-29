// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // Ini adalah contoh struktur Header, sesuaikan dengan kebutuhan Anda.
  // Anda bisa memindahkan JSX header dari template HTML Anda ke sini.
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <Image src="/assets/img/header-logo.webp" width={150} height={40} alt="IMD Logo" priority />
        </Link>
        <nav id="navmenu" className="navmenu">
          {/* Tambahkan item navigasi Anda di sini */}
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product/card" className="active">RFID Card</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;