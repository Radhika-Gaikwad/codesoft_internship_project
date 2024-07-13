import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {


  const slider = useRef();
  let tx = 0;

  const slideForward = () =>{
      if(tx > -50)
      {
        tx -= 25;
      }
      slider.current.style.transform = `  translateX(${tx}%)`;
  }

  const slideBackward = () =>{
    if(tx < 0)
      {
        tx += 25;
      }
      slider.current.style.transform = `  translateX(${tx}%)`;
  }




  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn'  onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">

              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Roberts</h3>
                  <span>
                    ScholarHub, USA
                  </span>
                </div>
              </div>
              <p>Choosing to persue my degree at ScholarHub was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to acadamic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">

              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>
                    ScholarHub, USA
                  </span>
                </div>
              </div>
              <p>ScholarHub provided me with a unique and enriching educational experience. The professors are highly knowledgeable and genuinely care about students' success. I am proud to be an alumnus of this prestigious institution.</p>
            </div>
          </li>
          <li>
            <div className="slide">

              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sophia Martinez</h3>
                  <span>
                    ScholarHub, USA
                  </span>
                </div>
              </div>
              <p>Attending ScholarHub has been a transformative experience for me. The combination of rigorous academics and a supportive environment has allowed me to thrive both personally and professionally.</p>
            </div>
          </li>
          <li>
            <div className="slide">

              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Nguyen</h3>
                  <span>
                    ScholarHub, USA
                  </span>
                </div>
              </div>
              <p>My time at ScholarHub has been incredibly rewarding. The diverse student body and innovative learning approaches have broadened my horizons and prepared me for a successful career in my field.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
