import styles from '../../styles/CTA.module.css'
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();
  return (
    <section className={styles.cta}>
      <h3>So, Are You Ready To Walk With Us?</h3>
      <p>Gain Access To All Our Resources By Starting An Account</p>
      <button onClick={() => router.push("/signup")} className={styles.createAccount}>Create an account</button>
      <div>
        <button onClick={() => router.push("/login")} className={styles.login}>Log in</button>
      </div>

    </section>
  )
}

export default CTA
