import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card (Homework 4)";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card-text {
        background-color: white;
        color: navy;
      }
      .imagep {
        margin-top: 10px;
        color: white;
        padding: 5px;
      }
      .button {
        display: none;
      }
      .button button{
        background-color: white;
        color: navy;
        font-size: 38px;
        padding: 2px;
        border-radius: 15px;
        border: 1px;
      }
      .card {
        margin-top: 5px;
        width: 410px;
        height: 470px;
        background-color: navy;
        padding: 20px;
      }
      .bkg2 {
        background-color: pink;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .button {
          display: inline;
        }
      }
      @media (max-width:500px) {
        .card {
          width: 100%;
        }
        .imagep img {
          width: 100%;
        }
      }

  `;
}

  render() {
    return html`
      <div>${this.title}</div>
      <h1>Homework 4</h1>
      <h2>Buttons!</h2>
      <div class="button-wrapper">
        <button class="duplicate">Clone Card</button>
        <button id="namechange">Change Name</button>
        <button id="bg-change">Change Background</button>
        <button id="imgchange">Change Image</button>
        <button id="delete">Delete Last Card</button>
      </div>
      <h2>Mascots</h2>
      <div id="cardlist">
        <div class="card">
          <img class="imagep" src=${this.image} alt="Nittany Lion" width ="400" height ="300">
          <div class="card-text">
            <h3>${this.title}</h3>
            <p class = "info">${this.info}</p>
          </div>
          <div class="button">
            <button onclick="document.location='https://hax.psu.edu'"> Details</button>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      info: { type: String },
    };
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);
