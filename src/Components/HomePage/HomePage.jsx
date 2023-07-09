import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import YtActionCreater from '../../Redux/ActionsCreaters/YtActionCreater';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
const HomePage = () => {
    const dispatch = useDispatch()
    const ytData = useSelector((myStore) => {
        return myStore
    })
    console.log("ytData", ytData);

    const [active, setActive] = useState("All")
    const [genreData, setGenreData] = useState(ytData.youtubeData)
    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                headers: {
                    'X-RapidAPI-Key': 'df6787ae2cmsh0433e112b9ec312p1151a1jsn984a4ac77f55',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                console.log("hello", response.data);
                setGenreData(response.data)
                dispatch(YtActionCreater(response.data))
            } catch (error) {
                alert(error.message)
            }
        };

        fetchMovies();
    }, []);

    const filterGenreData = (gen) => {
        if (gen === "All") {
            setGenreData(ytData.youtubeData)
            setActive(gen)
        } else {
            setActive(gen)
            const denData = ytData.youtubeData.filter((ele) => {
                return ele.genre.indexOf(gen) >= 0
            })
            setGenreData(denData)
        }
    }

    return (
        <div className='HomePage'>
            {ytData.toggleside ? (
                <Sidebar />
            ) : null}


            <div className="HomePageRightSection" style={ytData.toggleside ? null : { width: "100%" }}>
                <div class="HomePageRightSectionTop">
                    <button className={active === "All" ? "buttonActive" : null}
                        onClick={() => { filterGenreData("All") }}
                    >All</button>
                    <button onClick={() => { filterGenreData("Action") }}>Action</button>
                    <button onClick={() => { filterGenreData("Family") }}>Family</button>
                    <button onClick={() => { filterGenreData("Crime") }}>Crime</button>
                    <button onClick={() => { filterGenreData("Thriller") }}>Thriller</button>
                    <button onClick={() => { filterGenreData("Drama") }}>Drama</button>
                    <button onClick={() => { filterGenreData("Biography") }}>Biography</button>
                    <button onClick={() => { filterGenreData("History") }}>History</button>
                    <button onClick={() => { filterGenreData("Adventure") }}>Adventure</button>
                    <button onClick={() => { filterGenreData("Western") }}>Western</button>
                    <button onClick={() => { filterGenreData("Romance") }}>Romance</button>
                    <button onClick={() => { filterGenreData("Fantasy") }}>Fantasy</button>
                    <button onClick={() => { filterGenreData("Mystery") }}>Mystery</button>
                    <button onClick={() => { filterGenreData("War") }}>War</button>
                    <button onClick={() => { filterGenreData("Comedy") }}>Comedy</button>
                    <button onClick={() => { filterGenreData("Fantasy") }}>Fantasy</button>
                    <button onClick={() => { filterGenreData("Mystery") }}>Mystery</button>
                    <button onClick={() => { filterGenreData("War") }}>War</button>
                    <button onClick={() => { filterGenreData("Comedy") }}>Comedy</button>

                </div>

                <div className="HomePageRightSectionBottom">
                    {genreData && (genreData.map((ele) => {
                        return <>
                            <Link to={`/watchPage/${ele.rank}`}>


                                <div className="videoContainer">
                                    <div className="videoContainerImg">

                                        <img src={ele && ele.image} alt="thumbnail1.jpg" width="100%" />
                                    </div>

                                    <div className="descriptionContainer">
                                        <div className="descriptionContainerImg">

                                            <img src={ele && ele.thumbnail} alt="img" />
                                        </div>

                                        <div className="descriptionContainerTitle">
                                            <h4>{ele && ele.title}</h4>
                                            <span>{ele && ele.director[0]}</span>
                                            <p>{ele && ele.rating} rating - year <span>{ele && ele.year}</span></p>
                                        </div>
                                        <div className="threeDots">
                                            <BsThreeDotsVertical />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    }))}

                </div>
            </div>

        </div>
    )
}

export default HomePage