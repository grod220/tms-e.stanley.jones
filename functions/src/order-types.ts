export interface Choice {
  name: string;
  selection?: boolean;
  gf?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  extra?: number;
  addition?: boolean;
}

export type DishChoices = Record<string, Choice[]>;

export type ShoppingCart = DishItem[];

interface DishItem {
  dishName: string;
  basePrice: number;
  choices: DishChoices;
  selectionsRequired: number;
  total: number;
  additionsRequired: Record<string, number>;
}

export interface OrderRequest {
  orderType: string;
  contactName: string;
  fulfillmentTime: string;
  fulfillmentDate: string;
  contactNumber: string;
  specialInstructions: string;
  fulfillmentOption: string;
  shoppingCart: ShoppingCart;
}
