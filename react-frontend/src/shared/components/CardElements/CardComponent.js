import React from 'react';

const CardComponent = () => {
    const cardStyle = {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        position: 'center'
      };
    return (
       < div class="card" style={cardStyle}>
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button href="#" class="btn btn-primary">Go somewhere</button>
  </div>
</div>
    );
};

export default CardComponent;
