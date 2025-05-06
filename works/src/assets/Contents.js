import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import gsap from "gsap";
import { data, career, others } from "./data";

export const Contents = () => {
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
      <nav>
        <div className="nav-wrap">
          <span>1</span> <span>1</span> <span>1</span> <span>1</span>
        </div>
      </nav>
      <Grid
        container
        sx={{ flexGrow: 1 }}
        className="wrap__top"
        justifyContent="center"
      >
        <Grid size={{ xs: 1, md: 2 }}>
          <div className="block">l</div>
        </Grid>
        <Grid size={{ xs: 3, md: 6 }}>
          <div className="block">
            <span>
              {/* 他には
                        「自分のスキルで他人に役に立つプロダクトを作る」を目指しています。
                        ですので、ユーザー目線で重視しつつ仕上げしたいと思います。
                        <br />
                        なお、学習者のため勉強しやすくするためにウェブサイトの翻訳にも興味があって、
                        こんちゅりびゅーとしてます。 */}
              <h3>나누는 것을 좋아합니다. 새로운 정보와 즐거운 것들을요.</h3>
              React와 vanilla Js로 웹 퍼블리싱과 프론트작업을 하며 중간 역할과
              더불어 UIUX개선을 하며 프로젝트를 성공적으로 완수하였습니다.
              <br />
              혼자만 아는 것보다 스스로의 능력이 사람들에게 도움이 되길 바라며
              웹 문서의 영한번역에도 기여하고 있습니다.
              <br />
              <br />
              기획자와 디자이너 사이에서 비개발 직군에게도 이해하기 쉽게
              설명하여 원활한 작업진행에 도움이 되는 것에 보람을 느낍니다.
              <br />
              인터랙션, 심미성이 높은 UI 구현과 더불어 사용자 경험의 향상,
              그리고 변화하는 개발 생태계에서 끊임없이 배우며 같이 일하고 싶은
              개발자가 되고 싶습니다.
            </span>
          </div>
        </Grid>
      </Grid>
      {/*  */}
      <Grid size={{ xs: 12, md: 12 }}>
        <div className="line">l</div>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <Grid
          size={12}
          container
          className="line"
          direction="row"
          justifyContent="center"
        >
          {data.skills.map((a, b) => {
            return (
              <>
                <Grid size={6} key={b}>
                  <h2>{a.tit}</h2>
                  <p>{a.skillList.join(", ")}</p>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>

      {/*  */}
      <div className="wrap" style={{ flexDirection: "column" }}>
        {data.career.map((list, index) => {
          return (
            <>
              <Grid size={12} container spacing={3} direction="column">
                <Grid
                  size={12}
                  container
                  className="line"
                  direction="row"
                  justifyContent="center"
                >
                  <Grid size={1} spacing={2} className="line">
                    <h2>dd</h2>
                    <p>
                      {list.date} <br /> {list.totalDate}
                    </p>
                  </Grid>
                  <Grid size={7} spacing={2} className="line">
                    <ul className="works-wrap">
                      <li className="works-wrap__desc ani">
                        {list.projList.map((project) => {
                          return (
                            <>
                              <div className="proj-info">
                                <img
                                  src={project.imgUrl}
                                  className="pic"
                                  alt=""
                                />
                                <h3 className="txt-proj-name">
                                  {project.projName}
                                </h3>
                                <a href={`${project.url}`} target="_blank">
                                  링크
                                </a>

                                <div className="proj-info__desc">
                                  {project.desc.map((descItm, index) => {
                                    return <p key={index}>{descItm}</p>;
                                  })}
                                  <div className="label-wrap">
                                    {project.skill.map((skillItm, index) => {
                                      const chipSkill = sList[skillItm] || "";
                                      return (
                                        <span
                                          key={index}
                                          className={`label ${skillItm}`}
                                        >
                                          {chipSkill}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        })}
      </div>

      {/*  */}

      <div className="wrap" style={{ flexDirection: "column" }}>
        <Grid container size={12}>
          {data.others[1].projList.map((list, index) => {
            return (
              <>
                <Grid size={4}>{list.projName}</Grid>
                <Grid size={8}>
                  <a href={`${list.url}`}>d</a>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
