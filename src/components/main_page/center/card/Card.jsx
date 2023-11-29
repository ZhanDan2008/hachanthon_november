import React from "react";
import styles from "./style.module.css";
const Card = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.up_part}>
          <img
            className={styles.logo}
            src="data:image/jpeg;base64,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"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;