import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Landing,
  Languages,
  LanguageCard,
  Video,
  Processes,
  ProcessCard,
  FinalGreetings,
} from "./styles";
import { Btn } from "../../styles/Btn";
import step1 from "/landing/step1.svg";
import step2 from "/landing/step2.svg";
import step3 from "/landing/step3.svg";
import step4 from "/landing/step4.svg";
import head from "/landing/head.svg";

type Process = {
  image: string;
  title: string;
  description: string;
}[];

function LandingPage() {
  const navigate = useNavigate();

  const processes: Process = [
    {
      image: step1,
      title: "Fill out Profile and plan study plan",
      description: "Fill out Profile and plan study plan",
    },
    {
      image: step2,
      title: "Search and select exchange languages",
      description: "Search and select exchange languages",
    },
    {
      image: step3,
      title: "Submit your request to the other people",
      description: "Submit your request to the other people",
    },
    {
      image: step4,
      title: "Match successful!!",
      description: "You can start exchange now!!",
    },
  ];

  return (
    <Wrapper>
      <Landing>
        <div>
          <div>
            <h1>{"Explore languages, Connect the world."}</h1>
            <p>
              {
                "Mutual learning to break language barriers, creating a borderless communication platform that makes language learning easy and fun. "
              }
            </p>
            <Btn $style={"primary"} onClick={() => navigate("/home/index")}>
              JOIN NOW
            </Btn>
          </div>
          <div>
            <div>
              <img src={head} alt="Landing Image" />
            </div>
          </div>
        </div>
      </Landing>
      <Languages>
        <div>
          <div>
            <h2>{"Popular languages"}</h2>
            <p>{"Explore the world's most popular languages."}</p>
          </div>
          <div>
            <LanguageCard>
              <h4>{"English"}</h4>
              <p>
                {"1234"} <span>{"posts"}</span>
              </p>
            </LanguageCard>
          </div>
        </div>
      </Languages>
      <Video>
        <div>
          <div>
            <h2>{"Ｗatch Our Intro Video"}</h2>
            <p>{"Grasp website design and concept."}</p>
          </div>
          <div>
            <iframe
              width="857"
              height="499"
              src="https://youtu.be/EGgwwdxys7o"
              title="Promotion Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Video>
      <Processes>
        <div>
          <div>
            <h2>{"Website Tutorial Process"}</h2>
            <div>
              {processes.map((item, index) => (
                <ProcessCard key={index}>
                  <div>
                    <img src={item.image} alt={item.description} />
                  </div>
                  <div>
                    <div>
                      <p>{index + 1}</p>
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                </ProcessCard>
              ))}
            </div>
          </div>
        </div>
      </Processes>
      <FinalGreetings>
        <div>
          <div>
            <p>Ready to join the exchange?</p>
            <p>Expand your world through language.</p>

            <div>
              <Btn $style={"primary"} onClick={() => navigate("/home/index")}>
                JOIN US NOW <span>→</span>
              </Btn>
            </div>
          </div>
        </div>
      </FinalGreetings>
    </Wrapper>
  );
}

export default LandingPage;
