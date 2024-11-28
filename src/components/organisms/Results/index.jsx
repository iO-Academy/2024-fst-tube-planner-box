import H3Element from "../../atoms/H3Element/index.jsx";

const Results = ({route, error, destinationTitle, originTitle}) => {
    const routeLine = route.length > 0 ? route[0].line : ''

    let totalTime = route.reduce((total, stop, index) => {
        if (index < route.length - 1) {
            return total + stop.time_to_next
        }
        return total
    }, 0)

    const minutes = (totalTime / 60).toFixed(0) + " minutes " + (totalTime % 60) + " seconds"
    const zoneDifference = route.length > 0 ? Math.abs(route[0].zone - route[route.length - 1].zone) : ''
    const price = (3.99 + zoneDifference * 0.70).toFixed(2)

    if (route.length === 0) {
        return <p className='text-center text-white mt-2'>{error}</p>
    }

    return (
        <div className="mb-10 border-2 border-black border-solid rounded-2xl bg-white m-4 min-h-72 shadow-2xl sm:max-w-2xl sm:mx-auto">
            <div className='flex justify-between mt-2'>
                <H3Element content={'Stops: ' + (route.length - 1)} />
                <H3Element content={'Line: ' + routeLine} />
            </div>
            <div className='text-center'>
                <p className='text-2xl text-cyan-700 m-2'>From: {destinationTitle}</p>
                {
                    route.slice(1, -1).map((stop, index) => (
                        <div key={index}>
                            <p>{stop.name}</p>
                        </div>
                    ))
                }
                <p className='text-2xl text-cyan-700 m-2'>To: {originTitle}</p>
                <p className='mb-2'>{minutes}</p>
                <p className='mb-5'>{'£' + price}</p>
            </div>
        </div>
    )
}

export default Results;
