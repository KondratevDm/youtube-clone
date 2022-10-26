import React from 'react';
import { useNavigate } from 'react-router';
import { TbMoodSad } from 'react-icons/tb';
import './NotFound.scss'

export const NotFound = () => {
    const navigate = useNavigate()

    const goBack = () => navigate("/")
    
    return (
        <div className="notFound">
            <div className="notFound__container">
                <TbMoodSad size={45} />
                <h1>Page not found</h1>
                <p>You may have clicked on a shorts or playlist but the ability to play them has not yet been added</p>
                <div onClick={goBack}>Go back</div>
            </div>
        </div>
    )
};