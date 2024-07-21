import DevelopmentStages from "@/components/DevelopmentStages";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Sevices";
import Team from "@/components/Team";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Industries from "@/components/Industries";
import Planet from "@/components/Planet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Desun App Development</title>
        <meta
          name="description"
          content="User-Centric Excellence in App Development"
        />
      </Head>

      <div className="relative overflow-hidden bg-blue-50"> {/* Added overflow-hidden here */}
        <div className="relative"> {/* Content wrapper */}
          <Header />
          <Hero />
        </div>

        {/* Image container */}
        <div className="absolute top-0 right-0 w-[50%] h-full">
          <img 
            src="https://s3-alpha-sig.figma.com/img/e1c1/a0a8/20c5ac161ce9cf498cb4424c62367725?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0ZjFUjYzqj2ng6osuulVZVetR4C-JHb7MOsoj9o8SrLU6FibCa0ogna3yWCBZ6n7jBGs52~yxO~rZe8SbeoNXyzs5TdsXf7C2Kf0RrUiY45RHl-FbkCdFt7kfpjNS91HxtElcFIQ6ebQdesxvN1HVNefrSjkuq~hLLNXJgZemZG0gqmCkrE2wRw4ahkUyROm5~S-fp6EzQlAnkorcw5hLoc0~i4lurG78aEc~8jIn6oN0eANVqF46TzFoLJ-StpSVbH9ersFylRRbR9oESGqxCx3OiOD1nb13DZrWU3LzQ7PKEklju7TDQ4rmD00Zucy39m-Py2297cUUl9nVfYWA__"
            className="absolute w-[20rem] h-[42rem] -top-[100px] right-[180px] rounded-tl-[24px] opacity-100 -rotate-12 hidden sm:hidden lg:block"
            alt="First illustration"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1e5a/9875/8d3e8f60cb7154b40b7e9574aa3943f4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~1zQ-m9v6DUqAnnX79Ub9SLyF2-~YOCyxS-8YMZwCvjzHuB-htJ3e0hct8v~59airldSfVP60UfqMxjWAYY~gi1hN0MJ53v4TvGyLSdwHPKmD2VLu9yCJCsLBiVteQphbSthqA27ygcwTXLRX7wSN84lcBq~NbtpPSXXIatGnDJ2A~jhrfQUt~rYYfiobdmvBwOPwLEgqUk~OlN78Y9kV7vjZs8tcqBoWGTYc~5Ca00vEGfkrBDCSPc9dEzxsRG1uQoM8-qwJ1dnO3hn5GeV8IytAq0O12CtKJiQGebjAqbcbUmlmJLY~fAOj~11gXvxgJdcJbA2y-eLmN~Vac5AQ__"
            className="absolute w-[20rem] h-[42rem] -top-[200px] -right-[150px] rounded-tl-[24px] opacity-100 -rotate-12 hidden sm:hidden lg:block"
            alt="First illustration"
          />
          <img 
            src="https://s3-alpha-sig.figma.com/img/e1c1/a0a8/20c5ac161ce9cf498cb4424c62367725?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0ZjFUjYzqj2ng6osuulVZVetR4C-JHb7MOsoj9o8SrLU6FibCa0ogna3yWCBZ6n7jBGs52~yxO~rZe8SbeoNXyzs5TdsXf7C2Kf0RrUiY45RHl-FbkCdFt7kfpjNS91HxtElcFIQ6ebQdesxvN1HVNefrSjkuq~hLLNXJgZemZG0gqmCkrE2wRw4ahkUyROm5~S-fp6EzQlAnkorcw5hLoc0~i4lurG78aEc~8jIn6oN0eANVqF46TzFoLJ-StpSVbH9ersFylRRbR9oESGqxCx3OiOD1nb13DZrWU3LzQ7PKEklju7TDQ4rmD00Zucy39m-Py2297cUUl9nVfYWA__"
            className="absolute w-[20rem] h-[42rem] top-[620px] right-[18px] rounded-tl-[24px] opacity-100 -rotate-12 hidden sm:hidden lg:block"
            alt="First illustration"
          />
        </div>
      </div>

      <main>
        <Planet />
        <Services />
        <Industries/>
        <Projects />
        <ContactForm />
        <DevelopmentStages />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}