import StoppeTrio from './images/stoppe-trio.jpg';
import Smash from './images/smash.jpg';
import VeggieFlight from './images/veggie-flight.jpg';
import BucketOfBalls from './images/bucket-of-balls.jpg';
import EggplantStack from './images/eggplant-stack.jpg';
import Tortellini from './images/tortellini.jpg';
import BakedZiti from './images/baked-ziti.jpg';
import Panino from './images/panino.jpg';
import PastaFagioli from './images/pasta-fagioli.jpg';
import PastaAglia from './images/pasta-aglia.png';
import CapreseSalad from './images/caprese-salad.jpg';
import StoppeSalad from './images/stoppe-salad.jpg';
import Focaccia from './images/focaccia.jpg';
import Polenta from './images/polenta.jpg';
import WhiteBeanRagu from './images/white-bean-ragu.jpg';
import FiveBall from './images/five-ball.jpg';
import BakedMozzarella from './images/baked-mozz.png';
import CrabBalls from './images/crab-balls.jpg';
import Calamari from './images/calamari.jpg';
import Cappuccino from './images/cappuccino.png';
import PastaBowl from './images/pasta-bowl.jpg';
import Cake from './images/cake.jpg';
import SpicyFriedShrimp from './images/spicy-fried-shrimp.jpg';
import Scampi from './images/scampi.jpg';
import VeganSmash from './images/vegan-smash.jpg';
import VeganFiveBall from './images/five-ball-vegan.jpg';
import { Category } from './menu-types';

const choiceOfSide = {
  name: 'Choice of Side',
  choices: [
    { name: 'Creamy Polenta', gf: true, vegetarian: true, selection: true },
    { name: 'White Bean Ragu', gf: true, vegan: true, selection: true },
    { name: 'Penne Pasta', vegan: true, selection: true },
    { name: 'Gluten-free Penne', vegan: true, gf: true, selection: true },
    { name: 'Linguine', vegan: true, selection: true },
  ],
};

const addonMeatballs = {
  name: 'Optional Meatballs',
  choices: [
    { name: "Nonna's Traditional Italian", extra: 2, addition: true },
    {
      name: 'Sausage Pepper & Onions',
      extra: 2,
      gf: true,
      addition: true,
    },
    { name: 'Sausage', extra: 2, gf: true, addition: true },
    { name: 'Chicken Marsala', extra: 2, gf: true, addition: true },
    {
      name: 'Chicken Parmigiana',
      extra: 2,
      gf: true,
      addition: true,
    },
    {
      name: 'Chicken Buffalo Bleu',
      extra: 2,
      gf: true,
      addition: true,
    },
    {
      name: 'Vegetarian',
      extra: 2,
      gf: true,
      vegetarian: true,
      addition: true,
    },
    {
      name: 'Vegan',
      extra: 2,
      gf: true,
      vegan: true,
      addition: true,
    },
    { name: 'Spicy Pork', extra: 2, addition: true },
    {
      name: 'Mac & Cheese Meatball',
      extra: 2,
      vegetarian: true,
      addition: true,
    },
    { name: 'Jeffy’s Crab Ball', extra: 3, addition: true },
    { name: 'Gator Meatball', extra: 3, addition: true },
    {
      name: 'Polenta Ball',
      extra: 2,
      gf: true,
      vegetarian: true,
      addition: true,
    },
    {
      name: 'Eggplant Zucchini Quinoa',
      extra: 2,
      gf: true,
      vegan: true,
      addition: true,
    },
  ],
};

const notPricedMeatballSelection = [
  { name: "Nonna's Traditional Italian", selection: true },
  { name: 'Sausage Pepper & Onions', gf: true, selection: true },
  { name: 'Sausage', gf: true, selection: true },
  { name: 'Chicken Marsala', gf: true, selection: true },
  { name: 'Chicken Parmigiana', gf: true, selection: true },
  { name: 'Chicken Buffalo Bleu', gf: true, selection: true },
  {
    name: 'Vegetarian',
    gf: true,
    vegetarian: true,
    selection: true,
  },
  { name: 'Vegan', gf: true, vegan: true, selection: true },
  { name: 'Spicy Pork', selection: true },
  {
    name: 'Mac & Cheese Meatball',
    vegetarian: true,
    selection: true,
  },
  { name: 'Jeffy’s Crab Ball', extra: 3, selection: true },
  { name: 'Gator Meatball', extra: 3, selection: true },
  {
    name: 'Polenta Ball',
    gf: true,
    vegetarian: true,
    selection: true,
  },
  {
    name: 'Eggplant Zucchini Quinoa',
    gf: true,
    vegan: true,
    selection: true,
  },
];

const notPricedMeatballAdditions = [
  { name: "Nonna's Traditional Italian", addition: true },
  { name: 'Sausage Pepper & Onions', gf: true, addition: true },
  { name: 'Sausage', gf: true, addition: true },
  { name: 'Chicken Marsala', gf: true, addition: true },
  { name: 'Chicken Parmigiana', gf: true, addition: true },
  { name: 'Chicken Buffalo Bleu', gf: true, addition: true },
  {
    name: 'Vegetarian',
    gf: true,
    vegetarian: true,
    addition: true,
  },
  { name: 'Vegan', gf: true, vegan: true, addition: true },
  { name: 'Spicy Pork', addition: true },
  {
    name: 'Mac & Cheese Meatball',
    vegetarian: true,
    addition: true,
  },
  { name: 'Jeffy’s Crab Ball', extra: 3, addition: true },
  { name: 'Gator Meatball', extra: 3, addition: true },
  {
    name: 'Polenta Ball',
    gf: true,
    vegetarian: true,
    addition: true,
  },
  {
    name: 'Eggplant Zucchini Quinoa',
    gf: true,
    vegan: true,
    addition: true,
  },
];

const gemChoice = {
  name: "Iana's Gem (fried egg)",
  extra: 1,
  gf: true,
  addition: true,
};

const addOnGem = {
  name: 'Add-on',
  choices: [gemChoice],
};

const addOnGemAndShrimp = {
  name: 'Add-on',
  choices: [
    gemChoice,
    {
      name: 'Fried Shrimp',
      extra: 5,
      gf: true,
      addition: true,
    },
    {
      name: 'Sauteed Shrimp',
      extra: 5,
      gf: true,
      addition: true,
    },
  ],
};

const subCapreseSalad = {
  name: 'Substitute Caprese Salad',
  extra: 1.5,
  vegetarian: true,
  gf: true,
  addition: true,
};

const addOnGemAndSubSalad = {
  name: 'Add-on',
  choices: [gemChoice, subCapreseSalad],
};

const glutenFreePastaChoice = {
  name: 'Alternative pasta',
  gf: true,
  choices: [{ name: 'Gluten-free penne', vegan: true, gf: true, addition: true }],
};

const choiceOfSauce = {
  name: 'Choice of Sauce',
  choices: [
    {
      name: 'Roasted Tomato',
      gf: true,
      vegan: true,
      selection: true,
    },
    {
      name: 'White Wine Peppers and Onion',
      gf: true,
      vegan: true,
      selection: true,
    },
    {
      name: 'Creamy Provolone',
      gf: true,
      vegetarian: true,
      selection: true,
    },
    {
      name: 'Marsala Mushroom',
      gf: true,
      vegetarian: true,
      selection: true,
    },
    {
      name: 'Isabella’s Signature Pesto',
      gf: true,
      vegan: true,
      selection: true,
    },
    { name: 'Spicy Pork Sauce', gf: true, selection: true },
  ],
};

const veganOption = {
  name: 'Vegan-option',
  choices: [{ name: 'No cheese', vegan: true, addition: true }],
};

export const deserts: Category = {
  category: 'Desserts',
  items: [
    {
      name: 'Artisanal Desserts',
      description: 'From our very own La Differenza Bakery. Subject to availability, please call the store for info.',
      vegetarian: true,
      isPromo: true,
      image: Cake,
      price: 0,
    },
    {
      name: 'Cannoli',
      price: 2.5,
      vegetarian: true,
    },
    {
      name: 'Chef’s Selection Cookies',
      price: 2.95,
      vegetarian: true,
    },
  ],
};

const entrees: Category = {
  category: 'Entrées',
  items: [
    {
      name: 'Meatball Flight',
      price: 20,
      description: '5 balls served with side, focaccia, and fountain drink',
      image: VeggieFlight,
      vegan: true,
      gf: true,
      options: [
        {
          name: 'First Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Second Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Third Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Fourth Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Fifth Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGem,
        choiceOfSide,
        {
          name: 'Choice of Beverage',
          choices: [
            { name: 'Coke', vegan: true, selection: true },
            { name: 'Diet Coke', vegan: true, selection: true },
            { name: 'Sprite', vegan: true, selection: true },
            { name: 'Sweet Tea', vegan: true, selection: true },
            { name: 'Unsweet Tea', vegan: true, selection: true },
            { name: 'Lemonade', vegan: true, selection: true },
          ],
        },
      ],
    },
    {
      name: 'Stoppe Trio',
      price: 13,
      description: '3 Meatballs served with side, stoppe Salad and focaccia',
      image: StoppeTrio,
      vegan: true,
      gf: true,
      options: [
        {
          name: 'First Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Second Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Third Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGemAndSubSalad,
        choiceOfSide,
      ],
    },
  ],
};

const famigliaFavorites: Category = {
  category: 'Famiglia Favorites',
  items: [
    {
      name: 'Eggplant Stack',
      price: 13,
      description: 'Served over Penne or Linguine. Stoppe Salad & focaccia included.',
      image: EggplantStack,
      vegan: true,
      options: [
        {
          name: 'Choice of Pasta',
          choices: [
            { name: 'Linguine', selection: true },
            { name: 'Penne', selection: true },
            { name: 'Gluten-free penne', gf: true, selection: true },
          ],
        },
        addonMeatballs,
        addOnGemAndSubSalad,
        {
          name: 'Vegan-option',
          choices: [{ name: 'No cheese', vegan: true, addition: true }],
        },
      ],
    },
    {
      name: 'Shrimp Scampi',
      price: 16,
      image: Scampi,
      gf: true,
    },
    {
      name: 'Shrimp over polenta',
      price: 15,
      gf: true,
    },
    {
      name: 'Cheese Tortellini',
      price: 13,
      description: 'Pillowy cheese filled pasta in pink sauce with touch of garlic',
      image: Tortellini,
      vegetarian: true,
      options: [addonMeatballs, addOnGemAndSubSalad],
    },
    {
      name: 'Cheese Tortellini tossed with Sausage Meatball in Pink Sauce',
      price: 13,
      options: [addonMeatballs, addOnGemAndSubSalad],
    },
    {
      name: 'Baked Ziti',
      price: 13,
      gf: true,
      vegetarian: true,
      description: 'Tossed with house-made 3 cheese mix, Roasted Tomato Sauce and Mozzarella',
      image: BakedZiti,
      options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice],
    },
    {
      name: 'Pasta Fagioli',
      price: 13,
      description: 'Hearty Vegetarian dish with Linguine, White Bean Ragu, Fresh Herbs and Spices',
      gf: true,
      image: PastaFagioli,
      options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice],
    },
    {
      name: 'Pasta Primavera',
      price: 13,
      description: 'Penne or Linguine tossed with seasonal vegetables in light garlic sauce',
    },
    {
      name: 'Pasta Aglia E Olio',
      price: 12,
      description: 'Linguine tossed with Olive Oil, Red Pepper Flakes, a hint of Anchovies, Fresh Basil and Spices',
      image: PastaAglia,
      options: [addonMeatballs, addOnGemAndSubSalad, glutenFreePastaChoice],
    },
  ],
};

const sandwiches: Category = {
  category: 'Panino or Sandwiches',
  items: [
    {
      name: 'Meatball Smash',
      price: 10,
      description: '2 Meatballs, one style,  on Fresh Ciabatta Roll served with Stoppe Salad',
      vegan: true,
      image: Smash,
      vegImage: VeganSmash,
      options: [
        {
          name: 'Choice of Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGemAndSubSalad,
      ],
    },
    {
      name: 'Grande Smash',
      price: 13,
      description: '3 Meatballs one style on a 8" Asiago Roll served with Stoppe Salad',
      vegan: true,
      options: [
        {
          name: 'Choice of Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGemAndSubSalad,
      ],
    },
    {
      name: "Guy Fieri's DDD Smash",
      price: 13,
      description:
        'Meatballs served on Freshly Baked Ciabatta Roll topped with Mozzarella, Polenta Ball and Gem (Fried Egg)  served with Stoppe Salad',
      vegan: true,
      options: [
        {
          name: 'Choice of Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGemAndSubSalad,
      ],
    },
    {
      name: 'Eggplant Panino',
      price: 11,
      description:
        'Breaded, Seasoned Eggplant topped with Fresh Mozzarella, sauteed peppers, onions, Fresh Arugula on Freshly baked Ciabiatta roll with Pesto Mayo',
      vegetarian: true,
      image: Panino,
      options: [
        {
          name: 'Add-on',
          choices: [subCapreseSalad],
        },
      ],
    },
  ],
};

const bowl: Category = {
  category: 'Create your own bowl',
  items: [
    {
      name: 'Pasta bowl',
      description: 'Pasta with Signature sauces and seasonal vegetables',
      price: 11,
      image: PastaBowl,
      vegan: true,
      options: [choiceOfSauce, addonMeatballs, addOnGemAndShrimp],
    },
    {
      name: 'Polenta bowl',
      description: 'Creamy polenta and seasonal vegetables',
      price: 11,
      vegetarian: true,
      gf: true,
      options: [
        {
          name: 'Seasonal Vegetables',
          maximum: 2,
          choices: [
            { name: 'mushrooms', gf: true, vegan: true, addition: true },
            { name: 'zucchini', gf: true, vegan: true, addition: true },
            { name: 'peppers', gf: true, vegan: true, addition: true },
            { name: 'onions', gf: true, vegan: true, addition: true },
          ],
        },
        addonMeatballs,
        addOnGemAndShrimp,
      ],
    },
  ],
};

const salads: Category = {
  category: 'Salads',
  items: [
    {
      name: 'Stoppe Salad',
      price: 8,
      gf: true,
      vegan: true,
      description:
        'Garden Fresh Arugula, Romaine, Cherry Tomatoes, Red Onions, Roasted Corn tossed with our Red Wine Vinaigrette. Served with Focaccia Bread',
      image: StoppeSalad,
      options: [veganOption],
    },
    {
      name: 'Caprese Salad',
      price: 10,
      gf: true,
      vegetarian: true,
      description:
        'Fresh Mozzarella,Cherry Tomatoes tossed in Pesto and served over bed of greens served with Focaccia Bread',
      image: CapreseSalad,
    },
    {
      name: 'Mediterranean Farro Salad',
      price: 11,
      vegan: true,
      description:
        'Farro,Chick Peas, Tomatoes, onion, olives, Arugula, tossed with Red Wine Vinaigrette, toppped with Feta',
      options: [veganOption],
    },
    {
      name: 'Roasted Vegetable Salad',
      gf: true,
      vegan: true,
      price: 11,
      description:
        'Sauteed seasonal vegetables seasoned with fresh garlic, herbs, served over a bed of greens with Focaccia Bread',
    },
    {
      name: 'Shrimp Salad',
      price: 13,
      description:
        'Garden Fresh Arugula, Romaine, Cherry Tomatoes, Red Onions, Roasted Corn tossed with our Red Wine Vinaigrette. Served with Focaccia Bread',
      options: [
        {
          name: 'Type of shrimp',
          choices: [
            {
              name: 'Fried',
              selection: true,
            },
            {
              name: 'Sauteed',
              selection: true,
            },
          ],
        },
      ],
    },
  ],
};

const sides: Category = {
  category: 'Sides',
  items: [
    {
      name: 'Creamy Polenta',
      price: 6,
      gf: true,
      vegetarian: true,
      image: Polenta,
    },
    {
      name: 'White Bean Ragu',
      price: 6,
      description: 'Cannellini Bean, garlic, fresh Herbs and Seasonings',
      vegan: true,
      gf: true,
      image: WhiteBeanRagu,
    },
    {
      name: 'Linguine or Penne Pasta',
      price: 6,
      description: 'Choice of Pasta tossed with one of our signature sauces',
      gf: true,
      vegan: true,
      options: [
        {
          name: 'Pasta type',
          choices: [
            { name: 'Linguine', selection: true },
            { name: 'Penne', selection: true },
            { name: 'Gluten-free penne', gf: true, selection: true },
          ],
        },
        choiceOfSauce,
      ],
    },
  ],
};

const appetizers: Category = {
  category: 'Appetizers',
  items: [
    {
      name: 'Fried Calamari',
      price: 10,
      image: Calamari,
      gf: true,
    },
    {
      name: 'Spicy Fried Shrimp',
      price: 11,
      gf: true,
      image: SpicyFriedShrimp,
    },
    {
      name: '3 Crab or Gator Balls',
      price: 12,
      image: CrabBalls,
      options: [
        {
          name: 'Choice of Meatball',
          choices: [
            { name: 'Crab Ball', selection: true },
            { name: 'Gator Ball', selection: true },
          ],
        },
      ],
    },
    {
      name: '5 Ball Sampler',
      price: 9,
      image: FiveBall,
      vegan: true,
      gf: true,
      vegImage: VeganFiveBall,
      options: [
        {
          name: 'Choice of Meatballs',
          minimum: 1,
          maximum: 5,
          choices: notPricedMeatballAdditions,
        },
        addOnGem,
      ],
    },
    {
      name: 'Baked Mozzarella',
      price: 8,
      description: 'Served with Crostini',
      image: BakedMozzarella,
      vegetarian: true,
    },
    {
      name: 'Focaccia Pizza',
      price: 9,
      vegan: true,
      image: Focaccia,
      options: [
        {
          name: 'Choice of Toppings',
          choices: [
            {
              name: "Nonna's Traditional Italian",
              extra: 2,
              addition: true,
            },
            {
              name: 'Sausage Pepper & Onions',
              extra: 2,
              gf: true,
              addition: true,
            },
            { name: 'Sausage', extra: 2, gf: true, addition: true },
            {
              name: 'Chicken Parmigiana',
              extra: 2,
              gf: true,
              addition: true,
            },
            {
              name: 'Chicken Buffalo Bleu',
              extra: 2,
              gf: true,
              addition: true,
            },
            {
              name: 'Vegetarian',
              extra: 2,
              gf: true,
              vegetarian: true,
              addition: true,
            },
            {
              name: 'Vegan',
              extra: 2,
              gf: true,
              vegan: true,
              addition: true,
            },
            { name: 'Spicy Pork', extra: 2, addition: true },
            { name: 'Jeffy’s Crab Ball', extra: 3, addition: true },
            { name: 'Gator Meatball', extra: 3, addition: true },
            gemChoice,
            {
              name: 'Mushrooms',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Banana Peppers',
              extra: 1,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Onions',
              extra: 1,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Peppers',
              extra: 1,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Tomatoes',
              extra: 1,
              gf: true,
              vegan: true,
              addition: true,
            },
            { name: 'Anchovies', extra: 1, gf: true, addition: true },
            {
              name: 'Arugula',
              extra: 1,
              gf: true,
              vegan: true,
              addition: true,
            },
          ],
        },
        {
          name: 'Vegan',
          choices: [{ name: 'no cheese', vegan: true, addition: true }],
        },
      ],
    },
    {
      name: 'Garlic Focaccia Sticks',
      price: 7,
      vegan: true,
      options: [
        {
          name: 'Alternative',
          choices: [{ name: 'Vegan-option', vegan: true, addition: true }],
        },
      ],
    },
    {
      name: 'Meatball Lettuce Wrap',
      price: 7,
      vegan: true,
      gf: true,
      options: [
        {
          name: 'Choice of Meatballs',
          choices: notPricedMeatballSelection,
        },
        addOnGem,
      ],
    },
    {
      name: 'Meatball Sliders',
      price: 8,
      vegan: true,
      options: [
        {
          name: 'First Meatball',
          choices: notPricedMeatballSelection,
        },
        {
          name: 'Second Meatball',
          choices: notPricedMeatballSelection,
        },
        addOnGem,
      ],
    },
  ],
};

const buckets: Category = {
  category: 'Bucket of Balls',
  items: [
    {
      name: 'Bucket of Balls',
      price: 25,
      description: '13 Balls one style served with 6 pieces of Focaccia and Sauce',
      vegan: true,
      gf: true,
      image: BucketOfBalls,
      options: [
        {
          name: 'Choice of Meatballs',
          choices: [
            { name: "Nonna's Traditional Italian", selection: true },
            { name: 'Sausage Pepper & Onions', gf: true, selection: true },
            { name: 'Sausage', gf: true, selection: true },
            { name: 'Chicken Marsala', gf: true, selection: true },
            { name: 'Chicken Parmigiana', gf: true, selection: true },
            { name: 'Chicken Buffalo Bleu', gf: true, selection: true },
            {
              name: 'Vegetarian',
              gf: true,
              vegetarian: true,
              selection: true,
            },
            { name: 'Vegan', gf: true, vegan: true, selection: true },
            { name: 'Spicy Pork', selection: true },
            {
              name: 'Mac & Cheese Meatball',
              vegetarian: true,
              selection: true,
            },
            { name: 'Jeffy’s Crab Ball', extra: 12, selection: true },
            { name: 'Gator Meatball', extra: 12, selection: true },
            {
              name: 'Polenta Ball',
              gf: true,
              vegetarian: true,
              selection: true,
            },
            {
              name: 'Eggplant Zucchini Quinoa',
              gf: true,
              vegan: true,
              selection: true,
            },
          ],
        },
      ],
    },
  ],
};

const beverages: Category = {
  category: 'Beverages',
  items: [
    {
      name: 'Coke (fountain drink)',
      price: 2.5,
    },
    {
      name: 'Coke (16oz bottle)',
      price: 2.95,
    },
    {
      name: 'Diet Coke (fountain drink)',
      price: 2.5,
    },
    {
      name: 'Diet Coke (16oz bottle)',
      price: 2.95,
    },
    {
      name: 'Sprite (fountain drink)',
      price: 2.5,
    },
    {
      name: 'Sprite (16oz bottle)',
      price: 2.95,
    },
    {
      name: 'Dr. Pepper',
      description: '16oz Bottle',
      price: 2.95,
    },
    {
      name: 'Diet Dr. Pepper',
      description: '16oz Bottle',
      price: 2.95,
    },
    {
      name: 'Lemonade',
      description: 'fountain soft drink',
      price: 2.5,
    },
    {
      name: 'Sweet Tea',
      description: 'fountain soft drink',
      price: 2.5,
    },
    {
      name: 'Unsweet Tea',
      description: 'fountain soft drink',
      price: 2.5,
    },
    {
      name: 'San Pellegrino',
      description: 'sparkling water',
      price: 3.5,
    },
    {
      name: 'Lorina Blood Orange',
      description: 'Non-alcoholic sparking beverage',
      price: 3.5,
    },
    {
      name: 'Lorina Pink Lemonade',
      description: 'Non-alcoholic sparking beverage',
      price: 3.5,
    },
    {
      name: 'Lorina Lemonade',
      description: 'Non-alcoholic sparking beverage',
      price: 3.5,
    },
    {
      name: 'Espresso',
      price: 3.5,
    },
    {
      name: 'Double Espresso',
      price: 4.5,
    },
    {
      name: 'Cappuccino',
      price: 3.5,
      image: Cappuccino,
    },
    {
      name: 'Iced Cappuccino',
      price: 3.75,
    },
  ],
};

const StandardMenu: Category[] = [
  entrees,
  famigliaFavorites,
  sandwiches,
  bowl,
  salads,
  sides,
  appetizers,
  buckets,
  deserts,
  beverages,
];

export default StandardMenu;
