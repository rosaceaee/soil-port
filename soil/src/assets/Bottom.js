import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "./useLang";
import {
  scrollToSection,
  handleMouseEnter,
  handleMouseLeave,
  cursorClassName,
  useNavWithBlurEffect,
  useAnimateBoxes,
  DrawLinesNavElem,
} from "../utills/UiEffect";
import { data, career, others } from "./data";

gsap.registerPlugin(ScrollTrigger);

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

  // lang
  const ChangeLangBtn = ({ changeLanguage }) => {
    // const { changeLanguage } = useLang();
    return (
      <>
        <button className="lang-btn" onClick={() => changeLanguage("ko")}>
          11
        </button>
        <button className="lang-btn" onClick={() => changeLanguage("ja")}>
          111
        </button>
      </>
    );
  };
  // lang end

  return (
    <>
      <article className="container" ref={containerRef}>
        <DrawLinesNavElem />
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
                  <div className="cont-left">
                    <span className="up">
                      {up === 1 ? "자주적인" : null}
                      {up === 2 ? "호기심 많은" : null}
                      {up === 3 ? "" : null} <span>MONO</span>
                    </span>
                  </div>
                  <div className="cont-right">
                    <div className="col desc">
                      <span>
                        {/* 他には
                        「自分のスキルで他人に役に立つプロダクトを作る」を目指しています。
                        ですので、ユーザー目線で重視しつつ仕上げしたいと思います。
                        <br />
                        なお、学習者のため勉強しやすくするためにウェブサイトの翻訳にも興味があって、
                        こんちゅりびゅーとしてます。 */}
                        <h3>
                          새로운 정보와 즐거운 것들을 같이 경험하는 것을
                          좋아합니다.
                        </h3>
                        <p>
                          React와 Js로 웹 퍼블리싱과 프론트작업을 하며 중간
                          역할과 더불어 UIUX개선을 하며 프로젝트를 성공적으로
                          완수하였습니다.
                        </p>
                        <p>
                          혼자만 아는 것보다 스스로의 능력이 사람들에게 도움이
                          되길 바라며 웹 문서의 영한번역에도 기여하고 있습니다.
                        </p>
                        <p>
                          기획자와 디자이너 사이에서 비개발 직군에게도 이해하기
                          쉽게 설명하여 원활한 작업진행에 도움이 되는 것에
                          보람을 느낍니다.
                        </p>
                        <p>
                          인터랙션, 심미성이 높은 UI 구현과 더불어 사용자 경험의
                          향상, 그리고 변화하는 개발 생태계에서 끊임없이 배우며
                          같이 일하고 싶은 개발자가 되고 싶습니다.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <h1
                    className={isHovered["stack111"] ? "cursor-hover" : ""}
                    onMouseEnter={(e) => handleMouseEnter("stack111", e)}
                    onMouseLeave={(e) => handleMouseLeave("stack111", e)}
                  >
                    Stack
                  </h1>
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
                          <p className="tit">frentend dev? tools</p>
                          <p>
                            Javascript(ES6), React, ReactNative, Html5, Pug,
                            Postman, GitHub/GitLab
                          </p>
                        </li>
                        <li>
                          <p className="tit">UI libraries</p>
                          <p>
                            CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Ant
                            design, Bootstrap.
                          </p>
                        </li>
                        <li>
                          <p className="tit">design tools</p>
                          <p>Figma, Adobe products </p>
                        </li>
                        <li>
                          <p className="tit">Interested in...</p>
                          <p>Python, </p>
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

            {/* <img src={require("../img/info.jpeg")} className="pic" alt="" /> */}
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
                                        <a
                                          href={`${project.url}`}
                                          target="_blank"
                                        >
                                          링크
                                        </a>

                                        <div className="proj-info__desc">
                                          {project.desc.map(
                                            (descItm, index) => {
                                              return (
                                                <p key={index}>{descItm}</p>
                                              );
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
            <div className="row">
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
                          <h3 className="txt-proj-name">ㅇㅇ</h3>
                          <p>노년층을 대상으로 싱글 페이지로 작업함</p>
                          <p>링크</p>
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
                          {currentData.others[1].projList.map((list, index) => {
                            return (
                              <a
                                className="box-with-link"
                                href={`${list.url}`}
                                target="_blank"
                              >
                                <button>{list.projName}</button>
                              </a>
                            );
                          })}
                        </li>
                        <li>
                          <h3 className="txt-proj-name">
                            regexlearn 한국어 번역 기여
                          </h3>
                        </li>
                        <li className="desc-wrapp otherWork">
                          {currentData.others[2].projList.map((list, index) => {
                            return (
                              <a
                                className="box-with-link"
                                href={`${list.url}`}
                                target="_blank"
                              >
                                <button>{list.projName}</button>
                              </a>
                            );
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
            {/* // .projbox */}
          </div>
        </div>
        {/****************** works end *******************/}
      </article>

      <nav
        ref={navWrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="nav-wrap">
          <span className="wrap">
            <span onClick={() => scrollToSection("top")}>소개</span>
            <span onClick={() => scrollToSection("skill")}>Stack</span>
            <span onClick={() => scrollToSection("work-container")}>Works</span>
          </span>

          <ChangeLangBtn changeLanguage={changeLanguage} />
          <span style={{ marginLeft: "auto", display: "block" }}>
            <a href="" target="_blank">
              gh
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};
