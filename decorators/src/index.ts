import { observable } from "mobx";

class Model {
  @observable accessor propA = '';
  @observable accessor propB = '';
  @observable accessor propC = '';
  @observable accessor subModels: Child[] = [];

  constructor() {
    for (let i=0; i<10; i++) {
      this.subModels.push(new Child());
    }
  }
}

class Child {
  @observable accessor propA = '';
  @observable accessor propB = '';
  @observable accessor propC = '';
}

export function benchConstruction(numIterations: number) {
  const models: Model[] = [];
  for (let i=0; i < numIterations; i++) {
    models.push(new Model());
  }
  return models;
}
