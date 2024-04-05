import React, { useEffect, useState } from "react";
import style from "./nav.module.css";
import { Outlet } from "react-router-dom";
import { MdOutlineStorage } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { fetchUpcoming, selector } from "../Reducers/UpcomingReducer";

function Nav() {
  const [search, setSearch] = useState(false);
  const [res, setRes] = useState("");
  const [showRes, setShowRes] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(selector);

  const handleSearch = (e) => {
    const term = e.target.value;
    setRes(term);
    if (term.trim() !== "") {
      if (data.data.events) {
        const filteredData =
          data.data &&
          data.data.events.filter((event) =>
            event.eventName.toLowerCase().includes(term.toLowerCase())
          );
        setShowRes(filteredData);
        setSearch(true);
      }
    } else {
      setShowRes([]);
      setSearch(false);
    }
  };

  useEffect(() => {
    dispatch(fetchUpcoming());
  }, [dispatch]);

  return (
    <>
      <nav>
        <div className={style.top}>
          <div className={style.leftSection}>
            <h2>BookUsNow</h2>
          </div>
          <div className={style.rightSection}>
            <div className={style.left}>
              <div className={style.cate}>
                <button>
                  <MdOutlineStorage />
                  Categories
                </button>
              </div>
              <div className={style.inp}>
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="DJI phantom"
                />
                <span>
                  <TbSearch />
                </span>
                {search && (
                  <div className={style.list}>
                    {showRes.map((data, i) => (
                      <li key={i} onClick={() => setSearch(false)}>
                        {data.eventName}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={style.right}>
              <div className={style.fav}>
                <CiHeart />
                <h4 className={style.favText}>Favortes</h4>
              </div>
              <button className={style.user}>
                <FaRegUser />
              </button>
              <button className={style.signIn}>Sign In</button>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.location}>
            <span>
              <CiLocationOn />
            </span>
            <span>Mumbai ,India</span>
            <span>
              <MdNavigateNext />
            </span>
          </div>
          <div className={style.showTypes}>
            <ul>
              <li>Live Shows</li>
              <li>Streams </li>
              <li>Movies</li>
              <li>Plays</li>
              <li>Events</li>
              <li>Activities</li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
