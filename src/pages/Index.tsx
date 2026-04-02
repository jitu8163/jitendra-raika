import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/CursorFollower";
import ParticleBackground from "@/components/ParticleBackground";
import GradientBlobs from "@/components/GradientBlobs";

const Index = () => (
  <div className="min-h-screen bg-transparent">
    <CursorFollower />
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <GradientBlobs />
      <ParticleBackground />
    </div>
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  </div>
);

export default Index;
