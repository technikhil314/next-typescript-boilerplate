import { render, screen, waitFor, act } from "@testing-library/react";
import App from "../pages/index";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("http://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(202, "Mocked status"),
      ctx.json({
        message: "Mocked response JSON body",
      })
    );
  }),
  rest.get("http://jsonplaceholder.typicode.com/posts/10", (req, res, ctx) => {
    return res(
      ctx.status(202, "Mocked status"),
      ctx.json({
        message: "Mocked response JSON body",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders without crashing", async () => {
    await act(async () => render(<App />));
    await waitFor(() =>
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    );
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});
