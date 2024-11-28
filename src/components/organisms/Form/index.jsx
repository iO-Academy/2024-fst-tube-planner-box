import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
import {useEffect, useState} from "react";

const Form = ({handleSubmit, selectedDestinationStation, selectedOriginStation, setSelectedDestinationStation, setSelectedOriginStation}) => {

    const [data, setData] = useState([])
    const [query] = useState('http://localhost:3000')

    const filteredDestinationData = data.filter(item => item.name + ' ' + item.code !== selectedOriginStation)
    const filteredOriginData = data.filter(item => item.name + ' ' + item.code !== selectedDestinationStation)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(query)
            const tubes = await response.json()
            setData(tubes)
        }
        getData()
    }, [])

    return (
        <form onSubmit={handleSubmit} className="border-2 border-solid border-black rounded-2xl flex flex-col p-4 bg-white m-4 shadow-2xl sm:max-w-2xl sm:mx-auto">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement data={filteredDestinationData} name="from" id="from" selectedStation={selectedDestinationStation}
                                  setSelectedStation={setSelectedDestinationStation}/>
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement data={filteredOriginData} name="to" id="to"
                                  setSelectedStation={setSelectedOriginStation} selectedStation={selectedOriginStation}/>
            <SubmitButtonElement />
        </form>

)
}

export default Form
