import fire from './firebase';

export function getSeats() {
  const seatArr = [];
  const rowArray = [];
  const noOfSeatsInARow = 5;

  return new Promise((resolve, reject) => {
    const seatsRef = fire.database().ref('seats/').orderByChild('number');
    seatsRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        seatArr.push({
          number: childData.number,
          price: childData.price,
          status: childData.status,
          rowNo: childData.rowNo,
        });
      });

      let groups = []; let
        i;
      for (i = 0; i < seatArr.length; i += noOfSeatsInARow) {
        groups = seatArr.slice(i, i + noOfSeatsInARow);
        console.log(groups);
        rowArray.push({
          id: i,
          seats: groups,
        });
      }
      console.log(rowArray);
      resolve(rowArray);
    }).catch((error) => { reject(error); });
  });
}

export function bookSelSeats(seats) {
  console.log('book seats', seats);
  return new Promise((resolve, reject) => {
    seats.forEach((obj) => {
      fire.database().ref('seats/').child(`seat-${obj.number}`)
        .update({ status: 'booked' })
        .then(resolve(true))
        .catch((error) => { reject(error); });
    });
  });
}
