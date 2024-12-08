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
                  <h1 className="align-r">title</h1>
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
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <img src={require("../img/lge1.png")} className="pic" alt="" />
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
