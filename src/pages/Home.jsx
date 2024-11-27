import { useState } from "react";
import Categories from "../components/Categories";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [isFetched, setFetch] = useState(false);

    const fetchCards = async (e) => {
      const res = await fetch(`https://fakestoreapi.com/products/category/${e.target.value}`);
      const data = await res.json();
      setCards(data);
      setFetch(true);
    }
    let content;

    if(isFetched) {
      content = cards.map((card) => (
        <>
        <div key={card.id} className="flex flex-col border items-center rounded-md p-3 mx-auto px-4 justify-between w-full">
            <img className="max-h-48 min-h-48 object-contain w-full h-full" src={card.image} alt="" />
            <a className="block w-full text-center p-1 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</a>
        </div>
        </>
      ))
    }
  return (
    <>
      <div className="flex">
        <Categories onClick={fetchCards}/>
        <div className="flex flex-col">
          {(isFetched) ? <h1 className="p-2 font-bold">{cards[0].category.charAt(0).toUpperCase() + cards[0].category.slice(1)}</h1> : 
          <div className="m-5 flex flex-col">
            <h1>Добро пожаловать на мой пет-проект</h1>
            <h1>Выберите категорию</h1>
          </div>}
          <div className="m-5 grid grid-cols-5 box-border gap-4">
            {content}
          </div>
        </div>
      </div>
    </>
  )
}