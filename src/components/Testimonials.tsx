import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import AOS from 'aos'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment: "🔷 This LiFi Tech is Awesome! 💡⚛️ Step into the light-powered future of wireless communication—fast, secure, and mind-blowing! 🚀📶",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "💭 Beyond Classical Networks LiFi uses light instead of radio waves, powered by quantum principles like precision and security. 🌈📡",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "📚 Built on Complex Science LiFi combines optics, quantum physics, and advanced engineering—making it both powerful and hard to fully grasp. 🧠🔢",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      " 🔬 Invisible but Powerful LiFi operates through invisible light pulses at the nano level—faster, safer, and cleaner than Wi-Fi. 💡⚡",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "Measurement changes the system, making it difficult to visualize what's really happening at a microscopic level. 🧐🔬",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "🧐 Light That Reacts Environmental changes can affect LiFi signals—like shadows or reflections—making it a dynamic, adaptive system. 🌐🔁",
  },
];

export const Testimonials = () => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Beyond WiFi:  
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          The Bright Future of LiFi{" "}
        </span>
        Applications
      </h2>
      <br />

      {/* <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"  >
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden " data-aos="fade-right" data-aos-offset="100"  data-aos-duration="500"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
