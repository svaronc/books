class Group {
  constructor() {
    this.group = [];
  } 
  add(value) {
    if (!this.group.includes(value)) {
      this.group.push(value);
    }
  }
  delete(value) {
    this.group = this.group.filter(v => v !== value);
  }
  has(value) {
    return this.group.includes(value);
  }
  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}