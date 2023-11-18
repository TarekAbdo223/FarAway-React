import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
  //lifting the state up
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleToggleItem={handleToggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
