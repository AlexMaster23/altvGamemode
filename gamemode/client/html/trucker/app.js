const { createElement, render, Component } = preact;
const h = createElement;

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() 
    {
        if('alt' in window)
        {
            
        }
    }

    close()
    {
        if('alt' in window)
        {
            alt.emit(`trucker:close`);
        }
    }

    mazeBank()
    {
        if('alt' in window)
        {
            alt.emit(`trucker:mazeBank`);
        }
    }

    chamHills()
    {
        if('alt' in window)
        {
            alt.emit(`trucker:chamHills`);
        }
    }

    render() {
        return h(
            'div',
            { class: 'panel' },
            h(
                'div',
                { class: 'info' },
                h('h2', { class: 'title' }, `Alege o cursa!`),
                h('button', {class: 'button', onclick: () => {
                    this.mazeBank();
                }}, 'Maze Bank Arena'),
                h('br'),
                h('br'),
                h('button', {class: 'button', onclick: () => {
                    this.chamHills();
                }}, 'Chamberlain Hills'),
                h('br'),

            ),
        );
    }
}

render(h(App), document.querySelector('#render'));
