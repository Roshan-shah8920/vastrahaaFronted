import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Banner from '../Banner/Banner'
import AppContext from '../../Context/AppContext'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    const { setFilterData, product, logout, isAuthenticated, cart } = useContext(AppContext)
    const [showDropdown, setShowDropdown] = useState(false)
    const [womenDropdown, setWomenDropdown] = useState(false)
    const [kidsDropdown, setKidsDropdown] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleToggle = () => {
        setShowDropdown(!showDropdown)
    }

    const womenToggle = () => {
        setWomenDropdown(!womenDropdown)
    }

    const filterbyCategory = (cat) => {
        setFilterData(product?.filter((data) => data?.category?.toLowerCase() === cat.toLowerCase()))
        setIsMenuOpen(false)
        setShowDropdown(false)
        setWomenDropdown(false)
        setKidsDropdown(false)
    }

    const submitHandeler = (e) => {
        e.preventDefault();
        navigate(`/product/search/${searchTerm}`)
        setSearchTerm("")
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className="navbar sticky">
                <Link to={"/"} className="img">
                    <img src="image.png" alt="Logo" />
                </Link>

                {/* Hamburger Menu */}
                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Men Dropdown */}
                <ul className={`list ${isMenuOpen ? "open" : ""}`}>
                    <li onClick={handleToggle} style={{ cursor: "pointer", position: "relative" }}>
                        Men {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        {showDropdown && (
                            <ul className="submenu">
                                <Link to={"/mens-Shirt"} className='items' onClick={() => filterbyCategory("t-shirts")}>T-Shirts</Link>
                                <Link to={"/mens-products"} className='items' onClick={() => filterbyCategory("Jeans mens")}>Jeans mens</Link>
                                <li className='items' onClick={() => filterbyCategory("Blazers")}>Blazers</li>
                                <li className='items' onClick={() => filterbyCategory("suits")}>Suits</li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Women Dropdown */}
                <ul className={`list ${isMenuOpen ? "open" : ""}`}>
                    <li onClick={womenToggle} style={{ cursor: "pointer", position: "relative" }}>
                        Women {womenDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        {womenDropdown && (
                            <ul className="submenu">
                                <Link to={"womens-products"} className='items' onClick={() => filterbyCategory("Jeans women")}>Jeans women</Link>
                                <Link to={"/womens-Shirt "} className='items' onClick={() => filterbyCategory("tops")}>Shirt</Link>
                                <li className='items' onClick={() => filterbyCategory("dresses")}>Dresses</li>
                                <li className='items' onClick={() => filterbyCategory("trousers")}>Trousers</li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Kids Dropdown */}
                <ul className={`list ${isMenuOpen ? "open" : ""}`}>
                    <li onClick={() => setKidsDropdown(!kidsDropdown)} style={{ cursor: "pointer", position: "relative" }}>
                        Kids {kidsDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        {kidsDropdown && (
                            <ul className="submenu">
                                <li className='items' onClick={() => filterbyCategory("kids t-shirts")}>T-Shirts</li>
                                <li className='items' onClick={() => filterbyCategory("kids jeans")}>Jeans</li>
                                <li className='items' onClick={() => filterbyCategory("kids jackets")}>Jackets</li>
                                <li className='items' onClick={() => filterbyCategory("kids suits")}>Suits</li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Search Box */}
                <form onSubmit={submitHandeler} className={`search-box ${isMenuOpen ? "open" : ""}`}>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder='Search'
                    />
                    <CiSearch className='icon' />
                </form>

                {/* User Section */}
                <div className={`user ${isMenuOpen ? "open" : ""}`}>
                    {isAuthenticated ? (
                        <>
                            <Link to={"/cart"} type="button" className="btn btn-primary position-relative">
                                <FaCartArrowDown />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart?.[0]?.items?.length || 0}
                                </span>
                            </Link>
                            <Link to={"/profile"} className='btn btn-primary mx-3'>Profile</Link>
                            <button className='btn btn-danger mx-3' onClick={() => {
                                logout()
                                navigate("/")
                                setIsMenuOpen(false)
                            }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to={"/login"} className='btn btn-primary mx-3'>Login</Link>
                            <Link to={"/register"} className='btn btn-primary mx-3'>Register</Link>
                        </>
                    )}
                </div>
            </div>

            <Banner />
        </>
    )
}

export default Navbar
