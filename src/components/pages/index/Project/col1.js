import React from 'react';
import Col from 'react-bootstrap/Col'; 
import {
Card, Title, Image, Image1,Buttons,Figure,Caption, BackgroundPratas,Descript,ValueDescript,
} from './style.ts'
import './stylebutton.css';

export const Col1 = (props) => {
    return (
        <Col lg={3} md={6} sm={12}  className="justify-content-center d-flex my-5 select">
            <Card>
                <BackgroundPratas>
                    <Image1 src={props.imagem}  alt='React' />
                </BackgroundPratas>
                <Caption>
                    <Title>{props.title}</Title>
                    <Descript>{props.descript}</Descript>
                    <ValueDescript>
                        <Figure>
                            <Image src={props.icon1} width={35} height={35} alt='HTML5'/>
                            <Image src={props.icon2} width={35} height={35} alt='JavaScript'/>
                            <Image src={props.icon3} width={35} height={35} alt='Css'/>
                            <Image src={props.icon4} width={35} height={35} alt='Bootstrap'/>
                        </Figure>
                    </ValueDescript>
                    <Buttons>
                        <a href={props.github}><button className="glow-on-hover" type="submit">GitHub</button></a> 
                        <a href={props.Visit}><button className="glow-on-hover" type="button">Visit</button></a> 
                    </Buttons>
                </Caption>
            </Card>
        </Col>
    );
}


