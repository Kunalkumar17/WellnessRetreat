import React, { useEffect, useState } from 'react';
import RetreatCard from '../components/RetreatCard';

function Retreats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState(''); // Add state for filter type

  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    // Fetch all data when the component mounts
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch data with search and filter query
  const fetchFilteredData = async (query, type) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${query}&filter=${type}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setCurrentPage(1); // Reset to the first page whenever new data is fetched
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input changes
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    fetchFilteredData(value, filterType);
  };

  // Handle filter type changes
  const handleFilterType = (event) => {
    const type = event.target.value;
    setFilterType(type);
    fetchFilteredData(searchTerm, type);
  };

  // Calculate paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id='retreats'>
      <h1 className='font-bold text-3xl w-full font-montserrat my-4 border-2 p-4 rounded-2xl border-black bg-green-100'>Choose from A Wide Range Of Retreats</h1>
      <div className='lg:flex justify-between'>
        <div className='gap-4 flex'>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className='p-3 my-2 border-black border-2 rounded-3xl'
        />
          <select
            value={filterType}
            onChange={handleFilterType}
            className='border-2 px-6 border-black rounded-3xl my-2'
          >
            <option value="">Filter By Type</option>
            <option value="Yoga">Yoga</option>
            <option value="Meditation">Meditation</option>
            <option value="Wellness">Wellness</option>
          </select>
        </div>
        <div className='flex gap-2 my-3'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='border-2 px-6 border-black rounded-xl hover:bg-green-100'
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
          className='border-2 px-6 border-black rounded-xl hover:bg-green-100'
        >
          Next
        </button>
      </div>
      </div>
      {error && <div className='font-bold'>No Retreats Found</div>}
        <section className='flex flex-wrap gap-20'>
          {paginatedData.map((item) => (
            <RetreatCard key={item.id} {...item}/>
          ))}
        </section>
      </section>
  );
}

export default Retreats;
