import './App.css';
import { Fragment, useEffect, useState } from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';
import Item from './model/Item';
import CartModal from './components/CartModal';

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<Item>>([]);
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const closeModal = () => setOpen(!open);

  function UpdateItems(): void {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setCards(data);
        console.log('GET products');
      });
  }

  useEffect(UpdateItems, [trigger])

  return (
    <Fragment>
    <button onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
        </svg>
      </button>
      <CartModal open={open} closeModal={closeModal}>
        <h2>Cart</h2>
        <div className="cart-inner">
          {[...document.querySelector(".card-container")?.children ?? []].filter((card) => card.querySelector("input")!.value != "0").map((card) => (
            <div key={"cart-" + card.id} id={"cart-" + card.id} style={{backgroundImage: `url(${card.querySelector("img")!.src})`}}>{card.querySelector("input")!.value}</div>
          ))}
        </div>
      </CartModal>
      <CardForm trigger={trigger} setTrigger={setTrigger}/>
      <hr />
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} title={card.title} cost={card.cost} stock={card.stock} discount={card.discount} />
        ))}
      </div>
    </Fragment>
  );
}

export default App