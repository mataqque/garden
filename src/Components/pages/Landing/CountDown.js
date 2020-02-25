import React, { Component } from 'react'
import ProgressBar from "progressbar.js"
require('jquery-countdown');

const $ = window.$;
const configProgressCircle = {
    color: '#57bcad',
    trailColor: '#57bcad80',
    duration: 7000,
    easing: 'linear',
    strokeWidth: 4,
    trailWidth:2.5
}
let daysCircle = '';
let hoursCircle = '';
let minutesCircle = '';
let secondsCircle = '';

export default class CountDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds:0,
            minutes:0,
            hours:0,
            days:0
        }
    }
    componentDidMount = () => {
        let thes = this;
        $('.countdown-container').countdown('2020/03/01', function(event) {
            $('.clock-days .val').text(event.strftime('%D'))
            $('.clock-hours .val').text(event.strftime('%H'))
            $('.clock-minutes .val').text(event.strftime('%M'))
            $('.clock-seconds .val').text(event.strftime('%S'))

            thes.fnSetProgress(event.strftime('%-D'),event.strftime('%-H'),event.strftime('%-M'),event.strftime('%-S'))
        });

        daysCircle = new ProgressBar.Circle('#canvas_days', configProgressCircle);

        hoursCircle = new ProgressBar.Circle('#canvas_hours', configProgressCircle);

        minutesCircle = new ProgressBar.Circle('#canvas_minutes', configProgressCircle);

        secondsCircle = new ProgressBar.Circle('#canvas_seconds', configProgressCircle);
    }
    fnSetProgress = (days, hours, minutes, seconds) => {
        let secondsPorcentage = (1 - Number.parseFloat(seconds / 60));
        let minutesPorcentage = (1 - Number.parseFloat(minutes / 60));
        let hoursPorcentage = (1 - Number.parseFloat(hours / 24));
        let daysPorcentage = (1 - Number.parseFloat(days / 31));
        if (secondsCircle) {
            secondsCircle.set(secondsPorcentage)
            minutesCircle.set(minutesPorcentage)
            hoursCircle.set(hoursPorcentage)
            daysCircle.set(daysPorcentage)
        }
    }
    render() {
        return (
            <div class="countdown-container container-md">
                <div class="clock row justify-content-center">
                    <div class="clock-item clock-days countdown-time-value">
                        <div class="wrap">
                            <div class="inner">
                                <div id="canvas_days" class="clock-canvas"></div>
                                <div class="text">
                                    <p class="val">0</p>
                                </div>
                                <div className="text2 GtWalsheimLight c-primary text-uppercase">
                                    Días
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clock-item clock-hours countdown-time-value">
                        <div class="wrap">
                            <div class="inner">
                                <div id="canvas_hours" class="clock-canvas"></div>
                                <div class="text">
                                    <p class="val">0</p>
                                </div>
                                <div className="text2 GtWalsheimLight c-primary text-uppercase">
                                    Horas
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clock-item clock-minutes countdown-time-value">
                        <div class="wrap">
                            <div class="inner">
                                <div id="canvas_minutes" class="clock-canvas"></div>
                                <div class="text">
                                    <p class="val">0</p>
                                </div>
                                <div className="text2 GtWalsheimLight c-primary text-uppercase">
                                    Minutos
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clock-item clock-seconds countdown-time-value">
                        <div class="wrap">
                            <div class="inner">
                                <div id="canvas_seconds" class="clock-canvas"></div>
                                <div class="text">
                                    <p class="val">0</p>
                                </div>
                                <div className="text2 GtWalsheimLight c-primary text-uppercase">
                                    Segundos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
