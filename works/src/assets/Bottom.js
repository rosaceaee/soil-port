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
        <div className="nav-wrap">
          <span className="wrap">
            {/* <span onClick={() => detectScroll("top")}>인사</span> */}
            <span onClick={() => detectScroll("work-container")}>works</span>
            <span onClick={() => detectScroll("private-works")}>other</span>
          </span>
          <span style={{ marginLeft: "auto" }}>
            {
              <ChangeLangBtn
                changeLanguage={changeLanguage}
                currentLanguage={language}
              />
            }
          </span>
        </div>

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

export const Bottom = () => {
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
      <article className="container" ref={containerRef}>
        <div className="wrap" id="top">
          <section className="info">
            {/* <img src={require("../img/sprout-sm.png")} alt="" /> */}

            <div className="box">
              <div className="row">
                <div className="col bg"></div>
                <div className="col desc">
                  <h1
                    className={cursorClassName("stack1", isHovered)}
                    onMouseEnter={(e) => onMouseEnter("stack1", e)}
                    onMouseLeave={(e) => onMouseLeave("stack1", e)}
                  >
                    .asdf
                  </h1>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc center">
                  <div className="cont-right">
                    <div className="col desc">
                      <span>
                        {/* 他には
                        「自分のスキルで他人に役に立つプロダクトを作る」を目指しています。
                        ですので、ユーザー目線で重視しつつ仕上げしたいと思います。
                        <br />
                        なお、学習者のため勉強しやすくするためにウェブサイトの翻訳にも興味があって、
                        こんちゅりびゅーとしてます。 */}
                        <h3 style={{ textAlign: "right" }}>
                          {currentData.header[0]}
                        </h3>
                        <p>{currentData.header[1]}</p>
                        <p>{currentData.header[2]}</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  {/* <h1
                    className={
                      isHovered["stack111"] ? "sec-title cursor-hover" : ""
                    }
                    onMouseEnter={(e) => handleMouseEnter("stack111", e)}
                    onMouseLeave={(e) => handleMouseLeave("stack111", e)}
                  > */}
                  <h1 className="sec-title">Skills</h1>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <section className="skill" id="skill">
                    <div className="curr">
                      <ul>
                        <li>
                          <p className="tit">FE</p>
                          <p>
                            Javascript(ES6), React, Html5, Pug, Postman,
                            GitHub/GitLab
                          </p>
                        </li>
                        <li>
                          <p className="tit">UI libraries</p>
                          <p>
                            CSS3/SASS, Tailwind, Styled Components, Ant design,
                            Bootstrap.
                          </p>
                        </li>
                        <li>
                          <p className="tit">Design tools</p>
                          <p>Figma, Adobe products </p>
                        </li>
                        <li>
                          <p className="tit">Interested in...</p>
                          <p>python </p>
                        </li>
                        <li>
                          <p className="tit">Also available...</p>
                          <p>English, 日本語 </p>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </section>
        </div>
        {/****************** information end *******************/}

        {/****************** works start *******************/}
        <div
          className="work-container"
          // style={{
          //   bottom: `${workPosition}px`,
          // }}
          id="work-container"
        >
          <div className="row tit-box">
            <dlv className="col"></dlv>
            <div className="col desc">
              <h1 className="tit">Works</h1>
            </div>
            <dlv className="col"></dlv>
          </div>
          <div className="introduce-wrap">
            {/* box1 - works */}
            <div className="row">
              <div className="col"></div>
              <div className="col">
                {currentData.career.map((list, index) => {
                  return (
                    <>
                      <div className="box" key={index}>
                        <div className="proj-box">
                          <div className="contents">
                            <div className="company-info">
                              <h2>{list.companyName}</h2>
                              <p>
                                {list.date} <br /> {list.totalDate}
                              </p>
                            </div>

                            <ul>
                              <li className="desc-wrapp" ref={boxRef1}>
                                {list.projList.map((project, indx) => {
                                  return (
                                    <>
                                      <div className="proj-info ani" key={indx}>
                                        <img
                                          src={project.imgUrl}
                                          className="pic"
                                          alt=""
                                        />
                                        <h3 className="txt-proj-name">
                                          {project.projName}
                                        </h3>

                                        <div className="proj-info__desc">
                                          {project.desc.map(
                                            (descItm, index) => {
                                              return descItm ? (
                                                <p key={index}>{descItm}</p>
                                              ) : null;
                                            }
                                          )}

                                          <div className="label-wrap">
                                            {project.skill.map(
                                              (skillItm, index) => {
                                                const chipSkill =
                                                  sList[skillItm] || "";
                                                return (
                                                  <span
                                                    key={index}
                                                    className={`label ${skillItm}`}
                                                  >
                                                    {chipSkill}
                                                  </span>
                                                );
                                              }
                                            )}
                                          </div>

                                          <a
                                            href={`${project.url}`}
                                            className="link"
                                            target="_blank"
                                          >
                                            <svg
                                              width="25px"
                                              height="25px"
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
                                          </a>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </li>
                            </ul>
                            {/* //.contents */}
                          </div>
                          {/* //.proj-box */}
                        </div>
                        {/* //.box */}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col"></div>
            </div>
            {/* // */}
            {/* box2 - others */}
            <div className="row tit-box">
              <dlv className="col"></dlv>
              <div className="col desc">
                <h1 className="">Others</h1>
              </div>
              <dlv className="col"></dlv>
            </div>
            <div className="row private-works" id="private-works">
              <div className="col"></div>
              <div className="col">
                <div className="box">
                  <div className="proj-box">
                    <div className="contents">
                      <div>
                        <h2>개인 프로젝트</h2>
                      </div>
                      <ul>
                        <li className="desc-wrapp">
                          <h3 className="txt-proj-name">
                            {currentData.others[0].projName}
                          </h3>
                          <p>
                            노년층을 대상으로 싱글 페이지로 작업함
                            <br />
                            React
                          </p>
                          <p>
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
                          </p>
                        </li>
                        <li className="desc-wrapp">
                          <h3 className="txt-proj-name">
                            {currentData.others[1].projName}
                          </h3>
                          <p>
                            실시간 환율 크롤링 페이지. <br />
                            React, Node.js
                          </p>
                          <p>
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
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
            {/* // */}
            {/* box3 - others */}
            <div className="row others">
              <div className="col"></div>
              <div className="col">
                {/* box3 - others: private2 ; contribution */}
                <div className="box">
                  {/* <div className="date">Others</div> */}
                  <div className="proj-box">
                    <div className="contents">
                      <div>
                        <h2>Others </h2>
                      </div>
                      <ul>
                        <li>
                          <h3 className="txt-proj-name">
                            MDN 웹 문서 영한번역 기여
                          </h3>
                        </li>
                        <li className="desc-wrapp otherWork">
                          {currentData.others[2].projList.map((list, index) => {
                            return (
                              <a
                                className={`box-with-link ${index}`}
                                href={`${list.url}`}
                                target="_blank"
                              >
                                <button>
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
                        </li>

                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <h3 className="txt-proj-name">
                            regexlearn 한국어 번역 기여
                          </h3>
                          {currentData.others[1].projList.map((list, index) => {
                            return (
                              <a
                                className={`box-with-link ${index}`}
                                href={`${list.url}`}
                                target="_blank"
                              >
                                <svg
                                  width="25px"
                                  height="25px"
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
                            );
                          })}
                        </li>
                        <li className="desc-wrapp otherWork"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
            {/* // .projbox */}
            <div className="row last-box">
              <div />
              <span>
                Contact
                <h2>corydalisss@gmail.com</h2>
              </span>

              <div />
            </div>
          </div>
        </div>
        {/****************** works end *******************/}
      </article>
    </>
  );
};
