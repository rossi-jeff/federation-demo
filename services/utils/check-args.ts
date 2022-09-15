export const idArgs = (args: { id: string }) => {
  const { id } = args;
  if (!id) throw new Error("ID not specified");
  return { id };
};

export function createArgs<T>(args: { input?: T }) {
  const { input } = args;
  if (!input || input === undefined || !Object.keys(input).length)
    throw new Error("Input arguments are not present");
  return { input };
}

export function updateArgs<T>(args: { id: string; updates?: T }) {
  const { id, updates } = args;
  if (!id || id === undefined) throw new Error("ID not specified");
  if (!updates || updates === undefined || !Object.keys(updates).length)
    throw new Error("Update arguments are not present");
  return { id, updates };
}
