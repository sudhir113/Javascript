const ROUTES = {
  Home: {
      screen: 'HomeScene',
      path: '/'
  },
  About: {
      screen: 'AboutScreen',
      path: '/about'
  }
};

let new_array =Object.keys(ROUTES).map(ele => ROUTES[ele]);
console.log('new_array',new_array);