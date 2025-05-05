import React, { useState, useEffect, useRef, useCallback } from "react";

import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 13% 1fr 13%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 10% 1fr 10%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 5% 1fr 5%;
  }

  &.row {
    display: grid;
    grid-template-columns: 13% 1fr 13%;

    @media screen and (max-width: 768px) {
      grid-template-columns: 10% 1fr 10%;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: 5% 1fr 5%;
    }
  }

  .infoDesc {
    background: #fff;
    padding: 10px 0;
    margin: 10px 0;
  }
`;

export const Col = styled.div`
  flex: ${(props) => props.flex || "1"};
  max-width: ${(props) => props.maxWidth || "100%"};
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  &.col {
    min-width: 0;
    flex: 1;
    max-width: 100%;
  }

  &.desc {
    border: none;
  }
`;
