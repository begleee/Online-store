import { useEffect, useState } from "react";

export default function Categories({onClick}) {
    const [categories, setCategories] = useState([]);
    const url = 'https://fakestoreapi.com/products/categories';

    useEffect(() => {
        const fetchCategories = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch(error) {
            console.error(error);
            return [];
        }
        }

        fetchCategories(url).then((categories) => {
            setCategories(categories);
        })
    },[])

  return (
    <div className="p-2 border-r h-screen max-w-80 min-w-80">
        <h1 className="font-semibold text-lg border-b p-3">Categories</h1>
        <div className="flex flex-col">
        {
            categories.map((category, key) => (
                <button value={category} onClick={onClick} className={`text-left p-3 transition border-b hover:bg-gray-50`} key={key}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))
        }
        </div>
    </div>
  )
}

Categories.propTypes;