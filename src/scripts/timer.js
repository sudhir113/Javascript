
export default class Timer extends Component {
    state = {
        minutes: 3,
        seconds: 0,
    }
    checkTimeRemining=(seconds,minutes)=>{
        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            this.checkTimeRemining(seconds,minutes);
           
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <TimeRemain>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</TimeRemain>
                }
            </div>
        )
    }
}