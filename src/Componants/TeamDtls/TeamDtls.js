import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDtls.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag, faFutbol, faPodcast, faTransgender } from '@fortawesome/free-solid-svg-icons'

const TeamDtls = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([])
    const {strStadiumThumb,strCountry, strTeam, strTeamBadge, strSport, strGender, intFormedYear} = team;
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])

    let showPic;
    if (strGender === 'Female') {
        showPic = <img src="/image/female.png" alt="not found"/>
    } else {
        showPic = <img src="/image/male.png" alt="not found"/>
    }

    return (
        <div className="details-area">
            <div className="banner">
                <img src={strStadiumThumb} alt="notFound"/>
            </div>
            <div className="team-logo d-flex justify-content-center">
                <img src={strTeamBadge} alt="not found"/>
            </div>
           <div className="player-details">
                <div className="container">
                    <div className="row team-info mt-4 d-flex align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="team-dtls text-white">
                                <h2>{strTeam}</h2>
                                <p><FontAwesomeIcon icon={faPodcast}/> Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol}/> Sports type: {strSport}</p>
                                <p className="mb-0"><FontAwesomeIcon icon={faTransgender}/> Gander: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="player-img">
                                {showPic}
                            </div>
                        </div>
                    </div>
                    <div className="team-content text-white">
                       <div className="row">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo ratione eius quidem mollitia numquam, quo quasi. Eos repudiandae corporis earum nesciunt, aperiam modi dolor ex esse optio iure rem autem labore et veniam vel cupiditate nobis fuga ullam debitis a doloribus dolorum? Eligendi aliquid facilis explicabo aliquam placeat excepturi, incidunt nesciunt consequatur culpa quidem perspiciatis nihil aperiam fuga iste voluptate voluptatibus, id iusto nam inventore nobis, beatae sed neque animi exercitationem. Delectus, officia iusto! Reiciendis facere dignissimos natus debitis velit, suscipit tempora dicta minima mollitia dolorem consectetur omnis. Ratione atque sunt aut laudantium aliquam dolorum quo iusto vero, eveniet corrupti exercitationem! Dolore ex nesciunt unde iure nam optio repellendus? Earum fugiat praesentium dolorum animi reiciendis molestias voluptate non. Iure exercitationem eum aliquid, nesciunt, minus non architecto culpa possimus neque ullam, facilis consequatur voluptatibus </p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo ratione eius quidem mollitia numquam, quo quasi. Eos repudiandae corporis earum nesciunt, aperiam modi dolor ex esse optio iure rem autem labore et veniam vel cupiditate nobis fuga ullam debitis a doloribus dolorum? Eligendi aliquid facilis explicabo aliquam placeat excepturi, incidunt nesciunt consequatur culpa quidem perspiciatis nihil aperiam fuga iste voluptate voluptatibus, id iusto nam inventore nobis, beatae sed neque animi exercitationem. Delectus, officia iusto! Reiciendis facere dignissimos natus debitis velit.</p>
                       </div>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li><a href="https://www.facebook.com/goal"><img src="/image/Facebook.png" alt="notFound"/></a></li>
                            <li><a href="https://twitter.com/SportsManiaUSA"><img src="/image/Twitter.png" alt="notFound"/></a></li>
                            <li><a href="https://www.youtube.com/user/goal"><img src="/image/YouTube.png" alt="notFound"/></a></li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default TeamDtls;