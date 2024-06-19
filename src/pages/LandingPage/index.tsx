import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";
import apiBase from "../../Api";
import { RootStateType } from "../../../redux";
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

type Language = {
  Name: string;
  Count: number;
  LanguageId: number;
};

function LandingPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const lang = useSelector((state: RootStateType) => state.i18n.language);

  //* processes intro
  const processes: Process = [
    {
      image: step1,
      title: t("process_step_1"),
      description: t("process_step_1"),
    },
    {
      image: step2,
      title: t("process_step_2"),
      description: t("process_step_2"),
    },
    {
      image: step3,
      title: t("process_step_3"),
      description: t("process_step_3"),
    },
    {
      image: step4,
      title: t("process_step_4"),
      description: t("process_step_4"),
    },
  ];

  const [languageList, setLanguageList] = useState<Language[]>([]);

  //* get popular languages
  async function getLanguageList() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      await axios({
        method: "GET",
        url: `${apiBase.GET_HOT_LANGUAGE}`,
        headers: headers,
      })
        .then((res) => setLanguageList(res.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  function handleClick(id: number) {
    navigate(`/home/index`, {
      state: { languageId: languageList[id].LanguageId },
    });
  }

  useEffect(() => {
    getLanguageList();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Wrapper>
      <Landing>
        <div>
          <div>
            <h1>{t("landing_title")}</h1>
            <p>{t("landing_describe")}</p>
            <Btn $style={"primary"} onClick={() => navigate("/home/index")}>
              {t("landing_button")}
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
            <h2>{t("language_title")}</h2>
            <p>{t("language_describe")}</p>
          </div>
          <div>
            {languageList.map((item, index) =>
              index < 8 ? (
                <LanguageCard key={index} onClick={() => handleClick(index)}>
                  <h4>{item.Name}</h4>
                  <p>
                    {item.Count} <span>{t("language_posts")}</span>
                  </p>
                </LanguageCard>
              ) : null
            )}
          </div>
        </div>
      </Languages>
      <Video>
        <div>
          <div>
            <h2>{t("video_title")}</h2>
            <p>{t("video_describe")}</p>
          </div>
          <div>
            <iframe
              width="857"
              height="499"
              src="https://www.youtube.com/embed/IvxU3vzBAVw?si=iO41h9YHqutL7vCi?autoplay=1&mute=1&loop=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Video>
      <Processes>
        <div>
          <div>
            <h2>{t("process_title")}</h2>
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
            <p>{t("last_title")}</p>
            <p>{t("last_describe")}</p>

            <div>
              <Btn $style={"primary"} onClick={() => navigate("/home/index")}>
                {t("last_button")} <span>→</span>
              </Btn>
            </div>
          </div>
        </div>
      </FinalGreetings>
    </Wrapper>
  );
}

export default LandingPage;
