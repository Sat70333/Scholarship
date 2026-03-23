import styles from "./Footer.module.css";
import qrcode from "../../assets/qrcode.png"
import playstore from "../../assets/playstore.png"

function Footer() {
  return (
    <>
      <div className={styles.mainFooter}>
        <ul>
          <h3>Quick Links</h3>
          <li>&gt; Home</li>
          <li>&gt; Scholarships</li>
          <li>&gt; Eligibility</li>
          <li>&gt; Contact</li>
        </ul>

        <div className={styles.underline}></div>
        
        <ul>
          <h3>Student Resources</h3>
          <li>&gt; Application Tips</li>
          <li>&gt; FAQs</li>
          <li>&gt; Schemes</li>
          <li>&gt; Support</li>
        </ul>

        <div className={styles.underline}></div>

        <ul>
          <h3>Contact Us</h3>
          <li><i className="fa-solid fa-phone-volume"></i> +91 7033390964</li>
          <li><i className="fa-solid fa-envelope"></i> satyamkumarmsk2@gmail.com</li>
          <li><i className="fa-solid fa-location-dot"></i> CSE Building, Bhagalpur College <br />&nbsp;&nbsp;&nbsp;&nbsp;of Engineering , 813210</li>
        </ul>

        <div className={styles.qrbox}> 
          <div className={styles.box}>
              <p>Download the Mobile Application</p>
              <img className={styles.qrImg} src={qrcode} alt="" />

              <img className={styles.playstoreImg} src={playstore} alt="" />
              <p>Scan to Download</p>
          </div>

          
        </div>

      </div>

      <div className={styles.copyrightFooter}> © 2026 Scholarship Portal | All rights Reserved</div>
    </>
  );
}

export default Footer;