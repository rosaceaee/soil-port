import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { data, career, others } from "./data";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Bottom = ({ onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState({});
  const [up, setUp] = useState(0);
  const [workPosition, setWorkPosition] = useState(-180 * 16);

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
    figma: "figma",
    adobe: "adobe",
  };

  const boxRef1 = useRef(null);
  const containerRef = useRef(null);
  const navWrapRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const navWrap = navWrapRef.current;
    const elements = container?.querySelectorAll(
      ".wrap p, .wrap h3, .work-con p, .work-container h2,.work-container h3, .work-container p"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (!navWrap) return;

        const navRect = navWrap.getBoundingClientRect();

        entries.forEach((entry) => {
          const elementRect = entry.target.getBoundingClientRect();

          // nav-wrap과의 겹침을 더 엄격하게 계산
          const isIntersecting =
            elementRect.bottom > navRect.top &&
            elementRect.top < navRect.bottom &&
            elementRect.right > navRect.left &&
            elementRect.left < navRect.right &&
            // 요소가 viewport 내에 있는지 확인
            elementRect.top < window.innerHeight &&
            elementRect.bottom > 0;

          entry.target.classList.toggle("cursor-hover", isIntersecting);
        });
      },
      {
        root: null,
        // rootMargin을 nav-wrap의 실제 높이에 맞게 조정
        rootMargin: "-20% 0px -20% 0px", // 위아래 여백을 줄임
        threshold: [0, 1.0], // threshold 값을 단순화
      }
    );

    elements?.forEach((element) => observer.observe(element));

    // 스크롤 이벤트에서도 체크하여 더 부드러운 전환 구현
    const handleScroll = () => {
      if (!navWrap) return;
      const navRect = navWrap.getBoundingClientRect();

      elements?.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const isIntersecting =
          elementRect.bottom > navRect.top &&
          elementRect.top < navRect.bottom &&
          elementRect.right > navRect.left &&
          elementRect.left < navRect.right &&
          elementRect.top < window.innerHeight &&
          elementRect.bottom > 0;

        element.classList.toggle("cursor-hover", isIntersecting);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    let ctx;

    const setAnimation = () => {
      ctx = gsap.context(() => {
        const boxes = gsap.utils.toArray(".ani");
        const isMobile = window.innerWidth < 768;

        boxes.forEach((box) => {
          gsap.fromTo(
            box,
            {
              y: isMobile ? 150 : 300,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: box,
                start: "top bottom",
                end: isMobile ? "top 20%" : "top 5%",
                scrub: true,
              },
            }
          );
        });
      });
    };

    setAnimation();

    const handleResize = () => {
      ctx?.revert();
      setAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx?.revert(); // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(ScrollTrigger.getAll());
  // useEffect(() => {
  //   let mm = gsap.matchMedia();
  //   const boxItems = gsap.context((self) => {
  //     const boxes = self.selector(".ani");
  //     boxes.forEach((box) => {
  //       gsap.from(box, {
  //         y: 300,
  //         opacity: 0,
  //         stagger: 1,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: "top bottom", // 셀렉터로 등록한 요소의 상단이 뷰포트의 바닥에 있을 때 시작
  //           end: "top 5%", // 상단 20프로에서 완료
  //           scrub: true, // 하위요소를 하나씩 순차적으로 하고 싶어서 등록
  //         },
  //       });
  //       gsap.to(box, {
  //         y: 0,
  //         opacity: 0,
  //       });
  //     });
  //   }, boxRef1); // ref 값은 scope로만 등록한다
  //   return () => boxItems.revert(); // clean up
  // }, []); // <- Scope!

  return (
    <>
      <article className="container" ref={containerRef}>
        <div className="wrap" id="top">
          <section className="info">
            {/* <img src={require("../img/sprout-sm.png")} alt="" /> */}
            <div className="box">
              <div className="row">
                <div className="col bg"></div>
                <div className="col desc">
                  <h1
                    className={cursorClassName("stack1")}
                    onMouseEnter={(e) => handleMouseEnter("stack1", e)}
                    onMouseLeave={(e) => handleMouseLeave("stack1", e)}
                  >
                    .
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
                              <li className="desc-wrapp" ref={boxRef1}>
                                {list.projList.map((project) => {
                                  return (
                                    <>
                                      <div
                                        className="proj-info ani"
                                        key={index}
                                      >
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
                          {data.others[1].projList.map((list, index) => {
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
                          {data.others[2].projList.map((list, index) => {
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

      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="nav-wrap" ref={navWrapRef}>
          <span className="wrap">
            <span onClick={() => scrollToSection("top")}>소개</span>
            <span onClick={() => scrollToSection("skill")}>Stack</span>
            <span onClick={() => scrollToSection("work-container")}>Works</span>
          </span>

          <span style={{ marginLeft: "auto", display: "block" }}>
            <a href="" target="_blank">
              gh
            </a>
          </span>
          <span>
            <a href="" target="_blank">
              mail
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};
