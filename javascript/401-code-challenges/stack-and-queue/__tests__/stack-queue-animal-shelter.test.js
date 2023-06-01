'use strict';


const { AnimalShelter } = require('../index');

describe('AnimalShelter', () => {

  test('Can successfully enqueue into a queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('Dobby', 'dog');

    expect(animalShelter.front.name).toEqual('Dobby');
    expect(animalShelter.front.next).toBeNull();
  });


});
