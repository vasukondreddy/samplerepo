const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('http://localhost:3000/sum', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ a: 7, b: 5 })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error('Error:', err));
