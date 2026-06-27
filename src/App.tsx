import { BirthdayCardSection } from "./components/BirthdayCardSection";
import { GreetingSection } from "./components/GreetingSection";
import { MusicPlayerSection } from "./components/MusicPlayerSection";
import { OceanScene } from "./components/OceanScene";

export default function App() {
  return (
    <main className="app-shell">
      <OceanScene />
      <div className="page-content">
        <GreetingSection />
        <MusicPlayerSection />
        <BirthdayCardSection />
      </div>
    </main>
  );
}
