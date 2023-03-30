const MAIN_ROUTE = `/dashboard`;
const AUTH_ROUTE = `/auth`;

export const routes = {
  auth: {
    login: `${AUTH_ROUTE}/login`,
    register: `${AUTH_ROUTE}/register`,
  },
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
