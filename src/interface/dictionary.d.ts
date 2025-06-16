export interface Navbar {
  slider: string[];
  "list-hidden": string[];
  list: string[];
  input: {
    name: string;
  };
}

export interface Home {
  "first-section": {
    offer: string;
    title: string;
    description: string;
    button: {
      name: string;
    };
  };
  "second-section": {
    url: {
      name: string;
    };
  };
  "third-section": {
    selection: string;
    team: string;
  };
}

export interface DynamicSlug {
  colors: string;
  sizes: string;
  car: {
    name: string;
  };
}

export interface Car {
  name: string;
  total: string;
  warning: string;
  send: {
    first: string;
    second: string;
  };
  product: {
    size: string;
  };
  resume: {
    title: string;
    total: string;
    igv: string;
    pay: string;
    product: string;
  };
  empty: {
    title: string;
    description: string;
    button: {
      name: string;
      path: string;
    };
  };
}

export interface Checkout {
  pay: string;
  totalItems: {
    many: string;
    one: string;
  };
  contact: {
    name: string;
    email: string;
  };
  order: {
    name: string;
    edit: string;
    total: string;
    igv: string;
  };
}

export interface Footer {
  club: {
    description: string;
    button: {
      name: string;
    };
  };
  finished: {
    opts: string[];
    copyright: string;
  };
}

export interface AppDictionary {
  navbar: Navbar;
  home: Home;
  "dynamic-slug": DynamicSlug;
  car: Car;
  checkout: Checkout;
  footer: Footer;
}
