import React from "react";

const Education = () => {
  return (
    <>
      <div className="stake-text">
        <div className="info-item">
          <div className="ap-ls">APR:</div>
          <div className="ap-rs">680%</div>
        </div>
        <div className="choose-day">
          <h1>Choose Look</h1>
        </div>
        {/* <div className="choose-day">
          <h1>Choose Look</h1>
          <div className="day-input">
            <div className="day">350 Days</div>
            <div className="arrow">
              <ArrowIcon />
            </div>
          </div>
        </div> */}

        <div className="field-amount">
          <div className="ls-fld">Select Amount:</div>
          <div className="rs-fld">Balance: NaN PLP</div>
        </div>
        <div className="balance">
          <div className="num">0</div>
          {/* <input
            className="num"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input> */}
          <div className="balance-btn">
            <button className="plp-btn">PLP</button>
            <button className="max-btn">Max</button>
          </div>
        </div>
        <button className="approve-btn">Approve</button>

        <div className="approve-button"></div>
      </div>
    </>
  );
};

export default Education;
