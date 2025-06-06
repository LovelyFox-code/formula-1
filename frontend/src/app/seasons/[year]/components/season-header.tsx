import React from "react";
import { Button } from "@/components/button";
import { CalendarRange, ChevronLeft } from "lucide-react";
import Link from "next/link";
import styles from "./season-header.module.css";

const SeasonHeader = ({
  season,
  rounds,
}: {
  season: string;
  rounds: number;
}) => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.backButton}>
        <Link href="/">
          <Button variant="link" size="sm" aria-label="Return to Formula 1 Champions list">
            <ChevronLeft className={styles.backButtonIcon} aria-hidden="true" />
            Back to Champions
          </Button>
        </Link>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <CalendarRange className={styles.titleIcon} aria-hidden="true" />
          {season} Formula-1
        </h1>
        <div className={styles.rounds}>{rounds} Races</div>
      </div>
    </div>
  </div>
);

export default SeasonHeader;
