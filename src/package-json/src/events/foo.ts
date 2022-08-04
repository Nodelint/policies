import { Event } from "@nodelint/policy";

const parameters = {
  type: "object",
  additionalProperties: false,
  properties: {
    burst: {
      type: "boolean",
      default: false
    }
  }
};

class foo extends Event {
  public burst: boolean;

  constructor() {
    super({
      name: "foo",
      type: Event.Severities.Error,
      i18n: "path.to.key",
      parameters
    });

    this.burst = false;
  }
}
export default new foo();
