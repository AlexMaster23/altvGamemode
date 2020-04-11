const { createElement, render, Component } = preact;
const h = createElement;

const keys = [
    'W'.charCodeAt(0),
    'A'.charCodeAt(0),
    'S'.charCodeAt(0),
    'D'.charCodeAt(0),
    27
];

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playername: "AlexMaster"
        };
    }

    render() {
        return h(
            'div',
            { class: 'atmPage' },
            h('div', { class: 'title' }, `${this.state.playername}'s` + ' Stats'),
            h('div', { class: 'minititle' }, `General Stats`),
            h('p',   { class: 'rand'}, `Nume:`),
            h('p',   { class: 'rand'}, `Ore Jucate: `),
            h('p',   { class: 'rand'}, `Cash: `),
            h('p',   { class: 'rand'}, `Bank: `),
            h('p',   { class: 'rand'}, `Email: `),
            h('p',   { class: 'rand'}, `Admin Level: `),
            h('p',   { class: 'rand'}, `Helper Level: `),
            h('p',   { class: 'rand'}, `Premium Account: `),
            h('p',   { class: 'rand'}, `Premium Points: `),
            h('p',   { class: 'rand'}, `Last Login: `),
            h('p',   { class: 'rand'}, `Faction: `),
            h('div', { class: 'minititle' }, `Jobs Info`),
            h('p',   { class: 'rand'}, `Trucker: `),
            h('p',   { class: 'rand'}, `Courier: `),
            h('p',   { class: 'rand'}, `Fisher: `),
        );
    }
}

render(h(App), document.querySelector('#render'));


/* 
username
password
email
adminLevel
helperLevel
premium
premiumPoints
creation
lastlogin
playingtime
cash
faction
arrestTime
truckerSkill
truckerProgress
courierSkill
courierProgress
fisherSkill
fisherProgress

*/