import Experiences from "./_components/Experiences";
import ProfileSummary from "./_components/ProfileSummary";
import Skill from "./_components/Skiil";

export default function Page() {
  return (
    <div className="px-12 pt-24 md:px-32 lg:px-48">
      <ProfileSummary />
      <Skill />
      <Experiences />
    </div>
  );
}
