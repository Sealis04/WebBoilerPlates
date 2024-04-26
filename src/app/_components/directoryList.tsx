'use client'

import DirectoryComponent from "./directoryComponent"


export default function DirectoryList(){
    const i = [1,2,3,4]
    return(
        <div>
            {i.map((e,index)=>{
                return(
                    <DirectoryComponent key={index}/>
                )
            })}

        </div>
    )
}