import React from 'react'
import "./NavBar.css"
import logo from '../../Utiles/Images/YTLogo.png'
import nav1 from '../../Utiles/Images/nav1.png'
import nav2 from '../../Utiles/Images/nav2.png'
import { VscThreeBars } from 'react-icons/vsc';
import { GoSearch } from 'react-icons/go';
import { BsFillMicFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useDispatch } from 'react-redux'
import { toggleActionCreater } from '../../Redux/ActionsCreaters/toggleActionCreater'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const dispatch=useDispatch()
  return (
    <div className='NavBar'>
      <div className="treelineDiv">
        <button
        onClick={()=>{
          dispatch(toggleActionCreater())
        }}
        ><VscThreeBars/></button>
      </div>
      <div className="ytLogo">
        <Link to={"/"}>
        <img src={logo} alt="ytLogo" />
        </Link>
      </div>
      <div className="navBarSearchSection">
      <input type="Search" placeholder="Search" name="Search" id="Search"/>
      <div className="searchDiv"><GoSearch/></div>
      </div>
      <div className="micDiv"><BsFillMicFill/></div>
      <div className="NavBarRightSection">
        <img src={nav1} alt="img" />
        <img src={nav2} alt="img" />
        <div className="profile">
          <p><CgProfile/>Sign in</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar