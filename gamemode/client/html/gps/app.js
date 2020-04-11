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
            alt.emit(`gps:close`);
        }
    }

    gotoDMV()
    {
        if('alt' in window)
        {
            alt.emit(`gps:gotoDMV`);
        }
    }

    render() {
        return h(
            'div',
            { class: 'panel' },
            h(
                'div',
                { class: 'info' },
                h('h2', { class: 'title' }, `GPS`),
                h('button', {class: 'button', onclick: () => {
                    this.gotoDMV();
                }}, 'DMV'),
                h('br'),
                h('button', {class: 'button', onclick: () => {
                    this.gotoSpawn();
                }}, 'Spawn'),
                h('br'),
                h('button', {class: 'button', onclick: () => {
                    
                }}, 'Dealership'),
                h('br'),
                h('br'),
                h('button', {class: 'button', onclick: () => {
                    this.close();
                }}, 'Close'),
            ),
        );
    }
}

render(h(App), document.querySelector('#render'));
