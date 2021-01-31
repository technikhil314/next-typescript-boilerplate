import fetch from "cross-fetch";
import "@testing-library/jest-dom/extend-expect";
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}
