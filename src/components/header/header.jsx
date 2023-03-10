import Link from "next/link";
import Img from "/public/images/img-banner.png";
import Image from "next/image";

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image src={Img.src} width={50} height={50} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">Abount Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <p className="title">Set ut perspiciatis unde omnis</p>
  </header>
);
