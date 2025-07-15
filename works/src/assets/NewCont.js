import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "./useLang";
import {
  handleMouseEnter,
  handleMouseLeave,
  cursorClassName,
  useNavWithBlurEffect,
  useAnimateBoxes,
  DrawLinesNavElem,
  scrollIt,
} from "../utills/UiEffect";
import { SvgLink } from "./SvgLink";
import { data, career, others } from "./data";
import { Row, Col } from "../compo/Frame";

gsap.registerPlugin(ScrollTrigger);

// lang
const ChangeLangBtn = ({ changeLanguage }) => {
  const [activeLanguage, setActiveLanguage] = useState("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setActiveLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <>
      <button
        className={`lang-btn ${activeLanguage === "ko" ? "active" : ""}`}
        onClick={() => handleLanguageChange("ko")}
      >
        ko
      </button>
      <button
        className={`lang-btn ${activeLanguage === "ja" ? "active" : ""}`}
        onClick={() => handleLanguageChange("ja")}
      >
        ja
      </button>
    </>
  );
};
// lang end

// nav
const NavElem = React.memo(
  ({
    navWrapRef,
    onMouseEnter,
    onMouseLeave,
    scrollIt,
    changeLanguage,
    language,
  }) => {
    const detectScroll = useCallback(
      (sectionId) => {
        scrollIt(sectionId);
      },
      [scrollIt]
    );

    return (
      <nav ref={navWrapRef}>
        <ul className="nav-wrap">
          <li className="wrap">
            {/* <span onClick={() => detectScroll("top")}>인사</span> */}
            <span onClick={() => detectScroll("work-container")}>works</span>
            <span onClick={() => detectScroll("private-works")}>other</span>
          </li>
          <li style={{ marginLeft: "auto" }}>
            {
              <ChangeLangBtn
                changeLanguage={changeLanguage}
                currentLanguage={language}
              />
            }
          </li>
        </ul>

        <span className="btn-top" onClick={() => detectScroll("top")}>
          <svg
            width="70px"
            height="70px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.4"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#926b6a"
              ></path>{" "}
              <path
                d="M15.5295 10.9699L12.5295 7.96994C12.2395 7.67994 11.7595 7.67994 11.4695 7.96994L8.46945 10.9699C8.17945 11.2599 8.17945 11.7399 8.46945 12.0299C8.75945 12.3199 9.23945 12.3199 9.52945 12.0299L11.2495 10.3099V15.4999C11.2495 15.9099 11.5895 16.2499 11.9995 16.2499C12.4095 16.2499 12.7495 15.9099 12.7495 15.4999V10.3099L14.4695 12.0299C14.6195 12.1799 14.8095 12.2499 14.9995 12.2499C15.1895 12.2499 15.3795 12.1799 15.5295 12.0299C15.8195 11.7399 15.8195 11.2599 15.5295 10.9699Z"
                fill="#926b6a"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </nav>
    );
  }
);

const NewCont = () => {
  const [isHovered, setIsHovered] = useState({});
  const [up, setUp] = useState(0);
  // const [workPosition, setWorkPosition] = useState(-180 * 16);
  const { currentData, language, changeLanguage } = useLang();

  const boxRef1 = useRef(null);
  const containerRef = useRef(null);
  const navWrapRef = useRef(null);

  useNavWithBlurEffect(containerRef, navWrapRef);
  useAnimateBoxes(gsap);

  useEffect(() => {
    const interval = setInterval(() => {
      // setUp((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
      setUp((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onMouseEnter = (id, e) => {
    handleMouseEnter(id, e, setIsHovered);
  };

  const onMouseLeave = (id, e) => {
    handleMouseLeave(id, e, setIsHovered);
  };

  const sList = {
    react: "react",
    reactNative: "reactNative",
    js: "js",
    scss: "scss",
    css: "css",
    pug: "pug",
    html: "html",
    figma: "figma",
    adobe: "adobe",
  };

  return (
    <>
      <NavElem
        scrollIt={scrollIt}
        navWrapRef={navWrapRef}
        changeLanguage={changeLanguage}
      />

      <section class="container" ref={containerRef}>
        <div class="wrap info" id="top">
          <div class="box left">
            <h3>{currentData.header[0]}</h3>
            <span>
              {/* <p class="txt">{currentData.header[1]}</p> <br /> */}
              <ul>
                {currentData.header.map((item, index) => (
                  <li key={index}>
                    {index >= 2 ? (
                      <span style={{ marginTop: 0 }}>{item}</span>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </span>
          </div>

          {/* <div class="box right"></div> */}
        </div>

        <div class="wrap scnd" id="work-container">
          <h1 className="div-title">Works</h1>

          {currentData.career.map((list, index) => {
            return (
              <>
                <section class="career-div">
                  <div class="tit">
                    <h3 class="title">{list.companyName}</h3>
                  </div>

                  <ul class="list-wrap">
                    {list.projList.map((project, indx) => {
                      return (
                        <>
                          <li>
                            <div class="card-wrap ani ">
                              <div class="card ">
                                <ul class="list-desc">
                                  <li class="">
                                    <img
                                      src={project.imgUrl}
                                      className="pic"
                                      alt=""
                                    />
                                    <div class="proj-name-wrap">
                                      <p class="proj-name">
                                        {project.projName}
                                      </p>
                                      <a href={project.url} target="_blank">
                                        <SvgLink />
                                      </a>
                                    </div>
                                  </li>
                                  <li>
                                    {project.desc.map((descItm, index) => {
                                      return descItm ? (
                                        <p class="txt" key={index}>
                                          {descItm}
                                        </p>
                                      ) : null;
                                    })}
                                  </li>
                                </ul>

                                <div className="skill-wrap">
                                  {project.skill.map((skillItm, index) => {
                                    const chipSkill = sList[skillItm] || "";
                                    return (
                                      <span
                                        key={index}
                                        className={`chip ${skillItm}`}
                                      >
                                        {chipSkill}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </section>
              </>
            );
          })}

          {/* // */}
        </div>

        {/* // wrap scnd */}

        <div class="wrap others" id="private-works">
          <h1 className="div-title">Others</h1>

          <ul class="list-wrap">
            <li>
              <div class="card-wrap">
                <div class="card">
                  <ul class="list-desc">
                    {/* <li>
                      <div class="link-wrap">
                        <h3 class="tit">{currentData.others[0].projName}</h3>

                        <a
                          href="https://rosaceaee.github.io/log-sapjil/"
                          target="_blank"
                        >
                          <SvgLink />
                        </a>
                      </div>

                      <div class="desc">
                        노년층의 기초 영어학습에 도움을 주고자 제작.
                        <div class="skill-wrap">
                          <span class="chip react">react</span>
                          <span class="chip scss">scss</span>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <h3 class="tit">MDN 영한번역 기여</h3>
                      <div class="btn-wrap">
                        {currentData.others[2].projList.map((list, index) => {
                          return (
                            <a
                              className={`box-with-link ${index}`}
                              href={`${list.url}`}
                              target="_blank"
                            >
                              <button type="button">
                                {list.projName}
                                <SvgLink />
                              </button>
                            </a>
                          );
                        })}
                      </div>
                    </li>

                    <li>
                      <div class="link-wrap">
                        <h3 class="tit">{currentData.others[3].projName}</h3>

                        <a href={currentData.others[3].url} target="_blank">
                          <SvgLink />
                        </a>
                      </div>

                      <div class="desc">{currentData.others[3].desc}</div>
                    </li>

                    {/* <li>
                      <div class="link-wrap">
                        <h3 class="tit">{currentData.others[1].projName}</h3>

                        <a
                          href="https://rosaceaee.github.io/log-sapjil/"
                          target="_blank"
                        >
                          <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <g clip-path="url(#clip0_429_11072)">
                                {" "}
                                <path
                                  d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999"
                                  stroke="#fff"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M9 14.9999L20 3.99994"
                                  stroke="#fff"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M15 3.99994H20V8.99994"
                                  stroke="#fff"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                              </g>{" "}
                              <defs>
                                {" "}
                                <clipPath id="clip0_429_11072">
                                  {" "}
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                  ></rect>{" "}
                                </clipPath>{" "}
                              </defs>{" "}
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div class="desc">환율 크롤링 페이지</div>
                      <div class="skill-wrap">
                        <span class="chip react">react</span>
                        <span class="chip scss">node.js</span>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          {/* // */}
        </div>
        {/* // wrap others */}
      </section>
    </>
  );
};

export default NewCont;
