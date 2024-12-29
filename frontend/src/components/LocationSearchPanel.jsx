import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props);
    //sample array for location
    const locations = [
        "24B,Near Aggarwal's cafe, Anshul coding School,Delhi",
        "68D,Near Titiksha Pvt. Limited,National Park,Ghaziabad",
        "206C,Near K's institute,Monuments Hub,Noida",
        "75F,Near Shastri park,National informatics Center,New Delhi",
    ]
    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function (elem,idx) {
                    return <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-centermy-2 items-center justify-start my-4'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }

            

        </div>
    )
}

export default LocationSearchPanel