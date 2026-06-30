import VolunteerHero from "../components/volunteer/VolunteerHero";
import VolunteerJourney from "../components/volunteer/VolunteerJourney";
import VolunteerForm from "../components/volunteer/VolunteerForm";
import Navbar from "../components/Navbar";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF8F3] dark:bg-black">
      <Navbar/>
      <VolunteerHero />
      <VolunteerJourney />
      <VolunteerForm />
    </main>
  );
}