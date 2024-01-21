import PropTypes from "prop-types";

import styles from "./Form.module.css";

const FormInput = ({ onSubmit, onChange, value}) => {
  return (
    <form className={styles.formBelanja} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className={styles.inputBelanja}
        type="text"
        
        placeholder="buat list belanjaan"
      />
      <button type="submit" className={styles.tombolTambah}>
        Tambah
      </button>
    </form>
  );
};

FormInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default FormInput;
