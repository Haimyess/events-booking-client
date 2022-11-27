/** @format */

import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/searchBar.css";
// import { EventsContext } from "../EventsContext";

// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  // const [events, setEvents] = useContext(EventsContext);
  const [allEvents, setAllEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getallEvents = async () => {
      try {
        const res = await fetch("/api/events/all");
        const data = await res.json();
        // console.log(data);

        setAllEvents(data);
      } catch (err) {
        console.log(err);
      }
    };
    getallEvents();
  }, []);

  //   console.log(events);

  const handleSearch = (e) => {
    setSearch(e);
    const searchFilter = allEvents.filter(
      (event) => event.event_name.toLowerCase().includes(search.toLowerCase())
      // event.event_info.toLowerCase().includes(search.toLowerCase())
      // event.event_type.toLowerCase().includes(search.toLowerCase()) ||
    );
    setFilteredEvents(searchFilter);
    // console.log(filteredEvents);
  };

  // console.log(filteredEvents);

  // ---------------------------------------------------------------------------
  // Fetch whenever the user clicks in the input and redirect to the search page.
  {
    /* 1.get the input 
      2.fetch data
      3.onsubmit/enter, redirect to search page  
  */
  }
  // ---------------------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUrl(`/api/events/search?query=${search}`);
    navigate(
      // "/search",

      `/search?q=${search}`,
      { state: { search } }
    );
    console.log(search);
    // try {
    //   const res = await fetch(`/api/events/search?q=${search}`);
    //   const data = await res.json();
    //   setSearchEvents(data);
    // } catch (err) {
    //   console.log(err);
    // }

    // fetch(`/api/events/search?q=${search}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setSearchEvents(data);
    //   });
  };

  return (
    <>
      <div className='search-wrapper'>
        <form className='search-form' onSubmit={handleSubmit}>
          <SearchIcon sx={{ color: "#b8b5b5", marginLeft: ".5rem" }} />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type='text'
            name=''
            id=''
            placeholder='Search...'
          />
        </form>

        {/* <SearchOutlinedIcon /> */}
        {search !== "" ? (
          <div className='search-container'>
            <p>{/* <Link to=''>See more...</Link> */}</p>
            {/*We use this to limit how many results we are goiing t display in the data search div = .slice(0, 5) */}
            {filteredEvents.map((event) => {
              return (
                <div className='search-event-wrapper' key={event.event_id}>
                  <Link
                    className='search-event-link'
                    to={`/event/${event.event_name}`}>
                    {event.event_name}
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SearchBar;
