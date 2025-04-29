import Team from '../basic';

const team = new Team;
const unit = {name: 'Маг', health: 95};
const units = [
  {name: 'Маг', health: 95},
  {name: 'Лучник', health: 45},
  {name: 'Мишень', health: 10}
]

test('add hit unit', () => {  
  team.add(unit.name);
  let received = unit.has('Маг');
  let expected = true;
  expect(received).toBe(expected);
});

test('add hit unit 2', () => {  
  team.add(unit.name);
  // eslint-disable-next-line no-undef
  expect(thrown).toBe('Юнит уже добавлен в команду');
});

test ('add more units', () => {  
  let names = [];
  for(let unit of units) {
    names.push(unit.name);
  }
  team.addAll(...names);
  let received = team.size;
  let expected = 3;
  expect(received).toBe(expected);
})

test ('add to array', () => {
   let received = team.toArray();
   let expected = [ 'Маг', 'Лучник', 'Мишень' ]
  expect(received).toEqual(expected);
})