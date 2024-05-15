import { ObjectShape } from "yup";

export type Modify<T, P> = Omit<T, keyof P> & P;

type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;
export type YupShape<T extends Record<any, any>> = Record<
  keyof T,
  ObjectShapeValues
>;
