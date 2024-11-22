import Button from "../Button";
import { render, screen } from "@testing-library/react-native";

describe("<Button />", () => {
  test("shows correct label", () => {
    const { getByText } = render(<Button onPress={() => {}}>Test Me</Button>);

    getByText("Test Me");
  });
  test("renders correctly", () => {
    const tree = render(<Button onPress={() => {}}>Test Me</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
