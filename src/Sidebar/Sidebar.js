import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  useEffect(() => {
    console.log(`Selected ingredients: ${selectedIngredients}`);
  }, [selectedIngredients]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.includes(ingredient)
        ? prevIngredients.filter((item) => item !== ingredient)
        : [...prevIngredients, ingredient]
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Define ingredients array
  const ingredients = ['Inexpensive Meal', 'Meal for 2 (3-Course)', 'McMeal', 'Domestic Beer (Rest)', 'Imported Beer (Rest)', 'Cappuccino (Rest)', 'Coke/Pepsi (Rest)', 'Water (Rest)', 'Milk', 'Loaf of Bread', 'Rice', 'Eggs', 'Cheese', 'Chicken Breasts', 'Beef Round', 'Apples', 'Banana', 'Oranges', 'Tomato',
                       'Potato', 'Onion', 'Lettuce', 'Water (1.5L Store)', 'Bottle of Wine (Store)', 'Domesitc Beer (Store)', 'Imported Beer (Store)', 'Cigarettes 20 Pack', 'One-way Ticket (Local Transport)', 'Monthly Pass (Regular Price)', 'Taxi Start', 'Taxi 1km', 'Taxi 1hour Waiting', 'Gasoline (1L)', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)',
                       'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', '1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 'Fitness Club, Monthly Fee for 1 Adult', 'Tennis Court Rent (1 Hour on Weekend)',
                       'Cinema, International Release, 1 Seat', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 'International Primary School, Yearly for 1 Child', '1 Pair of Jeans (Levis 501 Or Similar)', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', '1 Pair of Nike Running Shoes (Mid-Range)',
                       '1 Pair of Men Leather Business Shoes', 'Apartment (1 Bedroom) in City Center', 'Apartment (1 Bedroom) Outside of Center', 'Apartment (3 Bedrooms) in City Center', 'Apartment (3 Bedrooms) Outside of Center', 'Price per Square Meter to Buy Apartment in City Center',
                       'Price per Square Meter to Buy Apartment Outside of Center', 'Average Monthly Net Salary (After Tax)', 'Mortage Interest Rate in Percentages, for 20 Years Fixed-Rate'];

  // Filter ingredients based on search query
  useEffect(() => {
    const filtered = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredIngredients(filtered);
  }, [searchQuery]);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <div className='text-big'>{collapsed ? 'Categories' : 'Categories'}</div>
      </button>
      {!collapsed && (
        <div className="content">
          <div className="ingredient-list">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className='rounded'
            />
            <div className="ingredient-container">
              {filteredIngredients.map((ingredient) => (
                <label key={ingredient}>
                  <input
                    type="checkbox"
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() => handleIngredientClick(ingredient)}
                  />
                  {ingredient}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
