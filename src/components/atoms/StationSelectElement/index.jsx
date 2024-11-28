import StationOptionElement from "../StationOptionElement/index.jsx";
import {useEffect, useState} from "react";

const StationSelectElement = ({data, name, id, selectedStation, setSelectedStation}) => {

    return (
        <select
            name={name}
            id={id}
            className="border border-gray-300"
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}>

            <option value="" disabled> Select</option>
            {
                data.length > 0 ? (
                    data.map((tube) => (
                        <StationOptionElement
                            key={tube.code + tube.line + tube.name}
                            value={tube.name + ' ' + tube.code}/>
                    ))
                ) : <option disabled>Loading...</option>}
        </select>
    )
}
export default StationSelectElement