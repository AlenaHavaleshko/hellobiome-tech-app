import type { Microbe } from "@/types/microbe";
import styles from "./MicrobeItem.module.css";

interface MicrobeItemProps {
  microbe: Microbe;
}

export default function MicrobeItem({ microbe }: MicrobeItemProps) {
  return (
    <article
      className={`${styles.microbeCard} ${styles[microbe.type]} ${styles[microbe.role]}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.typeBadge}>
          <span className={styles.typeIcon}>
            {microbe.type === "bacteria" ? "🦠" : "🍄"}
          </span>
          <span className={styles.typeLabel}>{microbe.type}</span>
        </div>
        <div
          className={`${styles.roleBadge} ${styles[`role-${microbe.role}`]}`}
        >
          {microbe.role}
        </div>
      </div>

      <div className={styles.microbeHeader}>
        <h3 className={styles.microbeName}>{microbe.scientificName}</h3>
        <p className={styles.microbeSpecies}>{microbe.name}</p>
      </div>

      <div className={styles.abundanceContainer}>
        <div className={styles.abundanceLabel}>Relative Abundance</div>
        <div className={styles.abundanceValue}>{microbe.abundance}%</div>
        <div className={styles.abundanceBar}>
          <div
            className={styles.abundanceFill}
            style={{ width: `${microbe.abundance}%` }}
          />
        </div>
      </div>

      {microbe.taxonomy && (
        <div className={styles.taxonomy}>
          <div className={styles.taxonomyItem}>
            <span className={styles.taxonomyLabel}>Genus:</span>
            <span className={styles.taxonomyValue}>
              {microbe.taxonomy.genus}
            </span>
          </div>
          <div className={styles.taxonomyItem}>
            <span className={styles.taxonomyLabel}>Phylum:</span>
            <span className={styles.taxonomyValue}>
              {microbe.taxonomy.phylum}
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
