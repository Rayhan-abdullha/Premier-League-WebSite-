import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.teams;
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
            <div className="single-team bg-white text-dark">
                <img src={strTeamBadge} alt=""/>
                <h2>{strTeam}</h2>
                <p>Sports type: {strSport}</p>
                <p>{idTeam}</p>
                <Link to={`/details/${idTeam}`}>
                    <button className="btn btn-success">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
               
            </div>
        </div>
    );
};

export default Team;