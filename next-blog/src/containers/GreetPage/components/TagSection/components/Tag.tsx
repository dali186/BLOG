const Tag = ({ name, color }: any) => {

    return (
        <div className={`inline-block text-gray-600 px-2 py-1 rounded-lg text-sm font-semibold font-dot ${color}`}>
            {name}
        </div>
    )
}

export default Tag;