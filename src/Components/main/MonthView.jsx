import './month.css'

import { Link, Route, Routes } from 'react-router-dom'

const MonthView = ({ myDictionary, updateDayKey }) => {
  const graySquares = [30, 31];
  const blueSquares = Array.from({ length: 28 }, (_, index) => index + 1);
  const lastgraySquares = [1, 2, 3, 4, 5]
  const allSquares = [...graySquares, ...blueSquares, ...lastgraySquares];
  let counter = 0;

  const countValues = (dict, value) => {
    return Object.values(dict).reduce((count, currentValue) => {
      return currentValue === value ? count + 1 : count;
    }, 0);
  };

  const changeKey = (event) => {
    const value = event.target.id
    updateDayKey(value);
  };

  return (
    <div className="container">
      <div className="header">
        <div class="weekday">Montag</div>
        <div class="weekday">Dienstag</div>
        <div class="weekday">Mittwoch</div>
        <div class="weekday">Donnerstag</div>
        <div class="weekday">Freitag</div>
        <div class="weekday">Samstag</div>
        <div class="weekday">Sonntag</div>
      </div>
      <div className="content">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: 7 }).map((_, colIndex) => {
              const squareValue = allSquares[rowIndex * 7 + colIndex];
              const isGray = (graySquares.includes(squareValue) || lastgraySquares.includes(squareValue)) && counter < 2 || counter > 29;
              counter++;

              return (
                <div key={colIndex} className={`square ${isGray ? 'gray' : ''}`}>
                  <Link to="/Tagesansicht" >
                    <button onClick={changeKey} id={squareValue}></button>
                  </Link>
                  <p>{squareValue}</p>
                  {counter > 2 && counter < 31 ? <h5 className={`number ${countValues(myDictionary[squareValue], false) === 0 ? 'green' : 'red'}`}>{countValues(myDictionary[squareValue], false)}</h5> : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MonthView;