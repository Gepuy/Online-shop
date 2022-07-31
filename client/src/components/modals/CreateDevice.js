import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../api/deviceApi";
import {observer} from "mobx-react-lite";
import {values} from "mobx";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows))
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value}: i))
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size={'lg'}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{device.selectedType.name || "Choose brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => (
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'mt-3'}>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => (
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Enter device name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Enter device price'}
                        type={'number'}
                        value={price}
                        onChange={e => setPrice(+e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Enter device picture'}
                        type={'file'}
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>
                        Add new characteristic
                    </Button>
                    {info.map(i => (
                        <Row key={i.number} className={'mt-3'}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={'Enter characteristic name'}
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={'Enter characteristic description'}
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >Delete</Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;