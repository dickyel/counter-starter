import PropTypes from 'prop-types';
import classnames from 'classnames';

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

import styles from './shop.module.css';

const Shops = ({shops,onKurang, onTambah}) => {
    return (
        <div className={styles.shops}>
        {shops.map((shop, index, arr) => {
          return (
            // jika bukan element terakhir maka akan tetep muncul divider nya
            <div
              key={index}
              className={classnames(styles.shop, {
                [styles.shopDivider]: !(arr.length === index + 1)
              })}
            >
              {shop.title}
              <div className={styles.shopImgWrapper}>
                <div className={styles.shopCount}>{shop.count}</div>
                <button onClick={ () => onKurang(index)} className={styles.shopActionButton}>
                  <img src={minusIcon} alt="minus-icon" />
                </button>
                <button onClick={ () =>  onTambah(index) } className={styles.shopActionButton}>
                  <img src={plusIcon} alt="plus-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )
}

Shops.propTypes = {
    shops: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onKurang: PropTypes.func,
    onTambah: PropTypes.func
}

export default Shops;

