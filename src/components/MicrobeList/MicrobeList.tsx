import type { Microbe } from "@/types/microbe";
import MicrobeItem from "@/components/MicrobeItem/MicrobeItem";
import styles from "./MicrobeList.module.css";

interface MicrobeListProps {
  microbes: Microbe[];
}

export default function MicrobeList({ microbes }: MicrobeListProps) {
  if (microbes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🔬</div>
        <h3 className={styles.emptyTitle}>No microorganisms found</h3>
        <p className={styles.emptyMessage}>
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.microbeList}>
      {microbes.map((microbe) => (
        <MicrobeItem key={microbe.id} microbe={microbe} />
      ))}
    </div>
  );
}
