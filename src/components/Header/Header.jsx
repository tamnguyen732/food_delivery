import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import BurgerNavbar from "./BurgerNavbar";
import { useHistory } from "react-router-dom";
// material ui icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";
import Logo from "../../assets/svgs/Common/logo.svg";
import queryString from "query-string";
import "./style.scss";
import Cart from 'components/Cart/Cart'
export default function Header() {
  const { getProductList } = useContext(ApiContext);
  const { filter, setFilter } = useContext(FilterContext);

  const [isStickyTop, setIsStickyTop] = useState(false);
  const [isShowBurgerNav, setIsShowBurgerNav] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [totalQnt, setTotalQnt] = useState(0);
  const history = useHistory();
  const showBurgerNav = () => {
    setIsShowBurgerNav(!isShowBurgerNav);
  };

  // handle scroll
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsStickyTop(true);
      } else {
        setIsStickyTop(false);
      }
    };

    window.addEventListener("scroll", scrollShowNav);

    return window.addEventListener("scroll", scrollShowNav);
  }, []);

  const handleToShopView = () => {
 
  };

  return (
    <div>
      <header className={"navbar active"} style={{ display: "block" }}>
        <Container>
          <div className={"navbar__container"}>
            <EmojiFoodBeverageIcon
              onClick={showBurgerNav}
              className="hamburger-btn"
            />

            <div className="navbar__link">
              <img className="navbar__logo" src={Logo} alt="logo" />
            </div>

            <div className="navbar--left">
              <ul className="navbar__list">
                <li
                  className="navbar__item"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <HomeIcon />
                  Home
                </li>
                <li className="navbar__item" onClick={()=>handleToShopView()} >
                  <RestaurantMenuIcon />
                  Order online
                </li>
                <li className="navbar__item">
                  <LibraryBooksIcon />
                  News
                </li>
                <li className="navbar__item">
                  <StoreMallDirectoryIcon />
                  Store locations
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              <div className="navbar__cart">
                <ShoppingCartIcon />
                <div className="navbar__cart-qnt">0</div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <BurgerNavbar isShow={isShowBurgerNav} showBurgerNav={showBurgerNav} />
      <Cart />
    </div>
  );
}
