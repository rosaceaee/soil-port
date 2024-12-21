import React, { useState, useEffect, useRef } from "react";

import test from "./data";

export const Bottom = ({ onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState({});
  const [up, setUp] = useState(0);
  // const [long, setLong] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scroll_num = window.scrollY;

  //     setLong((prevLong) => prevLong + 1);
  //     console.log(long);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [long]);

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

  return (
    <>
      <article className="container">
        <div className="wrap">
          <section className="info">
            {/* <img src={require("../img/sprout-sm.png")} alt="" />{" "} */}
            <div class="box">
              <div className="row">
                <div className="col bg"></div>
                <div className="col desc">
                  <h1
                    className={`align-r ${
                      isHovered["stack1"] ? "cursor-hover" : ""
                    }`}
                    onMouseEnter={(e) => handleMouseEnter("stack1", e)}
                    onMouseLeave={(e) => handleMouseLeave("stack1", e)}
                  >
                    안녕하세요.
                  </h1>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <div className="cont-left">
                    <span className="up">
                      {up === 1 ? "책임감" : null}
                      {up === 2 ? "호기심" : null}
                      {up === 3 ? "자기주도적인" : null}
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
                  </div>{" "}
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  {" "}
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
            <div className="box">
              <div className="proj-box">
                <div className="contents">
                  <div className="company-info">
                    <h2>더피프티원, 풀타임</h2>
                    <p>2024.5 ~ now</p>
                  </div>
                  <ul>
                    <li className="desc-wrapp">
                      {" "}
                      <img
                        src={require("../img/lge1.png")}
                        className="pic"
                        alt=""
                      />
                      <div className="proj-info">
                        <h3 className="txt-proj-name">미래에셋생명 (date)</h3>
                        <div className="label-wrap">
                          <span className="label vanilla">link</span>
                        </div>
                      </div>
                      <div className="proj-info__desc">
                        {" "}
                        <p>
                          작업 생산성을 높이기 위하여 컴포넌트 CSS, JS 레거시
                          코드 수정 후 컴포넌트 활용 ㅆㄱㄴ
                        </p>
                        <p>단위, 통합테스트 대응하여 ui 화면 개선</p>
                        <p>
                          イベントページの簡単ゲームのコード仕組み作成などの簡単なイベント関数の運用
                        </p>
                        <div className="label-wrap">
                          <span className="label js">JS</span>
                          <span className="label css">CSS</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      <img
                        src={require("../img/lge1.png")}
                        className="pic"
                        alt=""
                      />
                      <div className="proj-info">
                        <h3 className="txt-proj-name">
                          LG global platform (date)
                        </h3>
                        <div className="label-wrap">
                          <span className="label vanilla">dd</span>
                        </div>
                      </div>

                      <div className="proj-info__desc">
                        <p>헝가리, 오스트리아 사이트 UIUX 구축 및 운영</p>
                        <p>결제 모듈 ui영역 개선 담당</p>
                        <p>기존 ui관련 레거시 코드 개선</p>
                        <p>
                          다른 다국어 사이트와 균일한 ui 구현을 위하여 컴포넌트
                          디자인 개선
                        </p>

                        <div className="label-wrap">
                          <span className="label js">JS</span>
                          <span className="label css">CSS(SCSS)</span>
                          <span className="label pug">Pug</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      {" "}
                      <img
                        src={require("../img/lge1.png")}
                        className="pic"
                        alt=""
                      />
                      <div className="proj-info">
                        <h3 className="txt-proj-name">
                          현대 N브랜드 사이트 리뉴얼 (date)
                        </h3>
                        <div className="label-wrap">
                          <span className="label vanilla">dd</span>
                        </div>
                      </div>
                      <div className="proj-info__desc">
                        <p>
                          ui디자인 일관성과 생산성을 높이기 위한 컴포넌트 시스템
                          개선 및 참여
                        </p>
                        <p>단위, 통합테스트 대응하여 ui 화면 개선</p>
                        <p>다국어 사이트 반영 담당</p>

                        <div className="label-wrap">
                          <span className="label js">JS</span>
                          <span className="label css">CSS</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="contents">
                  <div div className="company-info">
                    <h2>주식회사 클라우봇</h2>
                    <p>
                      2021.12. ~ 2023.07. <br /> (total date)
                    </p>
                  </div>
                  <ul>
                    <li className="desc-wrapp">
                      <div className="proj-info">
                        <h3 className="txt-proj-name">
                          최선어학원 creo 유지보수
                        </h3>
                        <div className="label-wrap">
                          <span className="label react">ㅇㅁㅅㄷ</span>
                        </div>
                      </div>
                      <div className="proj-info__desc">
                        <p>유지보수, 테스트</p>
                        <p>
                          기존 ui 스타일 소스 레거시 정리 및 코드 경제?사용?성
                          개선
                        </p>
                        <p>
                          ui 테스트 작업 대응하여 디바이스 최적화로 사용자
                          학습도움에 기여
                        </p>
                        <div className="label-wrap">
                          <span className="label react">React</span>
                          <span className="label react">ReactNative</span>
                          <span className="label react">CSS(SCSS)</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      <div className="proj-info">
                        <h3 className="txt-proj-name">
                          metaexam 영어시험 구축
                        </h3>
                        <div className="label-wrap">
                          <span className="label react">ㅇㅁㅅㄷ</span>
                        </div>
                      </div>{" "}
                      <div className="proj-info__desc">
                        <p>퍼블리싱, 테스트</p>
                        <p>
                          수험자의 이해를 돕기 위한 uiux 디자인 참여. 직관적인
                          스타일로 작업함
                        </p>{" "}
                        <div className="label-wrap">
                          <span className="label react">React</span>

                          <span className="label react">CSS(SCSS)</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      <div className="proj-info">
                        <h3 className="txt-proj-name">
                          phonics monster 교육 툴 유지보수
                        </h3>

                        <div className="label-wrap">
                          <span className="label css">ㅇㅁㅅㄷ</span>
                        </div>
                      </div>{" "}
                      <div className="proj-info__desc">
                        <p>퍼블리싱, 테스트</p>
                        <p>레거시 코드 정리 및 전체 소스 리팩토링</p>
                        <p>ui 테스트 작업 대응하여 디바이스 최적화 작업</p>{" "}
                        <div className="label-wrap">
                          <span className="label react">React</span>
                          <span className="label react">ReactNative</span>
                          <span className="label react">CSS</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      <div className="proj-info">
                        <h3 className="txt-proj-name">루시드 영어</h3>
                        <div className="label-wrap">
                          <span className="label vanilla">dd</span>
                          <span className="label vanilla">dd</span>
                        </div>
                      </div>
                      <div className="proj-info__desc">
                        <p>학원 교육 부교재용 앱 구축 </p>
                        <p>컴포넌트 UI 구현, 디바이스 별 반응형 ㄱ ㅜ현</p>
                        <div className="label-wrap">
                          <span className="label react">React</span>
                          <span className="label react">ReactNative</span>
                          <span className="label react">CSS(SCSS)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="contents">
                  <div div className="company-info">
                    <h2>잡코리아</h2>
                    <p>
                      2019.7. ~ 2021.3. <br />
                      (1년 4개월)
                    </p>
                  </div>
                  <ul>
                    <li className="desc-wrapp">
                      <h3 className="txt-proj-name">ㅇㅇ</h3>
                      <p>dd</p>{" "}
                      <div className="label-wrap">
                        <span className="label react">html</span>
                        <span className="label reactnative">css</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="contents">
                  <div div className="company-info">
                    <h2>리눅스웨어</h2>
                    <p>hataraitakoto</p>
                  </div>
                  <ul>
                    <li className="desc-wrapp">
                      <h3 className="txt-proj-name">서울여자대학교 아동학과</h3>{" "}
                      <div className="proj-info__desc">
                        <p></p>
                        <p>asdf</p>
                        <div className="label-wrap">
                          <span className="label react">html</span>
                          <span className="label reactnative">css</span>
                          <span className="label reactnative">js(jQuery)</span>
                        </div>
                      </div>
                    </li>
                    <li className="desc-wrapp">
                      <h3 className="txt-proj-name">ssmedipia </h3>{" "}
                      <div className="proj-info__desc">
                        <p>asdf</p>
                        <div className="label-wrap">
                          <span className="label react">html</span>
                          <span className="label reactnative">css</span>
                          <span className="label reactnative">js(jQuery)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* box2 */}
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

            {/* box3 */}
            <div className="box">
              {/* <div className="date">Others</div> */}
              <div className="proj-box">
                <div className="contents">
                  <div>
                    <h2>Others </h2>
                  </div>
                  <ul>
                    <li className="desc-wrapp others">
                      <h3 className="txt-proj-name">
                        MDN 웹 문서 영한번역 기여
                      </h3>
                      <div class="proj-info__desc">
                        {" "}
                        <span className="box-with-link">
                          <p>outerHeight</p>
                          <a
                            href="https://developer.mozilla.org/ko/docs/Web/API/Window/outerHeight"
                            target="_blank"
                          >
                            d
                          </a>
                        </span>
                      </div>

                      <span className="box-with-link">
                        <p>device memory api</p>
                        <a
                          href="https://developer.mozilla.org/ko/docs/Web/API/Device_Memory_API"
                          target="_blank"
                        >
                          d
                        </a>
                      </span>

                      <span className="box-with-link">
                        <p>tabindex</p>
                        <a
                          href="https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/tabIndex"
                          target="_blank"
                        >
                          d
                        </a>
                      </span>

                      <span className="box-with-link">
                        <p>clipboard</p>
                        <a
                          href="https://developer.mozilla.org/ko/docs/Web/API/Navigator/clipboard"
                          target="_blank"
                        >
                          d
                        </a>
                      </span>
                    </li>
                    <li className="desc-wrapp others">
                      <h3 className="txt-proj-name">
                        regexlearn 한국어 번역 기여
                      </h3>
                      <p>
                        부자연스러운 문장 교정하여 한국어 사용자의 학습에
                        기여함.
                      </p>
                      <span className="box-with-link">
                        <a href="https://regexlearn.com/ko" target="_blank">
                          https://regexlearn.com/ko
                        </a>
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="working">
            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">LG global platform</h2>
              <div className="label-wrap">
                <span className="label vailla">js</span>
                <span className="label pug">pug</span>
              </div>
              <p>2024.06. ~ 2024.09.</p>
              <p>헝가리, 오스트리아 사이트의 구축 운영 담당</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">미래에셋생명 헬스 앱 구축</h2>
              <div className="label-wrap">
                <span className="label vailla">js</span>
                <span className="label react">css</span>
                <span className="label pug">html</span>
              </div>
              <p>2024.09. ~ 2024.11.</p>
              <p>미래에셋생명 헬스 앱 구축의 페이지 구축과 테스트 담당</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">현대기아자동차 N 브랜드 사이트 리뉴얼 구축</h2>
              <div className="label-wrap">
                <span className="label vailla">js</span>
                <span className="label react">css</span>
                <span className="label pug">html</span>
              </div>
              <p>2024.05. ~ 2024.08</p>
              <p>
                현대기아자동차의 N브랜드 사이트 리뉴얼 구축 담당, 테스트도 담당
              </p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <div className="label-wrap">
                <span className="label vailla">react</span>
                <span className="label vailla">react native</span>
                <span className="label react">scss</span>
              </div>
              <h2 class="tit">creo 영어학원</h2>
              <p>최선어학원 영어 교육용 웹, 앱</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <div className="label-wrap">
                <span className="label vailla">react</span>
                <span className="label vailla">react native</span>
                <span className="label react">scss</span>
              </div>
              <h2 class="tit"></h2>
              <p>Meta exam</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <div className="label-wrap">
                <span className="label vailla">js(jQuery)</span>
                <span className="label vailla">css</span>
                <span className="label react">html</span>
              </div>
              <h2 class="tit">서울여대 아동학과</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <div className="label-wrap">
                <span className="label vailla">js(jQuery)</span>
                <span className="label vailla">css</span>
                <span className="label react">html</span>
              </div>
              <h2 class="tit">SSmedipia</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>
          </div> */}
        </div>
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
