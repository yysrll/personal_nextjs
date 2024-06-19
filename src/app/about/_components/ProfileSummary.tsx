import Image from "next/image";

export default function ProfileSummary() {
  return (
    <div className="">
      <h2 className="text-lg font-bold text-black dark:text-white">
        🙋‍♂️ About me
      </h2>
      <div className="mt-6 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
        <div className="relative aspect-[4/5] w-full max-w-64 md:w-64 md:flex-none">
          <Image
            src="/me-full.jpg"
            alt="Me"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
        <p className="text-gray-500 md:flex-grow dark:text-gray-500">
          Experienced{" "}
          <span className="font-bold text-black dark:text-white">
            Software Engineer
          </span>{" "}
          specializing in{" "}
          <span className="font-bold text-black dark:text-white">
            Mobile Development
          </span>{" "}
          with a current stack comprising{" "}
          <span className="font-bold text-black dark:text-white">
            {" "}
            Flutter and Kotlin
          </span>
          , with over a year of professional experience. Proficient in utilizing
          Flutter, Provider, GetIt, and Modularization techniques to develop
          robust and user-friendly mobile applications. Skilled in Kotlin, Git,
          Domain Driven Development, and Clean Architecture principles, ensuring
          the delivery of high-quality software solutions. Excels in
          collaborating with cross-functional teams to translate client
          requirements into innovative mobile solutions. Eager to continually
          expand my skill set beyond mobile development and embrace new learning
          opportunities.
        </p>
      </div>
    </div>
  );
}
