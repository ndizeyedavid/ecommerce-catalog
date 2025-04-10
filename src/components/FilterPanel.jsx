
import { useState, useEffect } from 'react';

function FilterPanel({ onFilterChange }) {
     const [filters, setFilters] = useState({
          categories: [],
          priceRange: [0, 1000],
          minRating: 0,
     });

     const categories = [
          { id: 'electronics', name: 'Electronics' },
          { id: 'clothing', name: 'Clothing' },
          { id: 'books', name: 'Books' },
          { id: 'home', name: 'Home & Kitchen' },
     ];

     const handleCategoryChange = (categoryId) => {
          const updatedCategories = filters.categories.includes(categoryId)
               ? filters.categories.filter(id => id !== categoryId)
               : [...filters.categories, categoryId];

          updateFilters({ ...filters, categories: updatedCategories });
     };

     const handlePriceChange = (e) => {
          updateFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] });
     };

     const handleRatingChange = (rating) => {
          updateFilters({ ...filters, minRating: rating });
     };

     const clearFilters = () => {
          const resetFilters = {
               categories: [],
               priceRange: [0, 1000],
               minRating: 0,
          };
          updateFilters(resetFilters);
     };

     const updateFilters = (newFilters) => {
          setFilters(newFilters);
          if (onFilterChange) {
               onFilterChange(newFilters);
          }
     };

     return (
          <div className="w-[300px] border-r border-b border-black/10 h-fit p-4 flex flex-col gap-6">
               <h2 className="text-xl font-bold">Filters</h2>

               {/* Category Filter */}
               <div className="filter-section">
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <div className="flex flex-col gap-2">
                         {categories.map(category => (
                              <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                                   <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary"
                                        checked={filters.categories.includes(category.id)}
                                        onChange={() => handleCategoryChange(category.id)}
                                   />
                                   <span>{category.name}</span>
                              </label>
                         ))}
                    </div>
               </div>

               {/* Price Range Filter */}
               <div className="filter-section">
                    <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                    <div className="flex flex-col gap-2">
                         <input
                              type="range"
                              min="0"
                              max="1000"
                              value={filters.priceRange[1]}
                              className="range range-primary"
                              onChange={handlePriceChange}
                         />
                         <div className="flex justify-between">
                              <span>${filters.priceRange[0]}</span>
                              <span>${filters.priceRange[1]}</span>
                         </div>
                    </div>
               </div>

               {/* Rating Filter */}
               <div className="filter-section">
                    <h3 className="text-lg font-semibold mb-2">Minimum Rating</h3>
                    <div className="rating rating-lg">
                         {[1, 2, 3, 4, 5].map(star => (
                              <input
                                   key={star}
                                   type="radio"
                                   name="rating"
                                   className="mask mask-star-2 bg-orange-400"
                                   checked={filters.minRating === star}
                                   onChange={() => handleRatingChange(star)}
                              />
                         ))}
                    </div>
                    {filters.minRating > 0 && (
                         <p className="mt-1 text-sm">{filters.minRating} stars & above</p>
                    )}
               </div>

               {/* Clear Filters Button */}
               <button
                    className="btn btn-outline btn-error mt-auto"
                    onClick={clearFilters}
               >
                    Clear All Filters
               </button>
          </div>
     );
}

export default FilterPanel;
