import { CharactersByVillageQuery } from "@/client/generated/graphql";
import { render, waitFor } from "@/client/test-utils";
import Home from "@/pages/index";

const mockData = {
  characters: [
    {
      id: "1",
      name: "Naruto Uzumaki",
      avatarSrc: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Sasuke Uchiha",
      avatarSrc: "https://via.placeholder.com/150",
    },
  ],
} as CharactersByVillageQuery;

const props = {
  data: mockData,
  dehydratedState: {},
};
const renderPage = () => render(<Home {...props} />);
describe("Home page", () => {
  jest.mock("@tanstack/react-query", () => {
    const originalModule = jest.requireActual("@tanstack/react-query");
    return {
      __esModule: true,
      ...originalModule,
      useCharactersByVillageQuery: jest.fn(),
    };
  });

  it("renders correctly", async () => {
    const { container } = renderPage();
    const node = await waitFor(() => container);
    expect(node).toMatchSnapshot();
  });
});
