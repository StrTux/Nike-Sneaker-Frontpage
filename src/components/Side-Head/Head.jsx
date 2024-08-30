import React from 'react'

const Head = () => {
    return (
        <main>
            <div className='shoe-image'>
                <img  className='ml-auto mt-24' src="/images/shoe_image.png" alt="shoes" />
            </div>
            <div className='-mt-42'>
                <h1 className='heading text-4xl font-bold mt-36 p-24 '>YOUR FEET DESERVE THE BEST</h1>
                <div class=" w-[348px] h-[97px] p-2.5 mt-[-82px] ml-[92px]">
                    <p>WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>

            </div>

            <div className='ml-24 p-2'>
                <button class="bg-custom-purple text-white px-6 py-1.5 border-2 border-solid border-white rounded-md">
                    Shop Now
                </button>
                <button className='Category bg-zinc-900 bg-transparent text-white px-6 py-1.5 border-2 border-solid border-white rounded-md'>Category</button>

            </div>
        </main>
    )
}

export default Head