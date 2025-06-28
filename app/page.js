import HomeHero from "./components/sections/HomeHero/HomeHero";
import HomeStepsGrid from "./components/sections/HomeStepsGrid/HomeStepsGrid.jsx";
import HomeWaysICanHelp from "./components/sections/HomeWaysICanHelp/HomeWaysICanHelp.jsx";
import HomeLatestInsights from "./components/sections/HomeLatestInsights/HomeLatestInsights.jsx";
import HomeWorkTogether from "./components/sections/HomeWorkTogether/HomeWorkTogether.jsx";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeStepsGrid />
      <HomeWaysICanHelp />
      <HomeLatestInsights />
      <HomeWorkTogether />
    </main>
  );
}
