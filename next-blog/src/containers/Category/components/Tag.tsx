const Category = ({ color, name }) => {
    const sampleClass = 'inline-block bg-[#F4C2C2] text-gray-600 px-2 py-1 rounded-lg text-sm font-semibold';
    const sampleColors = [
        'inline-block bg-[#A2C2E5]', 'inline-block bg-[#A5D8A5]', 'inline-block bg-[#F3E1A1]', 
        'inline-block bg-[#F4B3D1]'
    ];

    return (
        <div className={`inline-block text-gray-600 px-2 py-1 rounded-lg text-sm font-semibold font-dot ${color}`}>
            {name}
        </div>
    )
}

export default Category;