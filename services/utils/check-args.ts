export const idArgs = (args: { id: string }): { id: string } => {
  const { id } = args;
  if (id === undefined || id === "") throw new Error("ID not specified");
  return { id };
};

export function createArgs<T>(args: { input?: T }): { input?: T } {
  const { input } = args;
  if (
    input === null ||
    input === undefined ||
    Object.keys(input).length === 0
  ) {
    throw new Error("Input arguments are not present");
  }
  return { input };
}

export function updateArgs<T>(args: { id: string; updates?: T }): {
  id: string;
  updates?: T;
} {
  const { id, updates } = args;
  if (id === undefined || id === "") throw new Error("ID not specified");
  if (
    updates === null ||
    updates === undefined ||
    Object.keys(updates).length === 0
  ) {
    throw new Error("Update arguments are not present");
  }
  return { id, updates };
}
