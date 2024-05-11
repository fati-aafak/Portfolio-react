import "./about.css";
import CV from "../../mycv.pdf";

import Heading from "../../components/headingText/heading";
import Card from "../../UI/card";
import Tools from "../../components/tools/tools";
import Services from "../../components/specialization/service";
// data
import { experience } from "../../data/Data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  
  return (
    <>
      <section className="About">
        <Heading title={"About"} titlePrimary={"me"}></Heading>

        <div className="container about-container">
          <div className="about-left">
            <h3>{`I'm AAFAK FATIMA ZAHRA`}</h3>
            <p>
            "Welcome to my portfolio! I'm a passionate full-stack developer and UI/UX designer, dedicated to crafting seamless digital experiences. With a blend of creativity and technical expertise, I strive to bring ideas to life through elegant design and robust development. Explore my work and let's collaborate to transform visions into reality."
            </p>
            
            <a href={CV} download className="btn-nav">
              Download CV
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} className={"expernce-card"}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Services />
    </>
  );
};

export default About;
