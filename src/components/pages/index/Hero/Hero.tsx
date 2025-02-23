import React from "react";
import { HeroTypes } from "./types";
import {
  Content,
  BackgroundHero,
  Boxtext,
  Figure,
  H1,
  Subtext,
  Heros,
  SubBox,
  Img,
  Contacts,
} from "./style.ts";
import Container from "../../../layout/Container/index.tsx";
import Box from "@mui/material/Box";

export const Hero = (props: HeroTypes) => {
  return (
    <Content>
      <BackgroundHero>
        <Container>
          <Heros>
            <Boxtext className="select" data-hidden-class="hidden">
              <H1>
                Frontend
                <br />
                Developer.
              </H1>
              <Subtext>{props.title}</Subtext>
              <SubBox>
                <Subtext>{props.textoone}</Subtext>
                <Subtext>{props.textotwo}</Subtext>
              </SubBox>
              <Contacts className="mt-4">
                <a
                  className="mx-2"
                  href="https://www.linkedin.com/in/cauã-bernardino-lima-73413b22a/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="mt-2"
                    alt="LinkedIn"
                    src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  />
                </a>
                <a
                  className="mx-2"
                  href="https://github.com/llBernardino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="mt-2"
                    alt="github"
                    src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white"
                  />
                </a>
                <a
                  className="mx-2"
                  href="mailto:cauaberrnardinolima@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="mt-2"
                    alt="Gmail"
                    src="https://img.shields.io/badge/Gmail-white?style=for-the-badge&logo=gmail&logoColor=red"
                  />
                </a>
                <a
                  className="mx-2"
                  href="https://contate.me/devcaua"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="mt-2"
                    alt="whatsapp"
                    src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                  />
                </a>
              </Contacts>
            </Boxtext>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Figure className="select" data-hidden-class="hidden">
                <Img src={props.perfil} alt="PERFIL" />
              </Figure>
              <Box
                className="select text-box"
                data-hidden-class="hidden"
                sx={{
                  marginLeft: "60px",
                  marginTop: "60px",
                  fontWeight: "bold",
                }}
              >
                <a href="" download="CurriculoDev.pdf">
                  <button className="glow-on-hover1" type="button">
                    DOWNLOAD CV
                  </button>
                </a>
              </Box>
            </Box>
          </Heros>
        </Container>
      </BackgroundHero>
    </Content>
  );
};
