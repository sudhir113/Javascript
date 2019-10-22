// object transformation in js

let states = [
    {
      USA: [
        {
          name: 'Alabama',
          abbreviation: 'AL',
          country: 'USA'
        },
        {
          name: 'Alaska',
          abbreviation: 'AK',
          country: 'USA'
        }
      ]
    },
    {
      Canada: [
        {
          name: 'Alberta',
          abbreviation: 'ALB',
          country: 'Canada'
        }
      ]
    }
  ];

//   transorm into object

let newStates =states.map(ele =>{
    let country = Object.keys(ele);
    return {
        label:country[0],
        items:ele[country].map(item => ({label:item.abbreviation,value:item.name}))
    };
});

console.log('newStates',newStates);

let data = [
    [
      ['firstName', 'Joe'],
      ['lastName', 'Blow'],
      ['age', 42],
      ['role', 'clerk']
    ],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['role', 'manager']
    ]
  ];
  
  let result = data.map(item => {
    return item.reduce((acc, [key,value]) => {
      acc[key] = value;
      return acc;
    }, {});
  });
  
  console.log(result);