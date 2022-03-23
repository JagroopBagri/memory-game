import React from 'react';

function Cards(props) {
  // declare an array that will be used to identify whether a particular owl has been clicked
  let clickedArray = [];
  // function that fills the previously made array with 12 items that hold the boolean "false"
  const fillClickArray = () => {
    for (let i = 1; i < 13; i++) {
      clickedArray.push(false);
    }
    return 0;
  };
  // invoke above function
  fillClickArray();
  // use state that starts with the value of clickedArray
  const [clicked, setClicked] = React.useState(clickedArray);
  // function that will be used in onClick event listener to update user score when an owl is clicked
  const updateScore = () => {
    props.scoreFunc(() => {
      return props.score + 1;
    });
  };
  // declare an array that will be used to create "owl" elements
  let owlArray = [];
  // function that fills owl array with 12 items
  const fillOwlArray = () => {
    for (let i = 1; i < 13; i++) {
      owlArray.push(0);
    }
    return 0;
  };
  // invoke above function
  fillOwlArray();
  // onClick event function
  const cardEvent = () => {
    updateScore();
  };
  // using map function to create react jsx elements
  let cards = owlArray.map((item, index) => {
    return (
      <div
        onClick={cardEvent}
        className="card"
        key={index + 1}
        data-num={index + 1}
      >
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
