import React, { useState, useEffect } from 'react';
import './app.css'
const App = () => {
  let [btns, setBtns] = useState([])
  let [count, setCount] = useState(0);
  const [seats, setSeats] = useState([]);
  const [value, setvalue] = useState(0);

  useEffect(() => {
    setvalue(count * 2999);
    console.log(value, seats);
  }, [count, seats, value])


  let btn = (e) => {
    if (btns.includes(e.target.name)) {

      setBtns(btns.filter((name) => name !== e.target.name));
      setSeats(seats.filter((name) => name !== e.target.id));
      setCount(count - 1)
    } else {
      
      setBtns([...btns, e.target.name]);
      setSeats([...seats, e.target.id]);
      setCount(count + 1)
    }
  }

  return (
    <div>
      < div id='bus'>


        <div id='lowerleft'>
          <div id='ones'>
            <span>Lower Deck</span>
            <button name='1' id='ll1' style={{ backgroundColor: btns.includes('1') ? 'green' : '' }} onClick={btn}>ll1</button>
            <button name='2' id='ll2' style={{ backgroundColor: btns.includes('2') ? 'green' : '' }} onClick={btn}>ll2</button>
            <button name='3' id='ll3' style={{ backgroundColor: btns.includes('3') ? 'green' : '' }} onClick={btn}>ll3</button>
            <button name='4' id='ll4' style={{ backgroundColor: btns.includes('4') ? 'green' : '' }} onClick={btn}>ll4</button>
            <button name='5' id='ll5' style={{ backgroundColor: btns.includes('5') ? 'green' : '' }} onClick={btn}>ll5</button>
            <button name='6' id='ll6' style={{ backgroundColor: btns.includes('6') ? 'green' : '' }} onClick={btn}>ll6</button>
          </div>

          <div id='lowerright'>
            <div className='twos'>
              <button name='7' id='lr7' style={{ backgroundColor: btns.includes('7') ? 'green' : '' }} onClick={btn}>ll7</button>
              <button name='8' id='lr8' style={{ backgroundColor: btns.includes('8') ? 'green' : '' }} onClick={btn}>ll8</button>
            </div>

            <div className='twos'>
              <button name='9' id='lr9' style={{ backgroundColor: btns.includes('9') ? 'green' : '' }} onClick={btn}>ll9</button>
              <button name='10' id='lr10' style={{ backgroundColor: btns.includes('10') ? 'green' : '' }} onClick={btn}>ll10</button>
            </div>
            <div className='twos'>
              <button name='11' id='lr11' style={{ backgroundColor: btns.includes('11') ? 'green' : '' }} onClick={btn}>ll11</button>
              <button name='12' id='lr12' style={{ backgroundColor: btns.includes('12') ? 'green' : '' }} onClick={btn}>ll12</button>
            </div>
            <div className='twos'>
              <button name='13' id='lr13' style={{ backgroundColor: btns.includes('13') ? 'green' : '' }} onClick={btn}>ll13</button>
              <button name='14' id='lr14' style={{ backgroundColor: btns.includes('14') ? 'green' : '' }} onClick={btn}>ll14</button>
            </div>
            <div className='twos'>
              <button name='15' id='lr15' style={{ backgroundColor: btns.includes('15') ? 'green' : '' }} onClick={btn}>ll15</button>
              <button name='16' id='lr16' style={{ backgroundColor: btns.includes('16') ? 'green' : '' }} onClick={btn}>ll16</button>
            </div>
            <div className='twos'>
              <button name='17' id='lr17' style={{ backgroundColor: btns.includes('17') ? 'green' : '' }} onClick={btn}>ll17</button>
              <button name='18' id='lr18' style={{ backgroundColor: btns.includes('18') ? 'green' : '' }} onClick={btn}>ll18</button>
            </div>
          </div>
        </div>


        <div>
          <div id='right'>
            <div id='ones'>
              <span>Upper Deck</span>
              <button name='19' id='rl19' style={{ backgroundColor: btns.includes('19') ? 'green' : '' }} onClick={btn}>rl19</button>
              <button name='20' id='rl20' style={{ backgroundColor: btns.includes('20') ? 'green' : '' }} onClick={btn}>rl20</button>
              <button name='21' id='rl21' style={{ backgroundColor: btns.includes('21') ? 'green' : '' }} onClick={btn}>rl21</button>
              <button name='22' id='rl22' style={{ backgroundColor: btns.includes('22') ? 'green' : '' }} onClick={btn}>rl22</button>
              <button name='23' id='rl23' style={{ backgroundColor: btns.includes('23') ? 'green' : '' }} onClick={btn}>rl23</button>
              <button name='24' id='rl24' style={{ backgroundColor: btns.includes('24') ? 'green' : '' }} onClick={btn}>rl24</button>
              <button name='25' id='rl25' style={{ backgroundColor: btns.includes('25') ? 'green' : '' }} onClick={btn}>rl25</button>
              <button name='26' id='rl26' style={{ backgroundColor: btns.includes('26') ? 'green' : '' }} onClick={btn}>rl26</button>
            </div>

            <div>
              <div className='twos'>
                <button name='27' id='rl27' style={{ backgroundColor: btns.includes('27') ? 'green' : '' }} onClick={btn}>rl27</button>
                <button name='28' id='rl28' style={{ backgroundColor: btns.includes('28') ? 'green' : '' }} onClick={btn}>rl28</button>
              </div>

              <div className='twos'>
                <button name='29' id='rl29' style={{ backgroundColor: btns.includes('29') ? 'green' : '' }} onClick={btn}>rl29</button>
                <button name='30' id='rl30' style={{ backgroundColor: btns.includes('30') ? 'green' : '' }} onClick={btn}>rl30</button>
              </div>
              <div className='twos'>
                <button name='31' id='rl31' style={{ backgroundColor: btns.includes('31') ? 'green' : '' }} onClick={btn}>rl31</button>
                <button name='32' id='rl32' style={{ backgroundColor: btns.includes('32') ? 'green' : '' }} onClick={btn}>rl32</button>
              </div>
              <div className='twos'>
                <button name='33' id='rl33' style={{ backgroundColor: btns.includes('33') ? 'green' : '' }} onClick={btn}>rl33</button>
                <button name='34' id='rl34' style={{ backgroundColor: btns.includes('34') ? 'green' : '' }} onClick={btn}>rl34</button>
              </div>
              <div className='twos'>
                <button name='35' id='rl35' style={{ backgroundColor: btns.includes('35') ? 'green' : '' }} onClick={btn}>rl35</button>
                <button name='36' id='rl36' style={{ backgroundColor: btns.includes('36') ? 'green' : '' }} onClick={btn}>rl36</button>
              </div>
              <div className='twos'>
                <button name='37' id='rl37' style={{ backgroundColor: 'black', color: 'white' }} >rl37</button>
                <button name='38' id='rl38' style={{ backgroundColor: 'black', color: 'white' }} >rl38</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div id='status'>
      Available <button style={{width:'50px',height:'50px'}}></button> 
      Booked <button style={{backgroundColor:'green',width:'50px',height:'50px'}}></button>
      Not Available  <button style={{backgroundColor:'black',width:'50px',height:'50px'}}></button>
      </div>
      <div id='result'>
        <h1>{count}</h1>
        <h3>seats</h3>

        <div>
          {seats.map((x) => {
            return <span key={x}>{x} </span>;
          })}
        </div>
        <div>
          <h1>{value}</h1>
        </div>
        
      </div>
      <div id='btn'>
        <button>Continue</button>
      </div>
    </div>

  );
}
export default App;
