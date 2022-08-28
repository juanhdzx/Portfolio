import React from 'react';
import './Skills.css';

const Back = () => {
  return (
    <div className="skills__content">
    <h3 className="skills title">Server Side</h3>
    <p>Back-End Development</p>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i> 
                <div>
                    <h3 className="skills__name">Node.js</h3>
                    <span className="skills__level"><i class='bx bxl-nodejs' ></i></span>
                </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i> 
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level"><img src="https://png.monster/wp-content/uploads/2022/02/png.monster-716.png" height="30px" width="100px"alt="MySQL"/></span>
                </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i> 
                <div>
                    <h3 className="skills__name">Mongo.db</h3>
                    <span className="skills__level"><i class='bx bxl-mongodb' ></i></span>
                </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i> 
                <div>
                    <h3 className="skills__name">Amazon Web Services</h3>
                    <span className="skills__level"><i class='bx bxl-aws' ></i></span>
                </div>
            </div>

            
        </div>


    </div>
</div>
  )
}

export default Back