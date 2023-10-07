import * as React from 'react';
import { render } from '@testing-library/react';
import Switch from './index';

describe("renderer `<Switch>`", () => {
  test("should throw an error when not included within `Case` or `Default` children", () => {
    console.error = jest.fn();
    render(<Switch><h1>Case</h1></Switch>);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  test("should be able to render a case without condition", () => {
    console.error = jest.fn();
    render(
      <Switch>
        <Switch.Case>
          <></>
        </Switch.Case>
      </Switch>
    );
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  test("should throw an error when even a child is not included in `Case`", () => {
    console.error = jest.fn();
    render(
      <Switch>
        <Switch.Case condition>
          <></>
        </Switch.Case>
      </Switch>
    );
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  test("should condition with a child", () => {
    render(
      <Switch>
        <Switch.Case condition>
          <h1>Hola</h1>
        </Switch.Case>
      </Switch>
    );
  });

  test("should render element by default", () => {
    render(
      <Switch>
        <Switch.Case condition={false}>
          <h1>Hello Case</h1>
        </Switch.Case>
        <Switch.Default>
          <h1>Hello, Default</h1>
        </Switch.Default>
      </Switch>
    );
  });
});