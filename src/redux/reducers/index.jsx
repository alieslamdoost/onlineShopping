import { combineReducers } from "redux";
import {
  selectedEditedProduct,
  productsReducer,
  selectedProductsReducer,
  selectedBuyProductReducer,
  addProductReducer,
  contactInfoReducer,
} from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  editedProduct: selectedEditedProduct,
  buyProducts: selectedBuyProductReducer,
  addProduct: addProductReducer,
  contactInfo: contactInfoReducer,
});
export default reducers;
