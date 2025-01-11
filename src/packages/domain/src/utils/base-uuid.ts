import { v4 as uuidv4 } from 'uuid';

export abstract class BaseUUID<T> {
  private readonly id: string;

  constructor(id?: string) {
    this.id = id || uuidv4();
  }

  toString(): string {
    return this.id;
  }

  equals(other: T): boolean {
    if (!other || !(other instanceof BaseUUID)) return false;
    return this.id === (other as BaseUUID<T>).toString();
  }
}
