const { createElement, render, Component, createRef } = preact;
const h = createElement;

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContext: false,
            data: {
                cash: 999000000000  
            },
            notifications: [],
            notification: '',
            xOffset: 0,
            servername: 'RPG.NAGGED.RO',
            playername: 'USERNAME'
        };
        this.contextRef = createRef();
        setInterval(this.notificationInterval.bind(this), 1000);
    }

    componentDidMount() {
        if ('alt' in window) {
            // HUD
            alt.on('hud:AdjustHud', this.adjustHud.bind(this));
            alt.on('hud:setCash', this.setCash.bind(this));
            alt.on('hud:setName', this.setName.bind(this));
            alt.on('hud:Hide', this.hide.bind(this));
            alt.on('hud:updateClock', this.updateClock.bind(this));
            alt.on('hud:updateDate', this.updateDate.bind(this));
        }
    }

    updateClock(hours, minutes)
    {
        const clockNode = document.getElementById('clock');
        if (!clockNode) {
          return;
        }
        if(hours <= 9 && minutes <=9)
        {
            clockNode.innerText = `0${hours}:0${minutes}`;
        }
        else if(minutes <=9)
        {
            clockNode.innerText = `${hours}:0${minutes}`;
        }
        else if(hours <= 9)
        {
            clockNode.innerText = `0${hours}:${minutes}`;
        }
        else{
            clockNode.innerText = `${hours}:${minutes}`;
        }
    }

    updateDate(day, month, year)
    {
        const dateNode = document.getElementById('date');
        if (!dateNode) {
          return;
        }
        month = month + 1;
        if(day <= 9 && month <= 9)
        {
            dateNode.innerText = `0${day}/0${month}/${year}`;
        }
        else if(day <= 9)
        {
            dateNode.innerText = `0${day}/${month}/${year}`;
        }
        else if(month <= 9)
        {
            dateNode.innerText = `${day}/0${month}/${year}`;
        }
    }

    setCash(cash) {
        const cashNode = document.getElementById('cash');
        if (!cashNode) {
          return;
        }
        
        cashNode.innerText = `$${cash.toLocaleString()}`;
    }

    setName(name) {
        const nameNode = document.getElementById('playerName');
        if (!nameNode) {
          return;
        }
        
        nameNode.innerText = `${name}`;
    }

    hide(value) {
        this.setState({ hidden: value });
    }

    notificationInterval() {
        if (this.state.notifications.length <= 0) return;
        let notifications = [...this.state.notifications];
        notifications.forEach((note, index) => {
            if (Date.now() > note.endTime) {
                notifications.splice(index, 1);
            }
        });

        if (notifications.length === this.state.notifications.length) return;
        this.setState({ notifications });
    }

    adjustHud(shouldAdjust) {
        if (shouldAdjust) {
            this.setState({ xOffset: innerWidth / 3 });
        } else {
            this.setState({ xOffset: 0 });
        }
    }

    render() {
        if (this.state.hidden) {
            return h('div');
        }
        return h(
            'div',
            { class: 'hud' },
            this.state.showContext,
            !this.state.servername &&
                h('div', {
                    style:
                        'position: fixed !important; width: 100%; height: 100%; display: block !important; background: black !important; z-index: 99'
                }),
            h(
                'div',
                {
                    class: 'hudpanel',
                    style: `right: ${this.state.xOffset + 20}px !important;`
                },
                h('div', { id: 'cash', class: 'cash' }, `$0`),
            ),
            h(
                'div', 
                { class: 'clockbox', 
                style: `right: ${this.state.xOffset + 20}px !important;` 
                },
                h('div', { id: 'clock', class: 'clock' }, `0000`),
            ),
            h(
                'div',
                { 
                    class: 'datebox',
                    style: `right:  ${this.state.xOffset + 20}px !important;`
                },
                h('div', { id: 'date', class: 'date' }, `00/00/2020`),
            ),
            h('div', { class: 'servername' }, `${this.state.servername}`),
            h('div', { class: 'playerbox', style: `right: ${this.state.xOffset + 20}px !important;` },
            h('div', { id: 'playerName', class: 'playername' }, `USERNAME`),
            ),
        );
    }
}

render(h(App), document.querySelector('#render'));
