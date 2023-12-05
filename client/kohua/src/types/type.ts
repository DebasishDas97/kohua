// It doesn't make sense to share component props
// as they are usually coupled to the component itself.
//
// The reducer action types could also just stay next to the reducer
//
// The global "types" or "models" folder is usually used for models
// which can be shared across the application, these types are unlikely
// to be used anywhere else but a single spot.
// Export them could also create a lot of noise when you try to use autocomplete

interface FeaturedProductsProps {
  heading: string;
  desc: string;
}

interface CardProps {
  id: number;
  attributes: {
    categories: { data: [{ id: number; attributes: { title: string } }] };
    desc: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    img2: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    title: string;
    isNew: boolean;
    sub_categories: { data: [{ id: number; attributes: { title: string } }] };
    price: string;
    type: string;
    [key: string]: any; // Index signature to allow dynamic properties
  };
}

interface CardComponentProps {
  items: CardProps;
  index: number;
}

interface ListProps {
  catId: number | undefined;
  maxPrice: number;
  subCats: string[];
}

interface AccordationProps {
  title: string;
  content: string;
}

interface State {
  data: CardProps | CardProps[] | null; // Replace 'CardProps' with the actual type for your data.
  loading: boolean;
  error: boolean;
}

interface Action {
  type: "FETCHING" | "FETCHED" | "ERROR";
  payload?: CardProps | CardProps[] | null; // Replace 'CardProps' with the actual type for your data.
}

interface UseFetchReturnType {
  state: State;
}

interface CartState {
  products: {
    id: string;
    title: string;
    desc: string;
    quantity: number;
    img: string;
    price: number;
  }[];
}

interface RootState {
  cart: CartState;
}

export type {
  FeaturedProductsProps,
  CardProps,
  ListProps,
  AccordationProps,
  Action,
  State,
  UseFetchReturnType,
  CardComponentProps,
  CartState,
  RootState,
};
