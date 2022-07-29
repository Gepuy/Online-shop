import {makeAutoObservable} from "mobx";

export default  class DeviceStore {
    constructor() {
        this._types = []
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Asus'},
            {id: 4, name: 'Lenovo'},
        ];
        this._devices = [
            {id: 1, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 2, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 3, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 4, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 5, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
            {id: 6, name: '12 pro', price: 25000, rating: 5, img: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-a536elbdsek/gallery/ua-galaxy-a53-5g-a536-sm-a536elbdsek-531825969?$650_519_PNG$'},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    };

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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

    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}