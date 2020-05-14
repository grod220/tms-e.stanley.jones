import BucketOfBalls from './images/bucket-of-balls.jpg';
import EggplantStack from './images/eggplant-stack.jpg';
import Tortellini from './images/tortellini.jpg';
import BakedZiti from './images/baked-ziti.jpg';
import CapreseSalad from './images/caprese-salad.jpg';
import StoppeSalad from './images/stoppe-salad.jpg';
import FocacciaGrande from './images/focaccia-grande.jpg';
import Polenta from './images/polenta.jpg';
import WhiteBeanRagu from './images/white-bean-ragu.jpg';
import { deserts } from './standard-menu';
import { Category } from './menu-types';

const cateringMeatballChoices = [
  {
    name: "Nonna's traditional with roasted tomato sauce",
    selection: true,
  },
  { name: 'Spicy pork with spicy pork sauce', selection: true },
  {
    name: 'Mac and cheese with roasted tomato and creamy provolone sauce',
    vegetarian: true,
    selection: true,
  },
  {
    name: 'Porcupine with creamy provolone sauce',
    selection: true,
  },
  {
    name: 'Sausage peppers & onions with white wine sauce',
    gf: true,
    selection: true,
  },
  {
    name: 'Sausage ball with creamy provolone sauce',
    gf: true,
    selection: true,
  },
  {
    name: 'Chicken parmigiana with roasted tomato sauce and mozzarella',
    gf: true,
    selection: true,
  },
  {
    name: 'Chicken marsala with marsala mushroom sauce',
    gf: true,
    selection: true,
  },
  {
    name: 'Chicken buffalo bleu with buffalo sauce and bleu cheese crumbles',
    gf: true,
    selection: true,
  },
  { name: 'Lamb with tzatziki sauce', gf: true, selection: true },
  {
    name: 'Vegetarian with signature pesto',
    gf: true,
    vegetarian: true,
    selection: true,
  },
  {
    name: 'Eggplant, zucchini, quinoa with signature pesto',
    gf: true,
    vegetarian: true,
    selection: true,
  },
  {
    name: 'Eggplant, zucchini, quinoa with vegan pesto',
    gf: true,
    vegan: true,
    selection: true,
  },
  {
    name: 'Polenta ball with roasted tomato sauce',
    gf: true,
    vegetarian: true,
    selection: true,
  },
  {
    name: 'Vegan Ball w/ vegan pesto',
    gf: true,
    vegan: true,
    selection: true,
  },
];

const choiceOfPasta = {
  name: 'Choice of Pasta',
  choices: [
    { name: 'Penne', vegan: true, selection: true },
    { name: 'Gluten-free Penne', gf: true, vegan: true, selection: true },
  ],
};
const choiceOfSauce = {
  name: 'Choice of Sauce',
  choices: [
    { name: 'Roasted Tomato', gf: true, vegan: true, selection: true },
    { name: 'Creamy Provolone', gf: true, vegetarian: true, selection: true },
    {
      name: 'White wine with Peppers and Onions',
      vegan: true,
      gf: true,
      selection: true,
    },
    {
      name: 'Isabella’s Signature Pesto',
      gf: true,
      vegetarian: true,
      selection: true,
    },
    { name: 'Vegan Pesto', gf: true, vegan: true, selection: true },
    { name: 'Marsala Mushroom', gf: true, vegetarian: true, selection: true },
    { name: 'Spicy Pork', gf: true, selection: true },
  ],
};

const veganOption = {
  name: 'Vegan-option',
  choices: [{ name: 'No cheese', vegan: true, addition: true }],
};

const specialPackages: Category = {
  category: 'Special packages',
  items: [
    {
      name: 'Italiano Classico',
      price: 119.95,
      description: 'Famiglia favorite entrées. Serves 10',
      options: [
        {
          name: 'Choose entrée',
          choices: [
            {
              name: 'Lasagna Bolognese Rollatini',
              selection: true,
            },
            {
              name: 'Baked Ziti',
              selection: true,
            },
            {
              name: 'Eggplant Stack',
              selection: true,
            },
          ],
        },
        {
          name: 'Choose salad',
          choices: [
            {
              name: 'Stoppe Salad',
              selection: true,
            },
            {
              name: 'Caprese Salad',
              extra: 15,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose dessert',
          choices: [
            {
              name: 'Cookies',
              selection: true,
            },
            {
              name: 'Cannoli',
              extra: 15,
              selection: true,
            },
            {
              name: '½ Cookies & ½ Cannoli',
              extra: 7.5,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose beverage',
          choices: [
            {
              name: 'Bottled Water',
              selection: true,
            },
            {
              name: 'Sweetened Tea',
              selection: true,
            },
            {
              name: 'Unsweetened Tea',
              selection: true,
            },
          ],
        },
      ],
    },
    {
      name: 'Healthier Italian',
      price: 12,
      description: 'Grilled chicken entrées. Serves one. Increase order size below.',
      options: [
        {
          name: 'Choose entrée',
          choices: [
            {
              name: 'Grilled Chicken with Marsala Mushroom Sauce',
              selection: true,
            },
            {
              name: 'Grilled Chicken with Signature Pesto',
              selection: true,
            },
            {
              name: 'Grilled Chicken with Roasted Tomato Sauce',
              selection: true,
            },
          ],
        },
        {
          name: 'Choose side',
          choices: [
            {
              name: "Chef's Recommendation",
              selection: true,
            },
            {
              name: 'White Bean Ragu',
              selection: true,
            },
            {
              name: 'Creamy Polenta',
              selection: true,
            },
            {
              name: 'Penne Pasta',
              selection: true,
            },
          ],
        },
        {
          name: 'Choose salad',
          choices: [
            {
              name: 'Stoppe Salad',
              selection: true,
            },
            {
              name: 'Caprese Salad',
              extra: 1.5,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose dessert',
          choices: [
            {
              name: 'Cookies',
              selection: true,
            },
            {
              name: 'Cannoli',
              extra: 1.5,
              selection: true,
            },
            {
              name: '½ Cookies & ½ Cannoli',
              extra: 0.75,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose beverage',
          choices: [
            {
              name: 'Bottled Water',
              selection: true,
            },
            {
              name: 'Sweetened Tea',
              selection: true,
            },
            {
              name: 'Unsweetened Tea',
              selection: true,
            },
          ],
        },
      ],
    },
    {
      name: 'The Meatball Bar',
      price: 12,
      description: 'Two meatball entrée. Serves one. Increase order size below.',
      options: [
        {
          name: 'Choose first meatball',
          choices: [
            {
              name: 'Traditional Meatballs',
              selection: true,
            },
            {
              name: 'Eggplant Ball',
              selection: true,
            },
            {
              name: 'Chicken Buffalo',
              selection: true,
            },
            {
              name: 'Vegetarian ball',
              selection: true,
            },
            {
              name: 'Vegan ball',
              selection: true,
            },
            {
              name: 'Sausage Ball',
              selection: true,
            },
          ],
        },
        {
          name: 'Choose second meatball',
          choices: [
            {
              name: 'Traditional Meatballs',
              selection: true,
            },
            {
              name: 'Eggplant Ball',
              selection: true,
            },
            {
              name: 'Chicken Buffalo',
              selection: true,
            },
            {
              name: 'Vegetarian ball',
              selection: true,
            },
            {
              name: 'Vegan ball',
              selection: true,
            },
            {
              name: 'Sausage Ball',
              selection: true,
            },
          ],
        },
        {
          name: 'Optional third meatball',
          choices: [
            {
              name: 'Traditional Meatballs',
              extra: 1.5,
              addition: true,
            },
            {
              name: 'Eggplant Ball',
              extra: 1.5,
              addition: true,
            },
            {
              name: 'Chicken Buffalo',
              extra: 1.5,
              addition: true,
            },
            {
              name: 'Vegetarian ball',
              extra: 1.5,
              addition: true,
            },
            {
              name: 'Vegan ball',
              extra: 1.5,
              addition: true,
            },
            {
              name: 'Sausage Ball',
              extra: 1.5,
              addition: true,
            },
          ],
        },
        {
          name: 'Choose side',
          choices: [
            {
              name: "Chef's Recommendation",
              selection: true,
            },
            {
              name: 'White Bean Ragu',
              selection: true,
            },
            {
              name: 'Creamy Polenta',
              selection: true,
            },
            {
              name: 'Penne Pasta',
              selection: true,
            },
          ],
        },
        {
          name: 'Choose salad',
          choices: [
            {
              name: 'Stoppe Salad',
              selection: true,
            },
            {
              name: 'Caprese Salad',
              extra: 1.5,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose dessert',
          choices: [
            {
              name: 'Cookies',
              selection: true,
            },
            {
              name: 'Cannoli',
              extra: 1.5,
              selection: true,
            },
            {
              name: '½ Cookies & ½ Cannoli',
              extra: 0.75,
              selection: true,
            },
          ],
        },
        {
          name: 'Choose beverage',
          choices: [
            {
              name: 'Bottled Water',
              selection: true,
            },
            {
              name: 'Sweetened Tea',
              selection: true,
            },
            {
              name: 'Unsweetened Tea',
              selection: true,
            },
          ],
        },
      ],
    },
  ],
};

const panMeatballs: Category = {
  category: 'Pan Meatballs',
  items: [
    {
      name: '15 meatballs',
      price: 29.95,
      description: 'Half pan, serves 10. Includes sauce and Focaccia.',
      image: BucketOfBalls,
      gf: true,
      vegan: true,
      options: [
        {
          name: 'Choice of Meatball',
          choices: [
            ...cateringMeatballChoices,
            {
              name: 'Crab Balls with pepper remoulade',
              extra: 9,
              selection: true,
            },
            {
              name: 'Gator Balls with spicy lemon aioli',
              extra: 9,
              selection: true,
            },
          ],
        },
      ],
    },
    {
      name: '30 meatballs',
      price: 59.95,
      description: 'Full pan, serves 20. Includes Sauce and Focaccia.',
      image: BucketOfBalls,
      gf: true,
      vegan: true,
      options: [
        {
          name: 'Choice of Meatball',
          choices: [
            ...cateringMeatballChoices,
            {
              name: 'Crab Balls with pepper remoulade',
              extra: 13,
              selection: true,
            },
            {
              name: 'Gator Balls with spicy lemon aioli',
              extra: 13,
              selection: true,
            },
          ],
        },
      ],
    },
  ],
};

const famigliaFavorites: Category = {
  category: 'Famiglia Favorites',
  items: [
    {
      name: 'Baked Ziti (half-pan)',
      price: 50,
      description: 'Serves 10',
      vegetarian: true,
      image: BakedZiti,
    },
    {
      name: 'Baked Ziti (full-pan)',
      price: 90,
      description: 'Serves 25',
      vegetarian: true,
      image: BakedZiti,
    },
    {
      name: 'Eggplant Stack (half-pan)',
      price: 60,
      description: 'Serves 10',
      image: EggplantStack,
      vegetarian: true,
    },
    {
      name: 'Eggplant Stack (full-pan)',
      price: 115,
      description: 'Serves 20',
      image: EggplantStack,
      vegetarian: true,
    },
    {
      name: 'Cheese Tortellini (half-pan)',
      price: 65,
      description: 'Serves 10',
      vegetarian: true,
      image: Tortellini,
    },
    {
      name: 'Cheese Tortellini (full-pan)',
      price: 120,
      description: 'Serves 20',
      vegetarian: true,
      image: Tortellini,
    },
    {
      name: 'Cheese Tortellini with sausage (half-pan)',
      price: 70,
      description: 'Serves 10',
      image: Tortellini,
    },
    {
      name: 'Cheese Tortellini with sausage (full-pan)',
      price: 125,
      description: 'Serves 20',
      image: Tortellini,
    },
    {
      name: 'Lasagna Bolognese (half-pan)',
      price: 70,
      description: 'Serves 10',
    },
    {
      name: 'Lasagna Bolognese (full-pan)',
      price: 125,
      description: 'Serves 20',
    },
    {
      name: 'Pasta Fagioli (half-pan)',
      price: 60,
      description: 'Serves 10',
      vegetarian: true,
    },
    {
      name: 'Pasta Fagioli (full-pan)',
      price: 90,
      description: 'Serves 20',
      vegetarian: true,
    },
    {
      name: 'Pasta Aglia e Olio (half-pan)',
      price: 60,
      description: 'Serves 10',
    },
    {
      name: 'Pasta Aglia e Olio (full-pan)',
      price: 90,
      description: 'Serves 20',
    },
  ],
};

const salads: Category = {
  category: 'Salads',
  items: [
    {
      name: 'Stoppe Salad (half-pan)',
      price: 50,
      vegan: true,
      gf: true,
      description: 'Serves 10. Comes with focaccia.',
      image: StoppeSalad,
      options: [veganOption],
    },
    {
      name: 'Stoppe Salad (full-pan)',
      price: 90,
      vegan: true,
      gf: true,
      description: 'Serves 20. Comes with focaccia.',
      image: StoppeSalad,
      options: [veganOption],
    },
    {
      name: 'Caprese Salad (half-pan)',
      price: 60,
      description: 'Serves 10. Comes with focaccia.',
      vegetarian: true,
      gf: true,
      image: CapreseSalad,
    },
    {
      name: 'Caprese Salad (full-pan)',
      price: 120,
      description: 'Serves 20. Comes with focaccia.',
      vegetarian: true,
      gf: true,
      image: CapreseSalad,
    },
    {
      name: 'Roasted Vegetable Salad (half-pan)',
      price: 60,
      description: 'Serves 10. Comes with focaccia.',
      vegan: true,
      gf: true,
    },
    {
      name: 'Roasted Vegetable Salad (full-pan)',
      price: 120,
      description: 'Serves 20. Comes with focaccia.',
      vegan: true,
      gf: true,
    },
    {
      name: 'Mediterranean Farro Salad (half-pan)',
      price: 60,
      description: 'Serves 10. Comes with focaccia.',
      vegan: true,
      options: [veganOption],
    },
    {
      name: 'Mediterranean Farro Salad (full-pan)',
      price: 120,
      description: 'Serves 20. Comes with focaccia.',
      vegan: true,
      options: [veganOption],
    },
    {
      name: 'Roasted Shrimp Salad (half-pan)',
      price: 75,
      description: 'Serves 10. Comes with focaccia.',
      gf: true,
    },
    {
      name: 'Roasted Shrimp Salad (full-pan)',
      price: 140,
      description: 'Serves 20. Comes with focaccia.',
      gf: true,
    },
  ],
};

const sides: Category = {
  category: 'À la Carte Sides',
  items: [
    {
      name: 'Penne Pasta (half-pan)',
      price: 40,
      description: 'Serves 10',
      gf: true,
      vegan: true,
      options: [choiceOfPasta, choiceOfSauce],
    },
    {
      name: 'Penne Pasta (full-pan)',
      price: 80,
      description: 'Serves 20',
      gf: true,
      vegan: true,
      options: [choiceOfPasta, choiceOfSauce],
    },
    {
      name: 'White Bean Ragu (half-pan)',
      price: 60,
      description: 'Serves 10',
      vegan: true,
      gf: true,
      image: WhiteBeanRagu,
    },
    {
      name: 'Creamy Polenta (half-pan)',
      price: 50,
      description: 'Serves 10',
      vegetarian: true,
      gf: true,
      image: Polenta,
    },
  ],
};

const pizza: Category = {
  category: 'Focaccia Pizza',
  items: [
    {
      name: 'Focaccia Grande Pizza',
      price: 26.95,
      description: '14 pieces with two toppings',
      image: FocacciaGrande,
      options: [
        {
          name: 'Choice of Sauce',
          choices: [
            {
              name: 'Roasted Tomato Sauce',
              vegan: true,
              vegetarian: true,
              selection: true,
            },
            { name: 'Pesto', gf: true, vegetarian: true, selection: true },
            { name: 'Vegan Pesto', gf: true, vegan: true, selection: true },
          ],
        },
        {
          name: 'Choice of Toppings (2 included)',
          maximum: 2,
          choices: [
            {
              name: 'Mushrooms',
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Banana Peppers',
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Onions',
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Peppers',
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Tomatoes',
              gf: true,
              vegan: true,
              addition: true,
            },
            { name: 'Anchovies', gf: true, addition: true },
            {
              name: 'Arugula',
              gf: true,
              vegan: true,
              addition: true,
            },
          ],
        },
        {
          name: 'Extra Toppings',
          choices: [
            {
              name: 'Mushrooms',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Banana Peppers',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Onions',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Peppers',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            {
              name: 'Tomatoes',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
            { name: 'Anchovies', extra: 1.5, gf: true, addition: true },
            {
              name: 'Arugula',
              extra: 1.5,
              gf: true,
              vegan: true,
              addition: true,
            },
          ],
        },
        {
          name: 'Optional meatball toppings',
          choices: [
            {
              name: "Nonna's Traditional Italian",
              extra: 1.5,
              addition: true,
            },
            { name: 'Sausage', gf: true, extra: 1.5, addition: true },
            {
              name: 'Chicken Parmigiana',
              extra: 1.5,
              gf: true,
              addition: true,
            },
            {
              name: 'Chicken Buffalo Bleu',
              extra: 1.5,
              gf: true,
              addition: true,
            },
            {
              name: 'Vegetarian',
              extra: 1.5,
              gf: true,
              vegetarian: true,
              addition: true,
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
      name: 'Coke (2 liter)',
      price: 5,
    },
    {
      name: 'Diet Coke (2 liter)',
      price: 5,
    },
    {
      name: 'Sprite (2 liter)',
      price: 5,
    },
    {
      name: 'Fanta Orange (2 liter)',
      price: 5,
    },
    {
      name: 'Sweet Tea (1 gallon)',
      price: 7,
    },
    {
      name: 'Unsweet Tea (1 gallon)',
      price: 7,
    },
    {
      name: 'Lemonade (1 gallon)',
      price: 7,
    },
    {
      name: 'Bottled Water',
      price: 1,
    },
    {
      name: 'Pellegrino',
      price: 3,
    },
  ],
};

const cateringMenu: Category[] = [
  specialPackages,
  panMeatballs,
  famigliaFavorites,
  salads,
  sides,
  pizza,
  deserts,
  beverages,
];

export default cateringMenu;
