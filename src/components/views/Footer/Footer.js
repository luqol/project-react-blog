import styles from './Footer.module.scss';

const Footer = () => {
    return(
      <footer className={styles.footer}>
        <p className="text-center text-muted m-0">Copyright &copy; BlogApp 2024</p>
      </footer>
    );
  };
  
  export default Footer;