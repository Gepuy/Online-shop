import {makeAutoObservable} from "mobx";

export default  class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Mobile Phones'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ];
        this._devices = [
            {id: 1, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 2, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 3, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 4, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}