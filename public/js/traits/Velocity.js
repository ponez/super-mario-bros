import { Trait } from "../Entity/Entity.js";

export default class Velocity extends Trait {
  constructor() {
    super("velocity");
  }

  update(entity, deltaTime) {
    entity.pos.x += entity.vel.x * deltaTime;
    entity.pos.y += entity.vel.y * deltaTime;
  }
}
