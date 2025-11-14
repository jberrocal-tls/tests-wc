import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: false,
})
export class UserCard {
  @Prop() name: string = 'John Doe';
  @Prop() email: string = 'john@example.com';
  @Prop() role: string = 'Developer';
  @Prop() avatar: string = '';

  render() {
    return (
      <div class="card">
        <div class="avatar-container">
          <div class="avatar">
            {this.avatar ? (
              <img src={this.avatar} alt={this.name} />
            ) : (
              this.name.charAt(0).toUpperCase()
            )}
          </div>
        </div>
        <div class="info">
          <div class="name">{this.name}</div>
          <div class="email">{this.email}</div>
          <div class="role">{this.role}</div>
        </div>
      </div>
    );
  }
}
