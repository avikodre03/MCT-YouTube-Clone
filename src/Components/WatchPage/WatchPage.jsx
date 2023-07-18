import React, { useEffect, useState } from 'react'
import './WatchPage.css'
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { PiShareFat } from 'react-icons/pi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import { toggleActionCreater } from '../../Redux/ActionsCreaters/toggleActionCreater';


const WatchPage = () => {
  const [Videodata, setVideodata] = useState([])
  const dispatch = useDispatch()
  const ytData = useSelector((myStore) => {
    return myStore;
  })

  const { id } = useParams();
  useEffect(() => {
    let details = [...ytData.youtubeData.filter((ele) => ele.rank == id)]
    setVideodata(details)
    dispatch(toggleActionCreater())
  }, [])

  return (

    <div className='WatchPageContainer'>
      {Videodata && (

        <div className="WatchPageVideoContainer">
          {/* <iframe src={Videodata[0] && Videodata[0].trailer} frameborder="0"></iframe> */}
          <iframe src="https://www.youtube.com/embed/NmzuHjWmXOc" frameborder="0"></iframe>
          <h2>{Videodata[0] && Videodata[0].title}</h2>
          <div className="WatchPageVideoContainerBottom">
            <div className="WatchPageVideoContainerBottomLeftContainer">
              <img src={Videodata[0] && Videodata[0].thumbnail} alt="img" />
              <div className="channelName">
                <h4>Frank Darabont</h4>
                {/* <h4>{Videodata[0] && Videodata[0].director[0]}</h4> */}
                <p>100k subscribers</p>
              </div>
              <button>Subscribe</button>
            </div>
            <div className="WatchPageVideoContainerBottomRightContainer">
              <div className="likeDislikeDiv">
                <div className="like"><BiLike /> <span>543</span> </div><hr />
                <div className="dislike"><BiDislike /></div>
              </div>
              <div className="sharediv"><PiShareFat /> <span>Share</span></div>
              <div className="downloadDiv"><AiOutlineArrowDown /> <span>Download</span></div>
              <div className="threeDot"><BsThreeDots /></div>
            </div>
          </div>
        </div>
      )}



      <div className="WatchPageContainerSuggestContainer">
        <div class="WatchPageContainerSuggestContainerTop">
          <p style={{ backgroundColor: "white", color: "black" }}>All</p>
          <p>Action</p>
          <p>Family</p>
          <p>Crime</p>
          <p>Thriller</p>
          <p>Drama</p>
          <p>Biography</p>
          <p>History</p>
          <p>Adventure</p>
          <p>Western</p>
          <p>Romance</p>
          <p>Fantasy</p>
          <p>Mystery</p>
          <p>War</p>
          <p>Comedy</p>
          <p>Fantasy</p>
          <p>Mystery</p>
          <p>War</p>
          <p>Comedy</p>

        </div>
        <div className="WatchPageContainerSuggestContainerBottom">
          {ytData.youtubeData && (ytData.youtubeData.map((ele) => {
            return <>
              <div className="suggestVideoCard">
                <div className="imgContainer">
                  <img src={ele && ele.image} alt="img" />
                </div>
                <div className="details">
                  <h3>{ele && ele.title}</h3>
                  {/* <p>{ele && ele.director[0]}</p> */}
                  <p>Frank Darabont</p>
                  <span>{ele && ele.rating} rating - year <span>{ele && ele.year}</span></span>
                </div>

              </div>
            </>
          }))}

        </div>
      </div>


      {ytData.toggleside ? (
        <div className="WatchPageContainerOverlay">
          <Sidebar />
        </div>) : null
      }
    </div>
  )
}

export default WatchPage