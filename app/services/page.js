import ServicesHero from "../components/sections/ServicesHero/ServicesHero.jsx";
import ServicesTechVoice from "../components/sections/ServicesTechVoice/ServicesTechVoice.jsx";
import ServicesServ from "../components/sections/ServicesServ/ServicesServ.jsx";
import ServicesPartner from "../components/sections/ServicesPartner/ServicesPartner.jsx";
import ServicesCollab from "../components/sections/ServicesCollab/ServicesCollab.jsx";

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesTechVoice />
      <ServicesServ />
      <ServicesPartner />
      <ServicesCollab />
    </main>
  );
}
