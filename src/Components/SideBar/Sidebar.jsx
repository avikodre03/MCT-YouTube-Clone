import React from 'react'
// import "../HomePage/HomePage.css"
import './Sidebar.css'
import home from '../../Utiles/Images/Home.png'
import short from '../../Utiles/Images/Short.png'
import sub from '../../Utiles/Images/sub.png'
import hist from '../../Utiles/Images/his.png'
import lib from '../../Utiles/Images/lib.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (

        <div class="HomePageLeftSection">
            <div class="HomePageLeftSectionHomeContainer">
                <ul>

                    <Link to={"/"}>
                        <li >
                            <img src={home} alt="" />
                            <p>Home</p>
                        </li>
                    </Link>
                    <li>
                        <img src={short} alt="" />
                        <p>Short</p>
                    </li>
                    <li>
                        <img src={sub} alt="" />
                        <p>Subsciption</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="HomePageLeftSectionLibraryContainer">
                <ul>
                    <li >
                        <img src={hist} alt="" />
                        <p>Library</p>
                    </li>
                    <li>
                        <img src={lib} alt="" />
                        <p>History</p>
                    </li>

                </ul>
            </div>
            <hr />
            <div class="HomePageLeftSectionSubscriptionContainer">
                <h3>Explore</h3>
                <ul>
                    <li>
                        <img src={home} alt="" />
                        <p>Treanding</p>
                    </li>
                    <li>
                        <img src={short} alt="" />
                        <p>Shopping</p>
                    </li>
                    <li>
                        <img src={sub} alt="" />
                        <p>Music</p>
                    </li>

                    <li>
                        <img src={home} alt="" />
                        <p>Home</p>
                    </li>
                    <li>
                        <img src={short} alt="" />
                        <p>Movies&Shows</p>
                    </li>
                   
                </ul>
            </div>
            {/* <hr/> */}


        </div>

    )
}

export default Sidebar