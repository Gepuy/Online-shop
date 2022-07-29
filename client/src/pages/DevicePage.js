import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {id: 1, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'}
    const description = [
        {id:1, title: 'RAM', description: '6 GB'},
        {id:2, title: 'Camera', description: '48MP'},
        {id:3, title: 'Processor', description: 'SnapDragon 465'},
        {id:4, title: 'Accumulator', description: '5000'}
    ]
    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <div className={'d-flex flex-column align-items-center'}>
                        <h2>{device.name}</h2>
                        <div
                            className={'d-flex align-items-center justify-content-center'}
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 200, height:200, backgroundSize:'cover', fontSize:58}}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className={'d-flex flex-column align-items-center justify-content-around'}
                        style={{width:250, height: 250, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From {device.price}$</h3>
                        <Button variant={'outline-dark'}>Add to Cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                <h1>Characteristics</h1>
                {description.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? '#bcb9bc' : 'transparent', padding: 10}}

                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>

        </Container>
    );
};

export default DevicePage;
