import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Ryzaq
            </span>{" "}
            Innovators 
          </h1>{" "}
          for{" "}
          <h2 className="inline">
          <br />

            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Quantum innovation
            </span>{" "}
            <span>💡</span><span className="bg-gradient-to-r bg-green-300 to-green-400 text-transparent bg-clip-text"> Li-Fi </span>communication technology ⚛️
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0" >
        ⚛️ Step into the future with LiFi & Quantum Visible Light 🌈—where data travels at the speed of light! 🚀 Harnessing quantum and nanotech at the atomic scale, LiFi transforms everyday LEDs 💡 into ultra-fast, secure data transmitters 📶. Powering the next era of communication 🌐, smart systems 🤖, and seamless connectivity 📲.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          {/* <a
            rel="noreferrer noopener"
            href=""
            target="_blank"Quantum World


            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
