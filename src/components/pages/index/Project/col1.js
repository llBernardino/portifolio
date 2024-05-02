import React from 'react';
import Col from 'react-bootstrap/Col'; 
import jsicon from '../../img/icons8-javascript.svg'
import reacticon from '../../img/icons8-reagir.svg'
import nodeicon from '../../img/icons8-nodejs.svg'   
import cssicon from '../../img/icons8-css-50.png' 
import typeicon from '../../img/icons8-typescript-56.png'
import {
Card, Title, Image,Buttons,Figure,Caption, BackgroundPratas,Descript,ValueDescript,ValueText,PureText,Icon,Iconpoints,Boxtext
} from './style.ts'
import './stylebutton.css';


export const Col1 = (props) => {

    return (
        <Col lg={3} md={6} sm={12}  className="justify-content-center d-flex my-5 ">
            <Card>
                <BackgroundPratas/>
                <Caption>
                    <Title>{props.title}</Title>
                    <Descript>{props.descript}</Descript>
                    <ValueDescript>
                        <Figure>
                            <Image src={reacticon}  alt='React' width={35} height={35}/>
                            <Image src={jsicon} alt='javascript' width={35} height={35}/>
                            <Image src={nodeicon}alt='Node Js' width={35} height={35}/>
                            <Image src={cssicon}alt='Css' width={35} height={35}/>
                            <Image src={typeicon}alt='TypeScript' width={35} height={35}/>
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


