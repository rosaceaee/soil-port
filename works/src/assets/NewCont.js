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
        <div class="wrap info">
          <div class="box left">
            <h3>{currentData.header[0]}</h3>
            <span>
              <p class="txt">{currentData.header[1]}</p>
              <p class="txt">{currentData.header[2]}</p>
              <p class="txt">desc11111</p>
              <p class="txt">
                勺子 筷子 叉子 shao, kuai, cha 勺子 筷子 叉子ddd
              </p>
            </span>
          </div>

          <div class="box right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 24"
              height="24"
              width="25"
              class="tanuki-logo"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#E24329"
                d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                class="tanuki-shape tanuki"
              ></path>
              <path
                fill="#FC6D26"
                d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                class="tanuki-shape right-cheek"
              ></path>
              <path
                fill="#FCA326"
                d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                class="tanuki-shape chin"
              ></path>
              <path
                fill="#FC6D26"
                d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                class="tanuki-shape left-cheek"
              ></path>
            </svg>
          </div>
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
                            <div class="card-wrap">
                              <div class="card">
                                <ul class="list-desc">
                                  <li>
                                    <img
                                      src={project.imgUrl}
                                      className="pic"
                                      alt=""
                                    />
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
                                <div class="btn-wrap">
                                  <button type="button">이동</button>
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
          <h1 className="div-title">Private works</h1>

          <ul class="list-wrap">
            <li>
              <div class="card-wrap">
                <div class="card">
                  <ul class="list-desc">
                    <li>
                      <div class="link-wrap">
                        <h3>{currentData.others[0].projName}</h3>

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

                      <div class="desc">
                        영어학습페이지 desc 영어학습페이지 desc 영어학습페이지
                        desc 영어학습페이지 desc 영어학습페이지 desc
                        영어학습페이지 desc
                      </div>
                    </li>
                    <li>
                      <div class="link-wrap">
                        <h3>{currentData.others[1].projName}</h3>

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
                      <div class="desc">영어학습페이지 desc</div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          {/* // */}
        </div>
        {/* // wrap others */}

        <div class="wrap others trans">
          <h1 className="div-title">Others</h1>
          <ul class="list-wrap">
            <li>
              <div class="card-wrap">
                <div class="card">
                  <ul class="list-desc">
                    <li>
                      <h3>MDN 영한번역 기여</h3>
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
                                <svg
                                  width="30px"
                                  height="30px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
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
                                        stroke="#926b6a"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>{" "}
                                      <path
                                        d="M9 14.9999L20 3.99994"
                                        stroke="#926b6a"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>{" "}
                                      <path
                                        d="M15 3.99994H20V8.99994"
                                        stroke="#926b6a"
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
                              </button>
                            </a>
                          );
                        })}
                      </div>
                    </li>
                    <li>
                      <h3>Regexlearn 한국어 번역 교정</h3>
                      {currentData.others[1].projList.map((list, index) => {
                        return (
                          <a
                            className={`box-with-link ${index}`}
                            href={`${list.url}`}
                            target="_blank"
                          >
                            <button type="button">
                              {list.projName}
                              <svg
                                width="30px"
                                height="30px"
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
                                      stroke="#926b6a"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>{" "}
                                    <path
                                      d="M9 14.9999L20 3.99994"
                                      stroke="#926b6a"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>{" "}
                                    <path
                                      d="M15 3.99994H20V8.99994"
                                      stroke="#926b6a"
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
                            </button>
                          </a>
                        );
                      })}
                    </li>
                  </ul>
                </div>

                {/* // */}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewCont;
