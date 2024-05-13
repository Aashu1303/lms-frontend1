import styles from "./Main.module.css";
import p1 from "./../../../assests/p1.png";
import p2 from "./../../../assests/pr.png";

const Main = () => {
  return (
    <div className={styles.sect}>
      <div>
        <div className={styles.flex}>
          <div>
            <img src={p1} alt="img" />
          </div>
          <div className={styles.left}>
            <p>Laundry Requests</p>
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img src={p2} alt="img" />
          </div>
          <div className={styles.left}>
            <p>Profile</p>
          </div>
        </div>
      </div>
      <div>
        <p> sectino 2</p>
      </div>
      <div>
        <p> sectino 3</p>
      </div>
    </div>
  );
};

export default Main;
