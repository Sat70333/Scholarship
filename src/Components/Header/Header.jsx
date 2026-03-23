import logo from "../../assets/logo.png";
import styles from "./Header.module.css"

function Header() {
  return (
    <>
      <div class={styles.headerDiv}>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Schemes</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <button>Login</button>
      </div>
    </>
  );
}

export default Header;