import { render, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card.js";


it("renders without crashing", function() {
  render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum="3"
    totalNum="5"
  />);
});

it("matches snapshot", function() {
  const {container} = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum="3"
    totalNum="5"
  />);
  expect(container).toMatchSnapshot();
});

