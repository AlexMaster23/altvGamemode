const { createElement, render, Component } = preact;
const h = createElement;

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: `pula`,
            playedhours: 0,
            cash: 0,
            bank: 0,
            email: 'test@gmail.com',
            adminLevel: 0,
            helperLevel: 0,
            premium: 0,
            premiumPoints: 0,
            lastLogin: 0,
            faction: 0,
        };
    }

    componentDidMount() 
    {
        setTimeout(()=>{
                if ('alt' in window) 
                {
                    alt.on('stats:updateName', this.updateName.bind(this));
                }
        },500);
    }

    updateName(name)
    {
        this.setState({ playerName: name });
    }

    updatePH(ph)
    {
        this.setState({ playedhours: ph });
    }

    updateCash(cashh)
    {
        this.setState({ cash: cashh });
    }

    close()
    {
        if('alt' in window)
        {
            alt.emit(`stats:close`);
        }
    }

    render() {
        return h(
            'div',
            { class: 'panel' },
            h(
                'div',
                { class: 'info' },
                h('h2', { class: 'title' }, `${this.state.playerName}'s Stats`),
                h('br'),
                h('br'),
                h('div', { class: 'minititle' }, `General Stats`),
                h('p',   { class: 'rand'}, `Nume: ${this.state.playerName}`),
                h('p',   { class: 'rand'}, `Ore Jucate: ${this.state.playedhours}`),
                h('p',   { class: 'rand'}, `Cash: $${this.state.cash}`),
                h('p',   { class: 'rand'}, `Bank: $${this.state.bank}`),
                h('p',   { class: 'rand'}, `Email: ${this.state.email}`),
                h('p',   { class: 'rand'}, `Admin Level: ${this.state.adminLevel}`),
                h('p',   { class: 'rand'}, `Helper Level: ${this.state.helperLevel}`),
                h('p',   { class: 'rand'}, `Premium Account: ${this.state.premium}`),
                h('p',   { class: 'rand'}, `Premium Points: ${this.state.premiumPoints}`),
                h('p',   { class: 'rand'}, `Last Login: ${this.state.lastLogin}`),
                h('p',   { class: 'rand'}, `Faction: ${this.state.faction}`),
                h('div', { class: 'minititle' }, `Jobs Info`),
                h('p',   { class: 'rand'}, `Trucker Skill: 2/6`),
                h('p',   { class: 'rand'}, `Courier Skill: 3/6`),
                h('p',   { class: 'rand'}, `Fisher: 1/6`),
                h('button', {class: 'button', onclick: () => {
                    this.close();
                }}, 'Close'),
            ),
        );
    }
}

render(h(App), document.querySelector('#render'));
