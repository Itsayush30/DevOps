const original = {
    name: 'Ayush',
    details: {
      age: 25,
      skills: ['JavaScript', 'React']
    }
  };
  
  const copy = JSON.parse(JSON.stringify(original));
  
  console.log(copy);
  