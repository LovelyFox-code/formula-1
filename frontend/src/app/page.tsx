"use client";

import { useState } from "react";
import { Trophy, ChevronDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/button";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorDisplay from "@/components/error-display";
import SeasonCard from "@/components/season-card";
import NavBar from "@/components/navbar";
import styles from "./page.module.css";
import { useSeasons } from "@/hooks/use-seasons";

const HomePage = () => {
  const [visibleSeasons, setVisibleSeasons] = useState(6);
  const { data: seasons = [], isLoading, error } = useSeasons();

  const handleLoadMore = () => {
    setVisibleSeasons((prev) => prev + 6);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <ErrorDisplay message={error.message} />
      </div>
    );
  }

  return (
    <main>
      <NavBar />
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                <Trophy className={styles.titleIcon} />
                Formula 1 World Champions
              </h1>
              <p className={styles.description}>
                Discover Formula 1 World Champions from 2005 to present. Explore
                season details and race results.
              </p>
            </div>
            <div className={styles.yearRange}>
              <CalendarDays className={styles.yearRangeIcon} />
              <span className={styles.yearRangeText}>
                {seasons.length > 0
                  ? `${seasons[0].season} - ${
                      seasons[seasons.length - 1].season
                    }`
                  : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.grid}>
            {seasons.slice(0, visibleSeasons).map((season) => (
              <SeasonCard key={season.season} season={season} />
            ))}
          </div>

          {visibleSeasons < seasons.length && (
            <div className={styles.loadMoreContainer}>
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className={styles.loadMoreButton}
              >
                Load More Seasons
                <ChevronDown className={styles.loadMoreIcon} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
