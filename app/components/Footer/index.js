import React from "react";
import styles from "./Footer.Module.scss";
import Informed from "../Informed";
import CopyRight from "../Copyright";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <div className={styles.root_container}>
      <div className={styles.main_container}>
        <Informed />
      </div>
      <div className={styles.main_container}>
        <FooterLinks />
      </div>
      <div className={styles.main_container}>
        <CopyRight />
      </div>
    </div>
  );
};

export default Footer;
