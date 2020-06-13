import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

export default class Countdown extends Component {

    state = {

    }


    render() {
        return (

            <Slide left delay={1000}>

                <div className="countdown_wrapper">

                    <div className="countdown_top">
                        Event starts in
                        </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                2000
                                </div>
                            <div className="countdown_tag">
                                Days
                                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                4
                                </div>
                            <div className="countdown_tag">
                                Hours
                                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                43
                                </div>
                            <div className="countdown_tag">
                                Minutes
                                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                7
                                </div>

                            <div className="countdown_tag">
                                Seconds
                                </div>
                        </div>






                    </div>

                </div>
            </Slide>
        )
    }
}
