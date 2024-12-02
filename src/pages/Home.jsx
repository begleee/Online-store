import { useState } from "react";
// import React from "react";
import ReactModal from "react-modal";
import Categories from "../components/Categories";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [isFetched, setFetch] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [modalCard, setModalCard] = useState({});

    const fetchCards = async (e) => {
      const res = await fetch(`https://fakestoreapi.com/products/category/${e.target.value}`);
      const data = await res.json();
      setCards(data);
      setFetch(true);
    }
    let content;

    let openModal = () => {
      setOpen(true);
    }
    let closeModal = () => {
      setOpen(false);
    }

    if(isFetched) {
      content = cards.map((card) => (
        <>
        <button onClick={() => {openModal(), setModalCard(card)}} key={card.id} className="border flex flex-col items-center rounded-md p-3 mx-auto px-4 justify-between w-full cursor-pointer hover:border-black transition">
            <img className="max-h-48 min-h-48 object-contain w-full h-full" src={card.image} alt="" />
            <p className="block w-full text-center p-1 whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</p>
        </button>
        </>
      ))
    }

  return (
    <>
      <div className="flex">
        <Categories onClick={fetchCards}/>
        <div className="flex flex-col">
          {(isFetched) ? <h1 className="p-4 font-bold">{cards[0].category.charAt(0).toUpperCase() + cards[0].category.slice(1)}</h1> : 
          <div className="m-5 flex flex-col">
            <h1>Добро пожаловать на мой пет-проект</h1>
            <h1>Выберите категорию</h1>
          </div>}
          <div className="m-5 grid grid-cols-5 box-border gap-4">
            {content}
          </div>

          <ReactModal isOpen={isOpen} >
            <div className="grid grid-cols-2 h-full">
              <div className="flex flex-col border rounded-md h-full p-5">
                <img className="border-b p-3 max-h-72 min-h-72 object-contain w-full h-full" src={modalCard.image} alt="" />
                <p>{modalCard.title}</p>
                <p>Price: {modalCard.price}$</p>
              </div>
              <div>
                <button className="w-fit h-fit px-3 py-1 border rounded-md" onClick={closeModal}>close</button>
              </div>
            </div>
            {console.log(modalCard)}
          </ReactModal>
        </div>
      </div>
    </>
  )
}