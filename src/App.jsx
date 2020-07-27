/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getSeats } from './api/service';
import SeatList from './components/seatList';
import SeatRow from './components/seatRow';
import Cart from './components/cart';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seatrows: [],
    };
  }

  componentDidMount = () => {
    const _this = this;
    getSeats().then((list) => {
      console.log(list);
      _this.setState({
        seatrows: list,
      });
    });
  };

  render() {
    return (
      <div className="layout">
        <SeatList title="Seats">
          {this.state.seatrows.map((row, index) => (
            <SeatRow seats={row.seats} key={index} />
          ))}
        </SeatList>
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
