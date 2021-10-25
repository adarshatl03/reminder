import React, { Component } from "react";

class Timer extends Component {
  render() {
    const { maindata } = this.props;

    return (
      <div>
        <div class="countdown-container">
          <div class="countdown-el days-c">
            <p class="big-text" id="days">
              {maindata.remainingDays}
            </p>
            <span>Days</span>
          </div>
          <div class="countdown-el hours-c">
            <p class="big-text" id="hours">
              {maindata.remainingHours}
            </p>
            <span>Hours</span>
          </div>
          <div class="countdown-el mins-c">
            <p class="big-text" id="mins">
              {maindata.remainingMinutes}
            </p>
            <span>Minutes</span>
          </div>
          <div class="countdown-el seconds-c">
            <p class="big-text" id="seconds">
              {maindata.remainingSeconds}
            </p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
