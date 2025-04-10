// import { Statistics } from "./Statistics";
import { useEffect } from "react";
import pilot from "../assets/pilot.png";
import AOS from "aos"

export const About = () => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4" data-aosdata-aos="fade-left" data-aos-offset="100"  data-aos-duration="500">
              LiFi with Quantum Visible Light 🌈💡 is an advanced communication technology that uses visible light instead of traditional radio waves to transmit data. By integrating quantum principles, it offers not only ultra-fast speeds ⚡ but also unbreakable security 🔐. This innovative method uses LEDs to send data through light pulses, which are too fast to be noticed by the human eye 👁️. Quantum encryption ensures that data remains secure and tamper-proof, making it ideal for sensitive environments like hospitals 🏥, military zones 🛡️, and financial systems 💰. LiFi is also energy-efficient 🔋 and reduces electromagnetic interference 📡, making it safer in areas where Wi-Fi may not be suitable. With the potential to connect smart devices in homes 🏠, schools 🎓, and industries 🏭, LiFi with quantum visible light is paving the way for a smarter, faster, and more secure digital future 🌐🚀. The future of communication is bright—literally! ✨📲








              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
