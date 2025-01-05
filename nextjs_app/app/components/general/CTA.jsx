import styles from '../../styles/CTA.module.css'
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();
  return (
    <section className={styles.cta}>
      <h3>So, Are You Ready To Walk With Us?</h3>
      <p>Let's get in touch!</p>
      <button onClick={() => router.push("/contact")} className={styles.createAccount}>Contact Us!</button>

    </section>
  )
}

export default CTA
