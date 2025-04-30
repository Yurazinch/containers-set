export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(unit) {
    if(this.members.has(unit)) {
      throw 'Юнит уже добавлен в команду';
    } else {
      return this.members.add(unit);
    }
  }
  addAll(...units) { 
    for(let unit of units) {
      this.members.add(unit.name);
    }
    return this.members;
  }
  toArray() {    
    return [...this.members];    
  }
}