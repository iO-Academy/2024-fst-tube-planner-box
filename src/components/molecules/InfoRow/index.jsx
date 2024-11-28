import H3Element from "../../atoms/H3Element/index.jsx";

const InfoRow = ({ numStops, line }) => {
    return (
        <>
            <div className="flex flex-row justify-between p-4">
                <H3Element content={numStops} />
                <H3Element content={line} />
            </div>
        </>
    )
}

export default InfoRow