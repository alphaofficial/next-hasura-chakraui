export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
  options: RequestInit["headers"] = {}
) {
  return async (): Promise<TData> => {
    const res = await fetch("api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();
    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error…");
    }
    return json.data;
  };
}
