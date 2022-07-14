const MAIN_ROUTE = `/dashboard`;

export const routes = {
  product: {
    main: `${MAIN_ROUTE}/product`,
    create: `${MAIN_ROUTE}/product/create`,
  },
  category: {
    main: `${MAIN_ROUTE}/category`,
    create: `${MAIN_ROUTE}/category/create`,
  },
  tag: {
    main: `${MAIN_ROUTE}/tag`,
    create: `${MAIN_ROUTE}/tag/create`,
  },
};
