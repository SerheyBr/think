import Link from "next/link";
import "./footer.scss";
import Button from "../components/ui/Button/Button";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="container">
            <div className="footer__top-content">
              <SectionHeader
                title={"Join the Edge of Intelligence"}
                subtitle={
                  "Get weekly insights on AI, innovation, and strategic thinking delivered to your inbox"
                }
                color="white"
              />
              <Button variant="primary">Subscribe to Newsletter</Button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-content">
              <div className="footer__bottom-columns">
                <ul className="footer-column">
                  <li className="footer-column__title">About</li>
                  <li>
                    25+ years transforming enterprises through technology and
                    strategic innovation.
                  </li>
                </ul>
                <ul className="footer-column">
                  <li className="footer-column__title">Services</li>
                  <li>
                    <Link href={"/"}>Strategic Consulting</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Keynote Speaking</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Executive Advisory</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Startup Mentoring</Link>
                  </li>
                </ul>
                <ul className="footer-column">
                  <li className="footer-column__title">Connect</li>
                  <li>
                    <Link href={"/"}>LinkedIn</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Edge of Intelligence Newsletter</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Email</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Schedule a Call</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__bottom-copy">© All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
