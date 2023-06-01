'use strict';


const { Animal, AnimalShelter } = require('../index');


describe('AnimalShelter', () => {
  test('Can successfully enqueue into each queue', () => {
    let animalShelter = new AnimalShelter();
    const dog = new Animal('dog', 'Dobby');
    const cat = new Animal('cat', 'Milo');

    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);

    expect(animalShelter.dog.length).toEqual(1);
    expect(animalShelter.dog[0]).toEqual(dog);
    expect(animalShelter.dog[0].name).toEqual('Dobby')
    expect(animalShelter.cat.length).toEqual(1);
    expect(animalShelter.cat[0]).toEqual(cat);
    expect(animalShelter.cat[0].name).toEqual('Milo')

  });


  test('Can successfully dequeue from a queue', () => {
    let animalShelter = new AnimalShelter();
    const dog = new Animal('dog', 'Dobby');
    const cat = new Animal('cat', 'Milo');

    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);

    expect(animalShelter.cat[0]).toEqual(cat);
    expect(animalShelter.dog[0]).toEqual(dog);

    animalShelter.dequeue('cat');

    expect(animalShelter.dequeue('cat')).toBeNull();
    expect(animalShelter.dog[0]).toEqual(dog);
  });


  test('Should return null if no animals of the preferred type are available', () => {
    let animalShelter = new AnimalShelter();
    const dog = new Animal('dog', 'Dobby');
    const cat = new Animal('cat', 'Milo');

    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);

    expect(animalShelter.dog[0]).toEqual(dog);
    expect(animalShelter.cat[0]).toEqual(cat);

    const adoptedCat = animalShelter.dequeue('cat');
    expect(adoptedCat).toEqual(cat);

    expect(animalShelter.dequeue('cat')).toBeNull();
  });


  test('Should return the oldest animal of the preferred type', () => {
    let animalShelter = new AnimalShelter();
    const dog1 = new Animal('dog', 'Dobby');
    const cat1 = new Animal('cat', 'Milo');
    const dog2 = new Animal('dog', 'Jax');
    const cat2 = new Animal('cat', 'Bilbo');

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    expect(animalShelter.dequeue('dog')).toEqual(dog1);
    expect(animalShelter.dequeue('cat')).toEqual(cat1);
  });

});
