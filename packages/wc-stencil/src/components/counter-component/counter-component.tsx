import { Component, State, h } from "@stencil/core";

@Component({
  tag: "counter-component",
  styleUrl: "counter-component.css",
  shadow: false,
})
export class CounterComponent {
  @State() count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  render() {
    return (
      <div class="counter-container">
        <h2>Counter Component</h2>
        <div class="count-display">{this.count}</div>
        <div class="button-group">
          <button class="decrement" onClick={() => this.decrement()}>
            -
          </button>
          <button class="reset" onClick={() => this.reset()}>
            Reset
          </button>
          <button class="increment" onClick={() => this.increment()}>
            +
          </button>
        </div>
      </div>
    );
  }
}
