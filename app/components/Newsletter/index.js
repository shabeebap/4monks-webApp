import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={`${styles.newsletter}`}>
      <form className="flex lg:justify-end justify-center lg:pb-0 pb-[40px]">
        <input
          type="email"
          className={`${styles.input}`}
          placeholder="Your Email ID"
          required
        />
        <button
          type="submit"
          className={`${styles.button} focus:outline-none focus:ring focus:ring-gray-400`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
