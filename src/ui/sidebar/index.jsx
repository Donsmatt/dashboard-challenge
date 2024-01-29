"use client";

import styles from "./sidebar.module.css";
import Image from "next/image";
import { useState } from "react";

const menuIcons = [
  { alt: "Category", src: "/category.svg" },
  { alt: "Trend up", src: "/trend-up.svg" },
  { alt: "Two Users", src: "/profile-2user.svg" },
  { alt: "Box", src: "/box.svg" },
  { alt: "Discount Shape", src: "/discount-shape.svg" },
  { alt: "Info circle", src: "/info-circle.svg" },
];

const buttonIcons = [
  { alt: "Light", src: "/brightness-1.svg" },
  { alt: "Dark", src: "/moon-1.svg" },
];

const bottomIcons = [
  { alt: "Arrow Right", src: "/arrow-right.png" },
  { alt: "Setting", src: "/setting-2.png" },
  { alt: "Logout", src: "/logout.png" },
]

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image src="./Vector.svg" width={40} height={40} alt="" />
        </div>
        <div className={styles.menu}>
          {menuIcons.map((icon) => (
            <div className={styles.img} key={icon.alt}>
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
        <div className={styles.theme}>
          {buttonIcons.map((icon) => (
            <div className={styles.btn} key={icon.alt}>
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
          {bottomIcons.map((icon) => (
            <div className={styles.img} key={icon.alt}>
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
