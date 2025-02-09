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
      .button {
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
          <img class="imagep" src= "https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/2/f4/2f47c8f0-6353-11ef-8b73-c343b44d169f/66cbe8cfd0547.image.jpg?resize=1396%2C929alt=" alt="Nittany Lion" width = "400">
          <div class="card-text">
            <h3 class ="card-title">Nittany Lion</h3>
            <p>The Nittany Lion is the Penn State mascot. Click the button below to access HAX!</p>
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
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
