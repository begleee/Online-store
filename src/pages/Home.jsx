import { useState } from "react";
// import React from "react";
import ReactModal from "react-modal";
import Categories from "../components/Categories";

ReactModal.setAppElement("#root");

export default function Home() {
  const [cards, setCards] = useState([]);
  const [isFetched, setFetch] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [modalCard, setModalCard] = useState({});
  const [isAddedd, setAdded] = useState([]);

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

    let addToTheList = (cardId) => {
      if (checkArray(cardId)) setAdded(isAddedd.filter((i) => i !== cardId));
      else setAdded([...isAddedd, cardId]);
      console.log(isAddedd);
    }

    let checkArray = (cardId) => {
      if(isAddedd.includes(cardId)) return true;
    }

    if(isFetched) {
      content = cards.map((card) => (
        <>
        <button onClick={() => {openModal(), setModalCard(card)}} key={card.id} className="border flex flex-col items-center rounded-md p-3 mx-auto px-4 justify-between w-full cursor-pointer hover:border-black transition duration-200">
            <img className="max-h-48 min-h-48 object-contain w-full h-full" src={card.image} alt="" />
            <p className="block w-full text-center p-1 whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</p>
            <p>{card.price}$</p>
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

          <ReactModal onRequestClose={closeModal} 
          style={{
            content:{
              width: "25%",
              margin: "auto",
              borderRadius: "10px",
              overflow: "visible",
            },
          }}
          isOpen={isOpen} >
            <div className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between">
                  <button className={`w-fit h-fit px-3 py-1 border-b transition
                    ${(checkArray(modalCard.id)) ? 'border-red-500 text-red-500 hover:border-red-200' : 'border-green-500 text-green-500 hover:border-green-200'}
                    `} onClick={() => {addToTheList(modalCard.id)}}>{(checkArray(modalCard.id) ? "delete card" : "add card")}</button>
                  <button className="w-fit h-fit px-3 py-1 border-b hover:border-b-black transition" onClick={closeModal}>close</button>
                </div>
                <img className="border-b p-3 max-h-72 min-h-72 object-contain w-full h-full" src={modalCard.image} alt="" />
                <p className="p-2 border-b font-bold">{modalCard.title}</p>
                <p className="p-2 border-b"><b>Price:</b> {modalCard.price}$</p>
                <div className="p-2">
                  <h1 className="font-bold">Description:</h1>
                  <p>{modalCard.description}</p>
                </div>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    </>
  )
}