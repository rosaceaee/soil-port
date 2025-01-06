import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { data, career, others } from "./data";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Temp = ({ onMouseEnter, onMouseLeave }) => {
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

  useEffect(() => {
    const setAnimation = () => {
      const boxItems = gsap.context((self) => {
        const boxes = self.selector(".ani");
        const isMobile = window.innerWidth < 768;

        boxes.forEach((box) => {
          gsap.from(box, {
            y: isMobile ? 150 : 300,
            opacity: 0,
            stagger: isMobile ? 0.5 : 1,
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: isMobile ? "top 20%" : "top 5%",
              scrub: true,
            },
          });
          gsap.to(box, {
            y: 0,
            opacity: 0,
          });
        });
      }, boxRef1);

      return boxItems;
    };

    let boxItems = setAnimation();

    const handleResize = () => {
      boxItems.revert();
      boxItems = setAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      boxItems.revert();
    };
  }, []);

  const navWrapRef = useRef(null);

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     const elements = container?.querySelectorAll(".wrap *, .work-con *");

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           entry.target.classList.toggle("cursor-hover", entry.isIntersecting);
  //         });
  //       },
  //       {
  //         root: null,
  //         rootMargin: "0px",
  //         threshold: 0,
  //         // nav-wrap을 intersection root로 지정
  //         root: navWrapRef.current,
  //       }
  //     );

  //     elements?.forEach((element) => observer.observe(element));

  //     return () => elements?.forEach((element) => observer.unobserve(element));
  //   }, []);

  useEffect(() => {
    const container = containerRef.current;
    const navWrap = navWrapRef.current;
    const elements = container?.querySelectorAll(".wrap p, .work-con p");

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

  return (
    <>
      <article className="container" ref={containerRef}>
        <div className="wrap">
          <section className={isHovered ? "info " : "info cursor-hover"}>
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
                      {up === 1 ? "" : null}
                      {up === 2 ? " 많은" : null}
                      {up === 3 ? "" : null} <span>MONO</span>
                    </span>
                  </div>
                  <div className="cont-right">
                    <div className="col desc">
                      <span>1</span>
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
                          <p className="tit">1111</p>
                          <p>1111</p>
                        </li>
                        <li>
                          <p className="tit">2213124</p>
                          <p>11111</p>
                        </li>
                        <li>
                          <p className="tit">2213124 tools</p>
                          <p>2213124 </p>
                        </li>
                        <li>
                          <p className="tit">2213124 in...</p>
                          <p>2213124, </p>
                        </li>
                        <li>
                          <p className="tit">2213124 2213124...</p>
                          <p>2213124, 2213124 </p>
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
              <h1 className="">Works</h1>
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
                              <h2>asdf</h2>
                              <p>
                                {list.date} <br /> {list.totalDate}
                              </p>
                            </div>

                            <ul ref={boxRef1}>
                              <li className="desc-wrapp ani">
                                {list.projList.map((project) => {
                                  return (
                                    <>
                                      <div className="proj-info">
                                        <h3 className="txt-proj-name">
                                          2213124
                                        </h3>
                                        <a
                                          href={`${project.url}`}
                                          target="_blank"
                                        >
                                          2213124
                                        </a>

                                        <div className="proj-info__desc">
                                          {project.desc.map(
                                            (descItm, index) => {
                                              return (
                                                <p key={index}>dddddddd</p>
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
                                                    2213124
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
                        <h2>2213124 2213124</h2>
                      </div>
                      <ul>
                        <li className="desc-wrapp">
                          <h3 className="txt-proj-name">ㅇㅇ</h3>
                          <p>2213124</p>
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
                          <h3 className="txt-proj-name">2213124</h3>
                        </li>
                        {data.others[1].projList.map((list, index) => {
                          return (
                            <li className="desc-wrapp otherWork">
                              <h3>{list.projName}</h3>
                              <a
                                className="box-with-link"
                                href=""
                                target="_blank"
                              >
                                2213124
                              </a>
                            </li>
                          );
                        })}
                        <li>
                          <h3 className="txt-proj-name">2213124</h3>
                        </li>
                        {data.others[2].projList.map((list, index) => {
                          return (
                            <li className="desc-wrapp otherWork">
                              <span className="box-with-link">
                                <a href="" target="_blank">
                                  {list.url}
                                </a>
                                <p>2213124</p>
                              </span>
                            </li>
                          );
                        })}
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={navWrapRef}
      >
        <div className="nav-wrap">
          <span onClick={() => scrollToSection("skill")}>1</span>
          <span onClick={() => scrollToSection("work-container")}>1</span>
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
        </div>
      </nav>
    </>
  );
};
