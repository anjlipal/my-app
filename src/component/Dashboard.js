import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <div class="search-bar">
            <input type="text" id="search-input" placeholder="Search..."/>
            <button id="search-button">Search</button>
        </div>
    </section>

    <section>
        <label for="dropdown">Select an Option:</label>
        <select id="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </section>

    <section>
        <h2>Filter Options</h2>
        <div class="filter-options">
            <label for="filter1">
                <input type="checkbox" id="filter1"/> Filter 1
            </label>
            <label for="filter2">
                <input type="checkbox" id="filter2"/> Filter 2
            </label>
            <label for="filter3">
                <input type="checkbox" id="filter3"/> Filter 3
            </label>
        </div>
    </section>
    <main>
    </main>
    </div>
  );
};

export default Dashboard;