// test-utils.js
import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const user = userEvent.setup();
const queryClient = new QueryClient();
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={{}}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) =>
  render(ui, {
    wrapper: AllTheProviders as React.ComponentType,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render, user };

export async function addRecordingBufferTime(timeout?: number): Promise<any> {
  if (process.env.SHOULD_RECORD_VIDEO === "true") {
    return new Promise((resolve) =>
      setTimeout(() => resolve(true), timeout || 5000)
    );
  }
  return Promise.resolve(true);
}
