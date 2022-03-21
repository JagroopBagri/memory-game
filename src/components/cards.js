import React from 'react';

function Cards() {
  let array = [];
  const fillArray = () => {
    for (let i = 1; i < 13; i++) {
      array.push(0);
    }
    return 0;
  };
  fillArray();
  let cards = array.map((item, index) => {
    return (
      <div className="card" key={index + 1} data-num={index + 1}>
        <img
          src={require(`../images/owl${index + 1}.jpg`)}
          alt="owl"
          className="owl"
        />
      </div>
    );
  });
  return <div className="cards--container"> {cards} </div>;
}

export default Cards;
