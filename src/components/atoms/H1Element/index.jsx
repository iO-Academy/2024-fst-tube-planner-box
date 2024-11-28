const H1Element = ({ content1, content2 } ) => {
    return (
        <h1 className="text-center m-5 text-4xl font-extrabold text-gray-900">{content1}
            <mark
                className="text-white bg-cyan-700 rounded p-2">{content2}</mark>
        </h1>
    )
}

export default H1Element