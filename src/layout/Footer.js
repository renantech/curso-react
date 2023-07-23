import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li>
                <FaFacebook></FaFacebook>
                </li>
                <li>
                <FaInstagram></FaInstagram>
                </li>
                <li>
                <FaLinkedin></FaLinkedin>
                </li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    );
}