import { createContext, useState } from "react";

export const FilterContext = createContext();

function FilterProvider({ children }) {
  const [prevName, setPrevName] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [prevRate, setPrevRate] = useState("");
  const [prevSearch, setPrevSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedDrop, setSelectedDrop] = useState("Featured");
  const [nameActive, setNameActive] = useState(null);

  const [isDisplay, setIsDisplay] = useState(true)
 
  const [filter,setFilter] =useState({
    _limit:16,
    _page:1,

  })


  const handlePrevFilter = (type, value) => {
    switch (type) {
      case "name":
        setPrevPrice(null);
        setPrevRate(null);
        setPrevSearch(null)
        setSelectedDrop("Featured");

        break;
/*   case "price":
        setPrevPrice(value);
        setPrevRate(null);
        setSelectedDrop("Featured");
        setPrevSearch(null)
        break;
      case "rate":
        setPrevRate(value);
        setPrevPrice(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        break;
      case "search":
        setPrevName(null);
        setPrevPrice(null);
        setPrevRate(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        setNameActive(null);
        break;
      case "sort":
        setPrevPrice(null);
        setPrevRate(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        break;
        case "drop":
          setSelectedDrop(value); */
      case "pagination":
        setPrevName(null);
        setSelectedDrop("Featured");
        break;
        break; 
      default:
        break;
    }

    return {
      prevName,
      prevPrice,
      prevRate,
      prevSearch,
      selectedRadio,
      selectedDrop,
      nameActive,
      setPrevName,
      setPrevPrice,
      setPrevRate,
      setPrevSearch,
      setSelectedRadio,
      setSelectedDrop,
      setNameActive,
    };
  };

  return (
    <FilterContext.Provider value={{ handlePrevFilter, filter,setFilter,setPrevSearch,isDisplay, setIsDisplay }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
