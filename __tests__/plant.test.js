import { changeState } from './../src/js/plant.js';

describe(changeState, () => {

  test('EXPLAIN YOUR TEST HERE', () => {
    let plant = { soil: 0, light: 0, water: 0 }
    const blueFood = changeState("soil")(0)

    const result = blueFood(plant);

    const expectectedResult = { soil: 5, light: 0, water: 0 };

    expect(result).toEqual(expectectedResult);
  });
});