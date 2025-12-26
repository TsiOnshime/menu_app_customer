import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const DrinksSection = ({ items }) => (
  <div className="space-y-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
      🥤 Drinks
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((drink) => (
        <div
          key={drink.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 sm:w-20 sm:h-20 flex items-center justify-center">
              <img
                className="object-cover rounded-lg"
                src={drink.imageUrl}
                alt={drink.name}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">{drink.name}</h3>
              {drink.description && (
                <p className="text-sm sm:text-base text-gray-500">
                  {drink.description}
                </p>
              )}
            </div>
          </div>

          <span className="text-orange-500 font-bold text-lg sm:text-xl">
            {drink.price} Birr
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Section = ({ title, items }) => (
  <div className="space-y-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">{title}</h2>

    {items.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden"
      >
        <div className="w-full h-48 sm:w-56 sm:h-40 flex-shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {item.description}
            </p>
          </div>

          <span className="text-orange-500 text-lg sm:text-xl font-bold mt-4">
            {item.price} Birr
          </span>
        </div>
      </div>
    ))}
  </div>
);


const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "foods"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFoods(items.filter((item) => item.category === "food"));
      setDrinks(items.filter((item) => item.category === "drink"));
    };

    fetchMenu();
  }, []);

  return (
    <div className="bg-[#fff6ef] min-h-screen">
      <header className="bg-white border-b-2 border-orange-500 py-10 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-orange-500">Burger</span>
          <span className="text-gray-900">House</span>
        </h1>
        <p className="text-gray-500 mt-2">Delicious food & refreshing drinks</p>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        <Section title="🍔 Food" items={foods} />
        <DrinksSection items={drinks} />
      </div>
    </div>
  );
};

export default Menu;
