import { makeAutoObservable } from "mobx";

class Model {
  propA = '';
  propB = '';
  propC = '';
  subModels: Child[] = [];

  constructor() {
    makeAutoObservable(this);
    for (let i=0; i<10; i++) {
      this.subModels.push(new Child());
    }
  }
}

class Child {
  propA = '';
  propB = '';
  propC = '';

  constructor() {
    makeAutoObservable(this);
  }
}

export function benchConstruction(numIterations: number) {
  const models: Model[] = [];
  for (let i=0; i < numIterations; i++) {
    models.push(new Model());
  }
  return models;
}
