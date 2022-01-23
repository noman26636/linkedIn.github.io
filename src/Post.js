import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlineIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlineIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlineIcon from '@mui/icons-material/ShareOutlined';
import SendOutlineIcon from '@mui/icons-material/SendOutlined';

function Post({name , description , message , photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlineIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlineIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlineIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlineIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post
