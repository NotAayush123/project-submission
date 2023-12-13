import FAQ from "../components/Home/FAQ";
import { Footer } from "../components/Footer";
import HomeHero from "../components/Home/HomeHero";
import Mission from "../components/Home/Mission";
import { Reviews } from "../components/Home/Reviews";

import { Stats } from "../components/Home/Stats";
import TimeEvent from "../components/Home/Timeline";
import Reminder from "../components/Home/Reminder";
import classes from "../components/Home/Stats.module.css";
import Chatbot from "../components/Chatbot";
import CallToActionSection from "../components/Home/CallToActionSection";
import Organizations from "../components/Home/Organizations";
export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Reminder />
      <Chatbot />
      <HomeHero />
      <Stats />
      <div className={classes.mission}>
        <Mission />
      </div>
      <div className={classes.timeEvent}>
        <TimeEvent />
      </div>
      <Organizations />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ zIndex: "-1" }}
      >
        <path
          fill=" #fdba74"
          fill-opacity="1"
          style={{ zIndex: "-1" }}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className={classes.mb}>
        <div className={classes.FAQ}>
          <FAQ />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" #fdba74"
            fill-opacity="1"
            d="M0,96L26.7,101.3C53.3,107,107,117,160,149.3C213.3,181,267,235,320,234.7C373.3,235,427,181,480,170.7C533.3,160,587,192,640,192C693.3,192,747,160,800,170.7C853.3,181,907,235,960,250.7C1013.3,267,1067,245,1120,229.3C1173.3,213,1227,203,1280,186.7C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className={classes.reviews}>
        <Reviews />
      </div>

      <CallToActionSection />

      <Footer />
    </div>
  );
}
