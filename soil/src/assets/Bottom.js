import React, { useState, useEffect, useRef } from "react";

export const Bottom = () => {
  const [long, setLong] = useState(0);

  //   useEffect(() => {
  //     function changeBg(value) {
  //       window.addEventListener("scroll", function () {
  //         const scroll_num = window.scrollY;
  //         const increase = () => {
  //           setlong((long) => long + 1);
  //           console.log(long);
  //         };
  //         increase();
  //       });
  //     }
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      setLong((prevLong) => prevLong + 1);
      console.log(long);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [long]);

  return (
    <>
      <div className="App-circle">
        <img src={require("../img/sprout-sm.png")} alt="" />
      </div>
      <article className="container">
        <section className="wrap info">
          <div class="desc">
            <h1>안녕하세요</h1>
            <p>desc</p>
          </div>
          <img src={require("../img/info.jpeg")} className="pic" alt="" />
        </section>

        <section className="wrap works">
          <h1 style={{ textAlign: "center" }}>작업물</h1>
          <div className="working">
            <div className="card">
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>

            <div className="card">
              <h2 class="tit">tit</h2>
              <p>date here</p>
              <p>something desc..</p>
            </div>
          </div>
          <div className="others">
            also having participated in translation en to ko.
          </div>
        </section>
        <nav></nav>
      </article>
    </>
  );
};
