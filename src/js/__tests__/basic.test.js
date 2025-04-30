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
  let received = team.members.has('Маг');
  let expected = true;
  expect(received).toBe(expected);
});

test('repeat add hit unit', () => { 
  expect(() => {
  team.add(unit.name);
  }).toThrow('Юнит уже добавлен в команду');
});

test ('add more units', () => {
  team.addAll(...units);
  let received = team.members.size;
  let expected = 3;
  expect(received).toBe(expected);
})

test ('add to array', () => {
   let received = team.toArray();
   let expected = [ 'Маг', 'Лучник', 'Мишень' ]
  expect(received).toEqual(expected);
})