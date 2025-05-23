import React from "react";
import ChampionshipStats from "@/components/championship-stats";
import { ChampionStats } from "@/types/api";

interface ChampionStatsSectionProps {
  stats: ChampionStats;
}

const ChampionStatsSection = ({ stats }: ChampionStatsSectionProps) => (
  <div className="mb-10">
    <ChampionshipStats stats={stats} />
  </div>
);

export default ChampionStatsSection;
