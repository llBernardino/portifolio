import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import "./stylebutton.css";
import { Content, BackgroundProject, Container, H1 } from "./style.ts";
import { Col1 } from "./col1.js";
import jsicon from "../../img/icons8-javascript.svg";
import reacticon from "../../img/icons8-reagir.svg";
import htmlicon from "../../img/icons8-html-5.svg";
import bootstrap from "../../img/bootstrap.svg";
import cssicon from "../../img/icons8-css-50.png";
import typeicon from "../../img/icons8-typescript-56.png";
import oportunize from "../../img/oportunize2.jpeg";
import agexproject from "../../img/agexproject.jpg";
import dovalleproject from "../../img/dovalleproject.jpg";
import cnn from "../../img/cnn.jpg";
import bikes from "../../img/bikes2.jpeg";
import poke from "../../img/poke.jpeg";
import bem from "../../img/bem.jpeg";
import prata from "../../img/prata.jpg";
import car from "../../img/car.jpeg";
import virtus from "../../img/virtus.png";

export const Project = () => {
  return (
    <Content>
      <BackgroundProject>
        <Container>
          <H1 className="text-center">PROJECTS</H1>
          <Row
            className="justify-content-center d-flex w-100"
            data-hidden-class="hidden"
          >
            <Col1
              title={"Site Agex"}
              imagem={agexproject}
              descript={
                "React | Next.js | Tailwind | TypeScript. | directus CMS |"
              }
              github={""}
              Visit={"https://site-agex.vercel.app"}
              icon1={reacticon}
              icon2={typeicon}
              icon3={cssicon}
            />
            <Col1
              title={"Site DoValle"}
              imagem={dovalleproject}
              descript={
                "React | Next.js | Tailwind | TypeScript. | Hygraph CMS |"
              }
              github={""}
              Visit={"https://site-dovalle.vercel.app"}
              icon1={reacticon}
              icon2={typeicon}
              icon3={cssicon}
            />
            <Col1
              title={"Site CNN"}
              imagem={cnn}
              descript={
                "React | Next.js | Tailwind | TypeScript. | Hygraph CMS |"
              }
              github={""}
              Visit={"https://site-cnn.vercel.app"}
              icon1={reacticon}
              icon2={typeicon}
              icon3={cssicon}
            />
            <Col1
              title={"Site Oportunize"}
              imagem={oportunize}
              descript={"React.js | Next.js | Emotion | Hooks | TypeScript."}
              github={"https://github.com/llBernardino/Oportunize"}
              Visit={"https://oportunize.org"}
              icon1={reacticon}
              icon2={typeicon}
              icon3={cssicon}
              icon4={jsicon}
            />
            <Col1
              title={"Virtus Ocupaccional"}
              imagem={virtus}
              descript={"React.js | TypeScript | Material Ui."}
              github={"https://github.com/llBernardino/Virtus-Ocupacionall"}
              Visit={"https://virtus-ocupacionall.vercel.app/pagina-inicial"}
              icon1={reacticon}
              icon2={typeicon}
              icon3={cssicon}
              icon4={jsicon}
            />
            <Col1
              title={"Prata da gata"}
              imagem={prata}
              descript={" EM DESENVOLVIMENTO. "}
              github={"https://github.com/llBernardino/Bem_Viver_Landing_Page"}
              Visit={"https://prata-da-gata.vercel.app"}
              icon1={reacticon}
              icon2={jsicon}
              icon3={cssicon}
              icon4={bootstrap}
            />
            <Col1
              title={"Site Bicicletas"}
              imagem={bikes}
              descript={"Html5| Css3 | Bootstrap."}
              github={"https://github.com/llBernardino/Site_Bicicletas"}
              Visit={"https://site-bicicletas.vercel.app"}
              icon1={htmlicon}
              icon2={cssicon}
              icon3={bootstrap}
              icon4={jsicon}
            />
            <Col1
              title={"Pokedex"}
              imagem={poke}
              descript={
                "Integração com API | Html5| Css3 | Javascript | Bootstrap."
              }
              github={"https://github.com/llBernardino/Pokedex"}
              Visit={"https://pokedex-eta-henna.vercel.app"}
              icon1={cssicon}
              icon2={htmlicon}
              icon3={bootstrap}
              icon4={jsicon}
            />
            <Col1
              title={"Carrinho Compras"}
              imagem={car}
              descript={
                "Integração com API | Html5| Css3 | Javascript | React."
              }
              github={
                "https://github.com/llBernardino/projeto-carrinhos-de-compras-react"
              }
              Visit={"https://projeto-carrinhos-de-compras-react.vercel.app"}
              icon1={cssicon}
              icon2={htmlicon}
              icon3={reacticon}
              icon4={jsicon}
            />
            <Col1
              title={"Site Bem Viver"}
              imagem={bem}
              descript={"Html5| Css3 | Bootstrap. "}
              github={"https://github.com/llBernardino/Bem_Viver_Landing_Page"}
              Visit={""}
              icon1={cssicon}
              icon2={htmlicon}
              icon3={bootstrap}
              icon4={jsicon}
            />
          </Row>
        </Container>
      </BackgroundProject>
    </Content>
  );
};
