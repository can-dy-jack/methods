import * as Array from "./array";
import {
  noop
} from "./tool";
import {
  curry
} from "./func";

const methods = {
  ...Array,
  curry,
  noop,
}

export default methods;