import { useState } from "react";
import "./categorytabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          بچگانه
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          زنانه
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          مردانه
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
          <img
                  className="img-carousel-top"
                  src="/img/boy-top.jpg"
                  alt="Denim Jeans"
          />
          </div>
        <div className="img-carousel-bottom">
           <div className="p-2 bg-info flex-fill"><img src="/img/boy-bottom-1.jpg" className="img-bottom"/></div>
           <div className="p-2 bg-warning flex-fill"><img src="/img/boyy-botoom3.jpg"  className="img-bottom active-bottom"/></div>
           <div className="p-2 bg-primary flex-fill"><img src="/img/boyy-botoom3.jpg"  className="img-bottom"/></div>
        </div>
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>
          <img
                  className="img-carousel-top"
                  src="/img/woman1-top.jpg"
                  alt="Denim Jeans"
          />
          </div>
        <div className="img-carousel-bottom">
           <div className="p-2 bg-info flex-fill"><img src="/img/woman-botton1.jpg" className="img-bottom"/></div>
           <div className="p-2 bg-warning flex-fill"><img src="/img/woman-button2.jpg"  className="img-bottom active-bottom"/></div>
           <div className="p-2 bg-primary flex-fill"><img src="/img/woman-button3.jpg"  className="img-bottom"/></div>
        </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div>
          <img
                  className="img-carousel-top"
                  src="/img/d9aa9aa140c95936fd70536d4025a780ade6fc1e_1624175484.jpg"
                  alt="Denim Jeans"
          />
          </div>
        <div className="img-carousel-bottom">
           <div className="p-2 bg-info flex-fill"><img src="/img/carousel1-bottom.jpg" className="img-bottom"/></div>
           <div className="p-2 bg-warning flex-fill"><img src="/img/carousel2-bottom.jpg"  className="img-bottom active-bottom"/></div>
           <div className="p-2 bg-primary flex-fill"><img src="/img/carousel3-bottom.jpg"  className="img-bottom"/></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
