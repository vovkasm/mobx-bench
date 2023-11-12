import { action, makeObservable, observable } from "mobx";

class Model {
  @observable propA = '';
  @observable propB = '';
  @observable propC = '';
  @observable subModels: Child[] = [];

  constructor() {
    makeObservable(this);
    for (let i=0; i<10; i++) {
      this.subModels.push(new Child());
    }
  }
}

class Child {
  @observable propA = '';
  @observable propB = '';
  @observable propC = '';

  constructor() {
    makeObservable(this);
  }

  @action
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
