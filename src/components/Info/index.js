import PropTypes from "prop-types";

import styles from "./Info.module.css";

const Info = ({ shopsLength, totalCounts, onDelete }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Jumlah List: ${shopsLength}`}</p>
      </div>

      <div className={styles.infoTotal}>
        <p>{`Jumlah Count: ${totalCounts}`}</p>
      </div>

      <button onClick={onDelete} className={styles.deleteButton}>
        Hapus Semua
      </button>
    </div>
  );
};

Info.propTypes = {
  shopsLength: PropTypes.number,
  totalCounts: PropTypes.number,
  onDelete: PropTypes.func,
};

export default Info;
