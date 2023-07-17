import React from 'react';

export default function BoxScoreTeam2() {
  console.log("BOXSCORE2");
  return (
    <div className="boxscore">
      <div className="boxscore__team boxscore__team--header">
        <label></label>
        <div className="boxscore__team__units">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        <div className="boxscore__team__results">
          <span>TOTAL</span>
        </div>
      </div>
      <div className="boxscore__team boxscore__team--away">
        <label>NYJ</label>
        <div className="boxscore__team__units">
          <span>0</span>
          <span>3</span>
          <span>0</span>
          <span>7</span>
        </div>
        <div className="boxscore__team__results">
          <span>10</span>
        </div>
      </div>
      <div className="boxscore__team boxscore__team--home">
        <label>NE</label>
        <div className="boxscore__team__units">
          <span>14</span>
          <span>3</span>
          <span>7</span>
          <span className="bg-black">10</span>
        </div>
        <div className="boxscore__team__results">
          <span>33</span>
        </div>
      </div>
      <div className="boxscore__details">
        {/* {style = "background: #203731"} */}
        <div className="boxscore__details__team boxscore__details__team--away">
          <p>
            <strong>JETS</strong><small>NYJ</small>
          </p>
          <span>56-38</span>
        </div>
        <div className="boxscore__details__info">
          <strong>Final</strong>
        </div>
        {/* style="background: #002244" */}
        <div className="boxscore__details__team boxscore__details__team--home" >
          <p>
            <strong>PATRIOTS</strong><small>NE</small>
          </p>
          <span>56-38</span>
        </div>
      </div>
    </div>
  );
}