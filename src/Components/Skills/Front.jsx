import React from 'react';
import './Skills.css';

const Front = () => {
  return (
    <div className="skills__content">
        <h3 className="skills title">Client Side</h3>
        <p>Front-End Development</p>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i> 
                    <div>
                        <h3 className="skills__name">HTML 5</h3>
                        <span className="skills__level"><i class='bx bxl-html5' ></i></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i> 
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level"><i class='bx bxl-css3' ></i></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i> 
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level"><i class='bx bxl-javascript' ></i></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i> 
                    <div>
                        <h3 className="skills__name">React.js</h3>
                        <span className="skills__level"><i class='bx bxl-react' ></i></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i> 
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level"><i class='bx bxl-bootstrap' ></i></span>
                    </div>
                </div>

                
            </div>


        </div>
    </div>
  )
}

export default Front