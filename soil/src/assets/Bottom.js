import React, { useState, useEffect, useRef } from "react";
import test from "./data";

export const Bottom = () => {
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

  const [workPosition, setWorkPosition] = useState(-33 * 16);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportH = window.innerHeight;
      const documentH = document.body.scrollHeight;

      const chkBtm = Math.min(0, -33 * 16 + scrollTop);
      setWorkPosition(chkBtm);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <article className="container">
        <div className="wrap">
          <section className="info">
            {/* <img src={require("../img/sprout-sm.png")} alt="" />{" "} */}
            <div class="box">
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <h1 className="align-r">안녕하세요</h1>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <div className="cont-left"></div>
                  <div className="cont-right">
                    <h1>title2</h1>
                    <p>
                      langslangslangslangslangslangs
                      <br />
                      langslangslangslangs
                    </p>
                  </div>
                </div>{" "}
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col desc">
                  <h1>title3</h1>
                </div>{" "}
                <div className="col"></div>
              </div>
            </div>

            {/* <img src={require("../img/info.jpeg")} className="pic" alt="" /> */}
          </section>
        </div>

        <div
          className="fulltest"
          style={{
            bottom: `${workPosition}px`,
          }}
        >
          <h1 style={{ textAlign: "center" }}>작업물</h1>
          <div className="working">
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
          </div>
        </div>
      </article>
    </>
  );
};
