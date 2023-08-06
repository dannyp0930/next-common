import Image from "next/image";
import Icon from "public/assets/icons/icon-512x512.png";

export default function Header() {
  return (
    <header>
      <Image src={Icon} width={20} height={20} alt="at-live" />
    </header>
  );
}
