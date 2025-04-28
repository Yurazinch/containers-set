const hitUnit = {};
export default class Team {
  constructor() {
      this.members = new Set();
  }
  add() {
    if(this.members.has(hitUnit)) {
      throw 'Юнит уже добавлен в команду';
    }
    this.members.add(hitUnit);
  }
  addAll(...units) {
    this.members.add(...units);
  }
  toArray() {
    // eslint-disable-next-line no-unused-vars
    const array = [];
    this.members.forEach(item => array.push(item));
    return array;
  }
}