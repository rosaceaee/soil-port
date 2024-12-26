import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { data, career, others } from "./data";

export const Bottom = ({ onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState({});
  const [up, setUp] = useState(0);
  const [workPosition, setWorkPosition] = useState(-180 * 16);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportH = window.innerHeight;
      const documentH = document.body.scrollHeight;

      const chkBtm = Math.min(0, -130 * 16 + scrollTop);
      setWorkPosition(chkBtm);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // setUp((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
      setUp((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const handleMouseEnter = (e) => {
  //   setIsHovered(true);
  //   onMouseEnter && onMouseEnter(e);
  // };
  const handleMouseEnter = (id, e) => {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
    onMouseEnter && onMouseEnter(e);
  };
  const handleMouseLeave = (id, e) => {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
    onMouseLeave && onMouseLeave(e);
  };

  // const handleMouseLeave = (e) => {
  //   setIsHovered(false);
  //   onMouseLeave && onMouseLeave(e);
  // };

  // nav
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // cursor toggle class
  const cursorClassName = (id) => {
    const base = "allign-r";
    const hoverIt = isHovered[id] ? "cursor-toUp" : "";

    return `${base} ${hoverIt}`.trim();
  };

  const sList = {
    react: "react",
    reactNative: "reactNative",
    js: "js",
    scss: "scss",
    css: "css",
    pug: "pug",
    html: "html",
  };

  return (
    <>
      <article className="container">
        <div className="wrap">
          <section className="info">
            {/* <img src={require("../img/sprout-sm.png")} alt="" /> */}
            <div class="box">
              <div className="row">
                <div className="col bg"></div>
                <div className="col desc">
                  <h1
                    className={cursorClassName("stack1")}
                    onMouseEnter={(e) => handleMouseEnter("stack1", e)}
                    onMouseLeave={(e) => handleMouseLeave("stack1", e)}
                  >
                    ..
                  </h1>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <div className="cont-left">
                    <span className="up">
                      {up === 1 ? "111" : null}
                      {up === 2 ? "222" : null}
                      {up === 3 ? "333" : null}
                    </span>
                    <span>MONO</span>
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
                          나누는 것을 좋아합니다. 새로운 정보와 즐거운 것들을요.
                        </h3>
                        React와 vanilla Js로 웹 퍼블리싱과 프론트작업을 하며
                        중간 역할과 더불어 UIUX개선을 하며 프로젝트를 성공적으로
                        완수하였습니다.
                        <br />
                        혼자만 아는 것보다 스스로의 능력이 사람들에게 도움이
                        되길 바라며 웹 문서의 영한번역에도 기여하고 있습니다.
                        <br />
                        <br />
                        기획자와 디자이너 사이에서 비개발 직군에게도 이해하기
                        쉽게 설명하여 원활한 작업진행에 도움이 되는 것에 보람을
                        느낍니다.
                        <br />
                        인터랙션, 심미성이 높은 UI 구현과 더불어 사용자 경험의
                        향상, 그리고 변화하는 개발 생태계에서 끊임없이 배우며
                        같이 일하고 싶은 개발자가 되고 싶습니다.
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
            </div>

            {/* <img src={require("../img/info.jpeg")} className="pic" alt="" /> */}
          </section>

          <section className="skill" id="skill">
            <div className="curr">
              <ul>
                <li>
                  <p className="tit">frentend dev? tools</p>
                  <p>
                    Javascript(ES6), React, ReactNative, Html5, Pug, Postman,
                    GitHub/GitLab
                  </p>
                </li>
                <li>
                  <p className="tit">UI libraries</p>
                  <p>
                    CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Ant design,
                    Bootstrap.
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
            <div className="interest">python, node.js</div>
          </section>
        </div>
        {/****************** information end *******************/}

        {/****************** works start *******************/}
        <div
          className="fulltest"
          style={{
            bottom: `${workPosition}px`,
          }}
          id="fulltest"
        >
          {/* <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 L 0,225 C 98.75,242.44642857142856 197.5,259.8928571428571 337,253 C 476.5,246.10714285714286 656.7500000000001,214.875 784,171 C 911.2499999999999,127.125 985.5,70.60714285714286 1086,40 C 1186.5,9.39285714285714 1313.25,4.69642857142857 1440,0 L 1440,400 L 0,400 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg> */}
          <h1 style={{ textAlign: "center" }}>작업물</h1>

          <div className="introduce-wrap">
            {/* box1 - works */}
            {/* temp test */}
            {data.career.map((list, index) => {
              return (
                <>
                  <div className="box">
                    <div className="proj-box">
                      <div className="contents">
                        <div className="company-info">
                          <h2>{list.companyName}</h2>
                          <p>
                            {list.date} <br /> {list.totalDate}
                          </p>
                        </div>

                        <ul>
                          <li className="desc-wrapp">
                            <div className="proj-info">
                              {list.projList.map((project) => {
                                return (
                                  <>
                                    <img
                                      src={project.imgUrl}
                                      className="pic"
                                      alt=""
                                    />
                                    <h3 className="txt-proj-name">
                                      {project.projName}
                                    </h3>
                                    <a href={`${project.url}`} target="_blank">
                                      {project.url}
                                    </a>

                                    <div className="proj-info__desc">
                                      {project.desc.map((descItm) => {
                                        return <p>{descItm}</p>;
                                      })}
                                      <div className="label-wrap">
                                        {project.skill.map((skillItm) => {
                                          const chipSkill =
                                            sList[skillItm] || "";
                                          return (
                                            <span
                                              className={`label ${skillItm}`}
                                            >
                                              {chipSkill}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                              {/*  */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/* // */}

            {/* box2 - others: private1 */}
            <div className="box">
              {/* <p>
            2024
          </p> */}
              {/* <div className="date">Others</div> */}
              <div className="proj-box">
                <div className="contents">
                  <div>
                    <h2>개인 프로젝트</h2>
                  </div>
                  <ul>
                    <li className="desc-wrapp">
                      <h3 className="txt-proj-name">ㅇㅇ</h3>
                      <p>
                        가벼운 원페이지로 작업. 숫자 입력하면 단번에 알 수
                        있도록.
                      </p>
                      <p>링크</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                    {data.others[1].projList.map((list, index) => {
                      return (
                        <li className="desc-wrapp others">
                          <h3>{list.projName}</h3>
                          <span className="box-with-link">
                            <p>{list.projName}</p>
                            <a href="" target="_blank">
                              {list.url}
                            </a>
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <ul>
                    <li className="desc-wrapp others">
                      <h3 className="txt-proj-name">
                        regexlearn 한국어 번역 기여
                      </h3>
                    </li>
                    <li>
                      {data.others[2].projList.map((list, index) => {
                        return (
                          <li className="desc-wrapp others">
                            <span className="box-with-link">
                              <p>{list.projName}</p>
                              <span className="box-with-link">
                                <a href="" target="_blank">
                                  {list.url}
                                </a>
                              </span>
                            </span>
                          </li>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* // .projbox */}
          </div>
        </div>
        {/****************** works end *******************/}
      </article>
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className="infoo" onClick={() => scrollToSection("skill")}>
          소개
        </span>

        <span className="infoo" onClick={() => scrollToSection("fulltest")}>
          스킬
        </span>
        <span className="infoo">작업물</span>
        <span>
          <a href="" target="_blank">
            gh
          </a>
        </span>
        <span>
          <a href="" target="_blank">
            mail
          </a>
        </span>
      </nav>
    </>
  );
};
