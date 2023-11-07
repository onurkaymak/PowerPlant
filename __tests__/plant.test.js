import { changeState } from './../src/js/plant.js';

describe(changeState, () => {

  test('Test #1 - It should increment the value of the soil depends on given value.', () => {
    let plant = { soil: 0, light: 0, water: 0 };
    const blueFood = changeState("soil")(5);

    const result = blueFood(plant);
    const compareTo = { soil: 5, light: 0, water: 0 };


    expect(result).toEqual(compareTo);
  });
});