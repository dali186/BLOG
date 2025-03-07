import { useEffect, useState } from "react";
import { randomCategoryColorPicker } from "@/utils/article";

const Tag = ({ name }: any) => {
    const [color, setColor] = useState('bg-blue-300');

    useEffect(() => {
        const newColor = randomCategoryColorPicker();
        setColor(newColor);
        console.log(newColor);
    }, [])

    return (
        <div className={`inline-block text-gray-600 px-2 py-1 rounded-lg text-sm font-semibold font-dot ${color}`}>
            {name}
        </div>
    )
}

export default Tag;