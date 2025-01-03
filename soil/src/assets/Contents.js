import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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

      <Grid container spacing={3} sx={{ flexGrow: 1 }} className="center">
        <Grid size={{ xs: 1, md: 2 }} offset={1}>
          <div className="line">l</div>
        </Grid>
        <Grid size={{ xs: 3, md: 5 }} offset={1}>
          <div className="line">r</div>
        </Grid>
      </Grid>

      <Grid container spacing={1} justifyContent="center">
        <Grid size={{ xs: 3, md: 3 }}>
          <div className="line">l</div>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <div className="center">
            <Grid size={6} className="line">
              <div>11</div>
            </Grid>
            <Grid size={6} className="line">
              <div>11</div>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <div className="center">
        {data.career.map((list, index) => {
          return (
            <>
              {" "}
              <Grid size={12} container spacing={1} direction="column">
                <Grid size={12} container className="line">
                  <Grid size={2} className="line">
                    <h2>dd</h2>
                    <p>
                      {list.date} <br /> {list.totalDate}
                    </p>
                  </Grid>
                  <Grid size={6} className="line">
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
    </>
  );
};
