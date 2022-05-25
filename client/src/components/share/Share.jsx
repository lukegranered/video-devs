import React from 'react'
import './share.css'
import { Theaters } from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../../assets/person/4.jpeg" alt="" />
                <input placeholder='Hello Dev' className="shareInput" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Theaters className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}