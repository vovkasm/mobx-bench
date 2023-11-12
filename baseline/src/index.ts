class Model {
  propA = '';
  propB = '';
  propC = '';
  subModels: Child[] = [];

  constructor() {
    for (let i=0; i<10; i++) {
      this.subModels.push(new Child());
    }
  }
}

class Child {
  propA = '';
  propB = '';
  propC = '';

  action1() {
    this.innerMethod();
  }

  private innerMethod() {
    return true;
  }
}

export function benchConstruction(numIterations: number) {
  const models: Model[] = [];
  for (let i=0; i < numIterations; i++) {
    models.push(new Model());
  }
  return models;
}
