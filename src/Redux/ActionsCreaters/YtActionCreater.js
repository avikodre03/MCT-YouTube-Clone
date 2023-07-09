import { YOUTUBEDATA } from "../ActionTypes/ActionTypes"

const YtActionCreater=(data)=>{
    return {
        type:YOUTUBEDATA,
        payload:data
    }
}

export default YtActionCreater;