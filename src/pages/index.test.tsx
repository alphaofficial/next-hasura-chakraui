import { render, waitFor } from "@/utils/test-utils";
import * as auth0 from "@auth0/nextjs-auth0/client";
import Home from ".";

const renderPage = () => render(<Home />);

describe("Home page", () => {
  jest.mock("@tanstack/react-query", () => {
    const originalModule = jest.requireActual("@tanstack/react-query");
    return {
      __esModule: true,
      ...originalModule,
      useQuery: jest.fn(),
    };
  });

  it("Renders the heading", async () => {
    jest.spyOn(auth0, "useUser").mockImplementation(
      () =>
        ({
          user: {
            name: "John Doe",
            email: "",
          },
          isLoading: false,
        } as auth0.UserContext)
    );
    const { getByLabelText } = renderPage();
    const heading = await waitFor(() => getByLabelText("heading"));
    expect(heading).toHaveTextContent("Hello graphql!");
  });

  it("should show the user's name if logged in", async () => {
    jest.spyOn(auth0, "useUser").mockImplementation(
      () =>
        ({
          user: {
            name: "John Doe",
            email: "",
          },
          isLoading: false,
        } as auth0.UserContext)
    );
    const { getByLabelText } = renderPage();
    const name = await waitFor(() => getByLabelText("authUser"));
    expect(name).toHaveTextContent("John Doe");
  });

  it("should display login text if user is not logged in", async () => {
    jest.spyOn(auth0, "useUser").mockImplementation(
      () =>
        ({
          user: undefined,
          isLoading: false,
        } as auth0.UserContext)
    );
    const { getByLabelText } = renderPage();
    const loginText = await waitFor(() => getByLabelText("loginText"));
    expect(loginText).toHaveTextContent("Log in to see your followers");
  });
});
