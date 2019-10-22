const data = [{
  name: 'John',
  email: 'user@mail.com',
  city: 'London',
  type: 'CLIENT'
},
{
  name: 'Steve',
  email: 'stave@mail.com',
  city: 'Rome',
  type: 'USER'
},
{
  name: 'Mark',
  email: 'mark@mail.com',
  city: 'Paris',
  type: 'ADMIN'
}
];

const result = data.reduce((acc, { type, ...obj }) => {
  acc[type] = obj;
  return acc;
}, {})
console.log('result',result);