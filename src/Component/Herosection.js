import react from "react";
import "../App.css";
import "./Herosection.css";
import { Button } from './button';

function Herosection() {
  return (
    <>
      <div className="hero-container">
        <img src="/img/wp2936853.jpg" />
        <h1>Welcome to page mehrad</h1>
        <p>axs Me?</p>
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
      </div>
    </>
  );
}

export default Herosection;
