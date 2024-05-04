import React from 'react';
import Col from 'react-bootstrap/Col'; 


import {
Card, Title, Image, Image1,Buttons,Figure,Caption, BackgroundPratas,Descript,ValueDescript,
} from './style.ts'
import './stylebutton.css';


export const Col2 = (props) => {

    return (
        <Col lg={3} md={6} sm={12}  className="justify-content-center d-flex my-5 ">
            <Card>
                <BackgroundPratas>
                    <Image1 src={props.imagem}  alt='React' />
                </BackgroundPratas>
                
                <Caption>
                    <Title>{props.title}</Title>
                    <Descript>{props.descript}</Descript>
                    <ValueDescript>
                        <Figure>
                            <Image src={props.iconHtml} width={35} height={35} alt='HTML5'/>
                            <Image src={props.iconJS}    width={35} height={35} alt='JavaScript'/>
                            <Image src={props.iconCss}   width={35} height={35} alt='Css'/>
                            <Image src={props.iconBootstrap}   width={35} height={35} alt='Bootstrap'/>
                        </Figure>
                    </ValueDescript>
                    <Buttons>
                       <a href={props.github}><button className="glow-on-hover" type="submit">GitHub</button></a> 
                       <a href={props.online}><button className="glow-on-hover" type="button">Online</button></a> 
                    </Buttons>
                </Caption>
            </Card>
        </Col>
    );

}


