type VariableType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'undefined'
  | 'symbol'
  | 'bigint'
  | 'function'
  | 'object'
  | 'null'
  | 'array'

export function getType(variable: unknown): VariableType {
  if (variable === null) return 'null'
  if (Array.isArray(variable)) return 'array'

  const type = typeof variable

  return type as VariableType
}
