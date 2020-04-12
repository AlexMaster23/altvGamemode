const { createElement, render, Component, createRef } = preact;
const h = createElement;

// The main rendering function.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContext: false,
            notifications: [],
            notification: '',
            xOffset: 0,
            servername: 'RPG.NAGGED.RO'
        };
        this.contextRef = createRef();
        setInterval(this.notificationInterval.bind(this), 1000);
    }

    componentDidMount() {
        if ('alt' in window) {
            // HUD
            alt.on('hud:AdjustHud', this.adjustHud.bind(this));
            //alt.on('speedo:updateSpeed', this.updateSpeed.bind(this));
            alt.on('updateSpeed', this.updateSpeed.bind(this));
        }
    }

    updateSpeed(speed)
    {
        var speedNode = document.getElementById('speedd');
        if (!speedNode) {
          return;
        }
        
        speedNode.innerText = `${speed}`;
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
            ),
            h('div', { id: 'speedd', class: 'speed' }, `999`),
            h('div', { class: 'km' }, `KM/H`),
            h('div', { id: 'fuel', class: 'fuel' }, `99`),
            h('div', { class: 'fuelName' }, `FUEL`),
            /*
            h('div', {id: 'radioName', class: 'radioName' }, `NONE`),
            h('div', { class: 'radio' }, `RADIO`),*/
        );
    }
}

render(h(App), document.querySelector('#render'));
