import React from 'react';

const Info = () => {
  return (
    <div className="about__info">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 Months+</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-task about__icon' ></i>

            <h3 className="about__title">Dedicated</h3>
            <span className="about__subtitle">Finished coding bootcamp, eager to expand my knowledge</span>
        </div>
    </div>
  )
}

export default Info