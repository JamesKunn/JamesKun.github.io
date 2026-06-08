import Image from "next/image";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="social-card"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={18}
                height={18}
              />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Image
            src="/images/logo.png"
            alt="logo bottom"
            className="center-block"
            width={44}
            height={44}
          />
        </div>
      </div>
    </footer>
  );
}
