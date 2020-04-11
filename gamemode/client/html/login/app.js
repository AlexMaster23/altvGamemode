const { createElement, render, Component } = preact;
const h = createElement;

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendRegisterData(password)
    {
        if('alt' in window)
        {
            alt.emit('login:RegisterAccount', password);
        }
    }

    sendLoginData(password)
    {
        if('alt' in window)
        {
            alt.emit('login:LoginAccount', password);
        }
    }

    render() {
        return h(
            'div',
            { class: 'panel' },
            h(
                'div',
                { class: 'info' },
                h('h2', { class: 'title' }, 'Welcome'),
                h('input', {
                    type: 'password',
                    id: 'password',
                    placeholder: 'Introdu o parola'
                }),
                h('br'),
                h('br'),
                h('button', { class: "loginButton", onclick: () => {
                    const passwordval = document.getElementById('password').value;
                    this.sendLoginData(passwordval);
                } }, 'Login'),
                h('br'),
                h('br'),
                h('button', { class: "registerButton", onclick: () => { 
                    const passwordval = document.getElementById('password').value; 
                    this.sendRegisterData(passwordval); 
                } }, 'Register'),
            ),
        );
    }
}

render(h(App), document.querySelector('#render'));
