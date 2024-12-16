import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      const newItemObj = {
        id: Math.random().toString(),
        content: newItem,
        color: "lightblue",
      };
      setItems([...items, newItemObj]);
      setNewItem("");
      setIsAdding(false);
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setNewItem(items[index].content);
    setIsAdding(true);
  };

  const handleSaveEdit = () => {
    if (newItem.trim() && editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex].content = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
      setNewItem("");
      setIsAdding(false);
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, idx) => idx !== index));
  };

  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index);
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(draggedItemIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      editingIndex !== null ? handleSaveEdit() : handleAddItem();
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4">
      {!isAdding && (
        <button
          onClick={() => setIsAdding(true)}
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
        >
          Add Todo
        </button>
      )}
      {isAdding && (
        <div className="mb-4 text-center flex items-center space-x-3">
          <input
            type="text"
            value={newItem}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Yangi vazifa..."
            className="p-3 w-3/4 mb-3 border text-gray-500 rounded-lg border-gray-300 outline-none"
          />
          <button
            onClick={editingIndex !== null ? handleSaveEdit : handleAddItem}
            className="p-3 bg-green-700 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            {editingIndex !== null ? "Saqlash" : "Qo'shish"}
          </button>
        </div>
      )}
      <div className="p-4 rounded-lg min-h-[200px] max-h-[250px] overflow-y-auto custom-scrollbar">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="my-2 p-4 text-white text-center rounded-lg cursor-grab transition-all duration-200 ease-in-out shadow-lg"
            style={{ backgroundColor: item.color }}
          >
            <div className="flex justify-between items-center">
              <span>{item.content}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditItem(index)}
                >
                  <FaEdit 
                  className="text-yellow-500 hover:text-yellow-600"
                  />
                </button>
                <button
                  onClick={() => handleDeleteItem(index)}
                >
                  <FaTrash
                    className="text-red-500 hover:text-red-600"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
