import { render, screen } from "@testing-library/react";
import RestaurentCard, {
  restaurentCardWithDiscount,
} from "../components/RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

const RestaurentCardWithDiscount = restaurentCardWithDiscount(RestaurentCard);

it("Should render the restaurent card with props", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Domino's Pizza");

  expect(resName).toBeInTheDocument();
});

it("Should render the offer restaurent card with props", () => {
  render(<RestaurentCardWithDiscount resData={MOCK_DATA} />);

  const resName = screen.getByText("₹166 OFF ABOVE ₹699");

  expect(resName).toBeInTheDocument();
});
