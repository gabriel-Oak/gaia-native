import { ReactElement } from "react";
import { shallow } from "enzyme";

export const configureShallow = (Component) => shallow(
    Component
).childAt(0).dive();
