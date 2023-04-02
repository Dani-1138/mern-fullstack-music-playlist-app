import styled, { keyframes } from 'styled-components'
import './wave.css'
import '../../App.css'
import {BiSkipNext, BiSkipPrevious} from 'react-icons/bi';
import { Autorenew, FavoriteBorder, Forward30, Pause, Replay10, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSong } from '../../redux/action';

export const ControlDiv = styled.div`
    width: 100%;
    height: 15%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const WavDiv = styled.div`
    width: auto;
    height: 30px;
    padding-bottom: 5px;
    display: flex;
    align-items: flex-end;
`

const wave = keyframes`
    0%{
        height: 10px;
    }
    50%{
        height: 15px;
    }
    100%{
        height: 10px;
}
`

const Wave1 = styled.div`
    width: 3px;
    height: 10px;
    margin-right: 3px;
    border-radius: 10px 10px 0px 0px;
    background: #36e2ec;
    animation: ${wave} .6s linear infinite;
`
const Wave2 = styled(Wave1)`
    height: 13px;
    animation-delay: .4s;
`
const Wave3 = styled(Wave1)`
    height: 8px;
    animation-delay: .8s;
`
const Wave4 = styled(Wave1)`
    height: 10px;
    animation-delay: .4s;
`
const Wave5 = styled(Wave1)`
    height: 13px;
    animation-delay: .8s;
`
const Wave6 = styled(Wave1)`
    height: 13px;
    animation-delay: .4s;
`
const Wave7 = styled(Wave1)`
    height: 8px;
    animation-delay: .8s;
`
const Wave8 = styled(Wave1)`
    height: 10px;
    animation-delay: .4s;
`
const Wave9 = styled(Wave1)`
    height: 8px;
    animation-delay: .8s;
`
const Wave10 = styled(Wave1)`
    height: 10px;
    animation-delay: .4s;
`
const Wave11 = styled(Wave1)`
    height: 13px;
    animation-delay: .4s;
`
const Wave12 = styled(Wave1)`
    height: 8px;
    animation-delay: .8s;
`
const Wave13 = styled(Wave1)`
    height: 10px;
    animation-delay: .4s;
`
const Wave14 = styled(Wave1)`
    height: 8px;
    animation-delay: .8s;
`
const Wave15 = styled(Wave1)`
    height: 10px;
    animation-delay: .4s;
`
const BiPrev = styled(BiSkipPrevious)`
    color: #fff;
    font-size: 70px;
    &:hover{
        transform: scale(1.3);
    }
`
const BiNext = styled(BiSkipNext)`
    color: #fff;
    font-size: 70px;
    &:hover{
        transform: scale(1.3);
    }
`
export const MainPlayWave = () =>{

    return(
        <>
            <WavDiv>
                <Wave1 />
                <Wave2 />
                <Wave3 />
                <Wave4 />
                <Wave5 />
                <Wave6 />
                <Wave7 /> 
                <Wave8 /> 
                <Wave9 /> 
                <Wave10 />
                <Wave11 />
                <Wave12 /> 
                <Wave13 /> 
                <Wave14 /> 
                <Wave15 />
            </WavDiv>
        </>
    )
}

export const TimerBar = styled.input.attrs({
    type: "range",
})`
    
    min: 0;
    max: 20;
    step: 1;
    margin-bottom: 2rem;
    height: 2px;
    color: red;
    width: 80%;
     
`

export const IconWrapper = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`
const Replay10s = styled(Replay10)`
    color: #fff;
    margin-right: 1rem;
    background: rgba(54, 69, 98, 0.3);
    border-radius: 50%;
`
const SkipPreviouss = styled(SkipPrevious)`
    color: #fff;
    margin-right: 1rem;
`
const Pauses = styled(Pause)`
    color: #fff;
    margin-right: 1rem;
    
    width: 300px;
    height: 200px;

    border-radius: 50%;
    background: rgba(54, 69, 98, 0.3);
    
`
const SkipNexts = styled(SkipNext)`
    color: #fff;
    margin-right: 1rem;
`
const Forward30s = styled(Forward30)`
    color: #fff;
    margin-right: 1rem;
    border-radius: 50%;
    background: rgba(54, 69, 98, 0.3);
`
const Favorite = styled(FavoriteBorder)`
    color: #fff;
    margin-right: 1rem;
`
const Autorenews = styled(Autorenew)`
    color: #fff;
    margin-right: 1rem;
`
const Shuffles = styled(Shuffle)`
    color: #fff;
    margin-right: 1rem;
`
const TimerWrapper = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const TimeStart = styled.span`
    color: #fff;
    margin-bottom: 2rem;
    margin-right: 1rem;
`
const TimeFinish = styled.span`
    color: #fff;
    margin-bottom: 2rem;
    margin-left: 1rem;
`
// export const AnimaImg = () =>{
//     <>
//         <img src='./'/>
//     </>
// }
export const MainControls = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.songsReducer.allSongs)
    const song = useSelector(state => state.songReducer.song)
    const search = useSelector(state => state.searchReducer.searchTerm)
    const isPlaying = useSelector(state => state.isSongPlayingReducer.isSongPlaying)
    
    const nextTrack = () => {
        console.log(song)
        if (data) {
            if (song === data.length) {
                dispatch(setSong(0))
            } else {
                dispatch(setSong(song + 1))
            }
        }
    };

    const previousTrack = () => {
        if (data) {
            if (song === 0) {
                dispatch(setSong(0))
            } else {
                dispatch(setSong(song - 1))
            }
        }
    };
    useEffect(() => {
        if (data) {
            if (song > data.length) {
                dispatch(setSong(0))
            }
        }
    }, [song]);
  return (
    <>
      {/* <TimerWrapper><TimeStart>0:00</TimeStart><TimerBar /><TimeFinish>10:00</TimeFinish></TimerWrapper> */}
      <IconWrapper>
            <BiPrev onClick={previousTrack} />
            <MusicControl />
            <BiNext className='icon' onClick={nextTrack} />
           
      </IconWrapper>

    </>
  )
}
























const MusicControl = () => {
  return (
    <>
        <div className='music'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div> 
    </>
  )
}

// export default  MusicControl
