import { LitElement, html, css } from 'lit';

export class UserCard extends LitElement {
  static properties = {
    name: { type: String },
    email: { type: String },
    role: { type: String },
    avatar: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 24px;
      color: white;
      max-width: 320px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .avatar-container {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: bold;
      color: #667eea;
      border: 4px solid rgba(255, 255, 255, 0.3);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .info {
      text-align: center;
    }

    .name {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .email {
      font-size: 14px;
      opacity: 0.9;
      margin-bottom: 12px;
    }

    .role {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  constructor() {
    super();
    this.name = 'John Doe';
    this.email = 'john@example.com';
    this.role = 'Developer';
    this.avatar = '';
  }

  render() {
    return html`
      <div class="card">
        <div class="avatar-container">
          <div class="avatar">
            ${this.avatar
              ? html`<img src="${this.avatar}" alt="${this.name}" />`
              : this.name.charAt(0).toUpperCase()
            }
          </div>
        </div>
        <div class="info">
          <div class="name">${this.name}</div>
          <div class="email">${this.email}</div>
          <div class="role">${this.role}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
