import Team from '../basic';

const team = new Team;
const unit = {name: 'Маг', health: 95};
const units = [
  {name: 'Маг', health: 95},
  {name: 'Лучник', health: 45},
  {name: 'Мишень', health: 10}
]

team.clear;

test('add hit unit', () => {  
  team.add(unit);
  let received = team.size;
  expect(received).toBe(1);
});

test('add hit unit 2', () => {  
  team.add(unit);
  // eslint-disable-next-line no-undef
  expect(thrown).toBe('Юнит уже добавлен в команду');
});

test ('add more units', () => {  
  team.addAll(...units);
  let received = team.size;
  expect(received).toBe(3);
})

test ('add to array', () => {
   let received = team.toArray();
   let expected = [
    {name: 'Маг', health: 95},
    {name: 'Лучник', health: 45},
    {name: 'Мишень', health: 10}
  ]
  expect(received).toBe(expected);
})