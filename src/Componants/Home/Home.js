import React, { useEffect } from 'react';

import { useState } from 'react';
import Team from '../Team/Team';

import './Home.css'

const Home = () => {
    const [team, setTeam] = useState([])
    console.log(team)
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[])

    return (
        <div className="team-bg">
            <div className="site-name">
                <h2>Premier League</h2>
            </div>
            <div className="all-team pt-4">
                <div className="container">
                    <div className="row">
                        {
                            team.map(teams => <Team teams={teams}></Team>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;