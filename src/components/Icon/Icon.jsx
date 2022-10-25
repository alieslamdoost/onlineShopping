import React from "react";
import styles from "../../assets/Style/Theme/Icon.css"

function Icon(props) {
  return (
    <div className={styles.icon}>
      <i className="px-2 fs-5">{props.icon}</i>
    </div>
  );
}

export default Icon;
