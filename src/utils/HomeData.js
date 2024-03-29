import {
  BannerOne,
  BannerSecond,
  BannerThree,
  ArrowOne,
  ArrowSecond,
  ArrowThree,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  ProductOne,
  ProductTwo,
  ProductThree,
  ProductFour,
  ReviewOne,
  ReviewTwo,
  ReviewThree,
} from "./homeImages";

import {
  Beef,
  Chicken,
  Coffee,
  Dinner,
  Burger,
  Juice,
  Lunch,
  Pork,
  Tea,
} from "./homeSvgs";

// home
const homeBannersData = [
  {
    className: "banner-st",
    title: "Enjoy your meal",
    description: "Good food is wise",
    strong: " medicine",
    background: BannerOne,
  },
  {
    className: "banner-nd",
    title: "Happy your special",
    description: "Love at first",
    strong: " bite",
    background: BannerSecond,
  },
  {
    className: "banner-rd",
    title: "Good food is good mood",
    description: "The belly rules the",
    strong: " mind",
    background: BannerThree,
  },
];

const homeWorkData = [
  {
    img: StepOne,
    step: "1",
    content: "Choose Your Favorite",
    arrow: ArrowOne,
  },
  {
    img: StepTwo,
    step: "2",
    content: "We Deliver Your Meals",
    arrow: ArrowSecond,
  },
  {
    img: StepThree,
    step: "3",
    content: "Cash on Delivery",
    arrow: ArrowThree,
  },
  {
    img: StepFour,
    step: "4",
    content: "Eat And Enjoy",
  },
];

const homeIngredientsData = {
  leftData: [
    {
      title: "Mild Butter",
      content:
        "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
      order: "01",
    },
    {
      title: "Slices Beef",
      content: "Get quality Beef Slices at Tesco. Shop in store or online",
      order: "02",
    },
    {
      title: "Sleek Onion",
      content:
        "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
      order: "03",
    },
  ],
  rightData: [
    {
      title: "Fresh Bread",
      content:
        "Homemade bread is more nutritious than your store-bought variety",
      order: "04",
    },
    {
      title: "Lettuce Leaf",
      content:
        "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds",
      order: "05",
    },
    {
      title: "Glow Cheese",
      content: "Glowfood. Cheese. Is. Unreal! As a cheese fanatic",
      order: "06",
    },
  ],
};

const homeCategoryData = [
  {
    img: Burger,
    name: "breakfast",
  },
  {
    img: Coffee,
    name: "coffee",
  },
  {
    img: Pork,
    name: "pork ham",
  },
  {
    img: Dinner,
    name: "dinner",
  },
  {
    img: Tea,
    name: "tea",
  },
  {
    img: Lunch,
    name: "lunch",
  },
  {
    img: Juice,
    name: "juice",
  },
  {
    img: Chicken,
    name: "grilled chicken",
  },
  {
    img: Beef,
    name: "roast beef",
  },
];

const homeProductsData = [
  {
    img: ProductOne,
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "20",
  },
  {
    img: ProductTwo,
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "34",
  },
  {
    img: ProductThree,
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "15",
  },
  {
    img: ProductFour,
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "60",
  },
  {
    img: ProductOne,
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "20",
  },
  {
    img: ProductTwo,
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "34",
  },
  {
    img: ProductThree,
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "15",
  },
  {
    img: ProductFour,
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "60",
  },
];

const homeReviewsData = [
  {
    img: ReviewOne,
    name: "Peter Parker",
    role: "Actress",
    comment:
      "This is by far the best place you ever found in Town, I highly recommend everyone",
  },
  {
    img: ReviewTwo,
    name: "Jennie",
    role: "Singer",
    comment:
      "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
  },
  {
    img: ReviewThree,
    name: "Adam Khan",
    role: "Marketing Director",
    comment:
      "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent",
  },
];

const homeFigureData = [
  {
    suffix: "+",
    description: "Cups of Coffee",
  },
  {
    suffix: "+",
    description: "Orders Everyday",
  },
  {
    description: "Skilled Professionals",
  },
  {
    description: "Sandwichs at Hour",
  },
];

// detail
const detailTableData = [
  {
    title: null,
    description: "28 cm size",
    ingredients: "Ingredients",
  },
  {
    title: "24",
    description: "28 cm size",
    ingredients: "Egg",
  },
  {
    title: "728",
    description: "Energy",
    ingredients: "Milk Protein",
  },
  {
    title: "1054",
    description: "Calo",
    ingredients: "Sesame",
  },
  {
    title: "68",
    description: "Fat",
    ingredients: "Lactose",
  },
  {
    title: "25",
    description: "Gluxit",
    ingredients: "Gluten",
  },
  {
    title: "548",
    description: "Protein",
    ingredients: "Mustard",
  },
];

export {
  homeBannersData,
  homeWorkData,
  homeCategoryData,
  homeIngredientsData,
  homeReviewsData,
  homeProductsData,
  homeFigureData,
  detailTableData,
};
