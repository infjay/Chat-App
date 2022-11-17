import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react'
import { ChannelSearch, TeamChannelList , TeamChannelPreview } from './';
import ChatIcon from '../assets/chat.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className="channel-list__siderbar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={ChatIcon} alt="Chat" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
        
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Chat App</p>
    </div>
)

const ChannelListContainer = () => {
  return (
<>
    <SideBar />
    <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            list={(listprops)=> (
                <TeamChannelList
                {...listprops}
                type="team" />
            )}
            Preview={(previewProps)=> (
                <TeamChannelPreview
                {...previewProps}
                type="team"
                />
            )}
        />

        <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            list={(listprops)=> (
                <TeamChannelList
                {...listprops}
                type="messaging" />
            )}
            Preview={(previewProps)=> (
                <TeamChannelPreview
                {...previewProps}
                type="messaging"
                />
            )}
        />

    </div>
</>
)
}

export default ChannelListContainer