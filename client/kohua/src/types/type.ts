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
  State,
  UseFetchReturnType,
  CartState,
  RootState,
};
