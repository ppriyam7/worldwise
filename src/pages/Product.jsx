import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Have you ever wondered if you could have an app which is
            dev-friendly and also allows you to locate places all over the world
            with just a small sized map? Well, worry not! WorldWise has you
            covered
          </p>
          <p>Created with passion, by Priyanshu.</p>
        </div>
      </section>
    </main>
  );
}
