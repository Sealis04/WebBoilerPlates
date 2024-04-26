'use client'

import DirectoryComponent from "./directoryComponent"


export default function DirectoryList(){
    const i = [1,2,3,4,5,6,7,8,9,10]
    return (
      <div className="h-[90vh] w-[70vw] flex flex-col gap-4">
        <div className="h-[10] bg-red-50">
          <h1>Directory List</h1>
        </div>
        <div className="h-[10] bg-red-50">
          <h1>Filters goes here? Or sidebar filter instead depending on the amount</h1>
        </div>
        <div className="flex h-full w-full flex-col gap-2 self-center overflow-hidden rounded-xl border-[1px] border-black p-4">
          {i.map((e, index) => {
            return <DirectoryComponent key={index} className="bg-red-100" />;
          })}
        </div>
        <div>
            Pagination goes here
        </div>
      </div>
    );
}