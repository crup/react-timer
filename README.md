# react-timer
> A minimalistic yet customizable timer component!

[Live demo](https://xendora.github.io/react-timer/examples)

![Travis (.org) branch](https://img.shields.io/travis/xendora/react-timer/master?style=for-the-badge) ![NPM](https://img.shields.io/npm/l/@xendora/react-timer?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/@xendora/react-timer?style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@xendora/react-timer?style=for-the-badge)

![Basic Timer with 100ms interval](docs/images/incremental-counter.gif "Basic Timer with 100ms interval")

## Installation
### For NPM

```
npm install @xendora/react-timer
```

### For Yarn

```
yarn add @xendora/react-timer
```

## Props
| Name  | Type |  Description |
| ------------- | ------------- | ------------- |
| children  | object (required)  |    Define your react component here           |
| start | number (required)  | A start value for the timer               |
| end | function (required)  | A function which determines the end for the timer              |
| interval | number | An interval value for the timer. Default is 1 second               |
| onTick | function (required)  | A callback function where the next computed value is determined               |
| onEnd | function   | A callback function which executes when the timer stops executing               |
---

## License

MIT © [xendora](https://github.com/xendora)
