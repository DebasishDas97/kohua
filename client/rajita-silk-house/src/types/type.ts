interface FeaturedProductsProps {
  heading: string;
}

interface CardProps {
  id: number;
  img: string;
  img2: string;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: string;
}

interface ListProps {
  catId: number | undefined;
  maxPrice: number;
  sort: string;
}

interface AccordationProps {
  title: string;
  content: string;
}

export type { FeaturedProductsProps, CardProps, ListProps, AccordationProps };
