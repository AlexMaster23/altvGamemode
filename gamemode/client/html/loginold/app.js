const { createElement, render, Component } = preact;
const h = createElement;

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
            'form',
            { class: 'mainPanel'},
            h('div', { class: 'title' }, `Register`),
            h('input', {
                type: 'text',
                id: 'password',
                placeholder: 'Introdu o parola'
            }),
            h(
                'button', 
                { 
                    class: 'registerButton', 
                    onclick: () => {
                        const passwordval = document.getElementById('password').value;
                        this.sendRegisterData(passwordval);
                    },
                },
                'Register'
            ),
            h(
                'button', 
                { 
                    class: 'loginButton', 
                    onclick: () => {
                        const passwordval = document.getElementById('password').value;
                        this.sendLoginData(passwordval);
                    },
                },
                'Login'
            )
        )
    }
}

render(h(App), document.querySelector('#render'));