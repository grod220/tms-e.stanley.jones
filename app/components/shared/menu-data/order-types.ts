import { DishItem } from './menu-types';

export type ShoppingCart = DishItem[];

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
