import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Trova la carta migliore <br className="sm:block hidden" /> in pochi passi.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Non affidarti ad una carta qualunque, affidati a noi ed alla nostra comprovata esperienza.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal;