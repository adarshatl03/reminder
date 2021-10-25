import React, { Component } from "react";

import styles from "./components/styles/styles.css";

import Data from "./components/test/dummy";
import Timer from "./components/timer.component";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      activeEvent: {},
      acttiveCounter: {
        remainingDays: "00",
        remainingHours: "00",
        remainingMinutes: "00",
        remainingSeconds: "00",
      },
    };
  }

  componentDidMount = () => {
    if (this.state.data.length !== 0) {
      this.setState({ activeEvent: this.state.data[0] }, () => {
        this.counterTrigger();
      });
    }
  };

  counterTrigger = () => {
    setInterval(() => {
      let currentActivity = this.countdown();
      if (currentActivity) {
        this.updatePrimaryCounter(currentActivity);
      }
    }, 1000);
  };

  updatePrimaryCounter = (data) => {
    this.setState({
      acttiveCounter: data,
    });
  };

  countdown = () => {
    let results = {};
    const { activeEvent } = this.state;
    let selectedDate = activeEvent.Date ?? null;
    if (selectedDate) {
      let totalSeconds = (new Date(selectedDate) - new Date()) / 1000;

      let remainingDays = this.formatTime(Math.floor(totalSeconds / 3600 / 24));
      let remainingHours = this.formatTime(
        Math.floor(totalSeconds / 3600) % 24
      );
      let remainingMinutes = this.formatTime(
        Math.floor(totalSeconds / 60) % 60
      );
      let remainingSeconds = this.formatTime(Math.floor(totalSeconds) % 60);

      results.remainingDays = remainingDays;
      results.remainingHours = remainingHours;
      results.remainingMinutes = remainingMinutes;
      results.remainingSeconds = remainingSeconds;
    }
    return results;
  };

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  sortData = () => {
    this.state.data.sort((a, b) => {
      if (a.Date > b.Date) return 1;
      if (a.Date < b.Date) return -1;
      return 0;
    });
  };

  render() {
    const { acttiveCounter, activeEvent, data } = this.state;

    return (
      <div className="appContainer">
        <div>
          {data.length !== 0 ? (
            <>
              <div className="timerContainer">
                <div>
                  <h2>There are only </h2>
                </div>
                <div>
                  <Timer maindata={acttiveCounter} classes={styles} />
                </div>
                <div>
                  <h1>{`until ${activeEvent.Title}`}</h1>
                </div>
              </div>
              <div className="flexDisplay">
                <div className="actionNavigation">
                  {" "}
                  <center>{"<<"}</center>
                </div>
                <div className="tilesContainer">
                  {data.map((item) => (
                    <div class="inactiveEvents">
                      <div className="titleContainer">
                        <p className="title">{item.Title}</p>
                      </div>
                      <div className="dateContainer">
                        <p className="date">{item.Date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="actionNavigation">
                  <center>{">>"}</center>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="timerContainer">
                <div>
                  <h2>No Remainders Found !!! </h2>
                </div>
                <div>
                  <Timer maindata={acttiveCounter} classes={styles} />
                </div>
                <div>
                  <h1>Add a new Remainder</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Reminder;
