import Link from "next/link";
import Image from "next/image";
import Button from "../components/ui/Button/Button";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Логотип"
              width={100}
              height={50}
            />
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contacts">Insights</Link>
            <Link href="/contacts">Contact</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
          <Button variant="btn-header">Book Consultation</Button>
        </div>
      </div>
    </header>
  );
}
