import React from 'react';

function Cards(props) {
  // declare an array that will be used to identify whether a particular owl has been clicked
  let clickedArray = [];
  // function that fills the previously made array with 12 items that hold the boolean "false"
  const fillClickArray = (array) => {
    for (let i = 1; i < 13; i++) {
      array.push('false');
    }
    return 0;
  };
  // invoke above function
  fillClickArray(clickedArray);
  // use state that starts with the value of clickedArray
  const [clicked, setClicked] = React.useState(clickedArray);
  // function that will be used in onClick event listener to update user score when an owl is clicked
  const updateScore = () => {
    props.scoreFunc(() => {
      return props.score + 1;
    });
  };
  // function that will be used in OnCick event listener to reset score when an owl that has already been clicked is clicked again
  const resetScore = () => {
    props.scoreFunc(() => {
      return 0;
    });
  };
  // function that will be used to update the clicked array
  const updateClicked = (e) => {
    setClicked(() => {
      let a = clicked;
      a[e.target.dataset.num] = 'true';
      return a;
    });
  };
  // function that will be used to reset the clicked array
  const resetClicked = () => {
    setClicked(() => {
      let a = [];
      fillClickArray(a);
      return a;
    });
  };
  // function that will save highest score to local storage
  const saveToLocalStorage = () => {
    if (localStorage.getItem('highScore')) {
      if (localStorage.getItem('highScore') < props.score + 1) {
        localStorage.setItem('highScore', props.score + 1);
      }
    } else {
      localStorage.setItem('highScore', props.score + 1);
    }
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
  const cardEvent = (e) => {
    if (e.target.dataset.clicked === 'false') {
      updateScore();
      updateClicked(e);
      saveToLocalStorage();
    } else {
      resetScore();
      resetClicked();
    }
  };
  // using map function to create react jsx elements
  let cards = owlArray.map((item, index) => {
    return (
      <div className="card" key={index + 1}>
        <img
          onClick={cardEvent}
          src={require(`../images/owl${index + 1}.jpg`)}
          alt="owl"
          className="owl"
          data-num={index}
          data-clicked={clicked[index]}
        />
      </div>
    );
  });
  // sort the divs randomly
  cards = cards.sort(() => Math.random() - 0.5);
  return <div className="cards--container"> {cards} </div>;
}

export default Cards;
