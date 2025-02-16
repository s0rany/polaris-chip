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
    this.title = "Kali Uchis";
    this.link = "https://www.kaliuchis.com/"
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yszjTVwz_RLAJdsPpTezxBPpZwgRwPEj1w&s"
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: Verdana, Geneva, Tahoma, sans-serif
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }     
      .card-text {
        background-color: white;
        color: black;
        overflow: auto; 
        word-wrap: break-word; 
        white-space: normal;
      }
      .imagep {
        margin-top: 10px;
        margin-left: 25px;
        color: white;
        padding: 5px;
      }
      .album {
        text-align: center;
        overflow: auto; 
      }
      .button {
        display: none;
      }
      .button button{
        background-color: lavender;
        color: purple;
        font-size: 38px;
        padding: 2px;
        border-radius: 15px;
        border: 1px;
      }
      .card {
        margin-top: 5px;
        width: 410px;
        min-height: 560px;
        background-color: orchid;
        padding: 20px;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
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
      <div id="cardlist">
        <div class="card">
          <img class="imagep" src=${this.image} alt="Album Cover" width ="350" height ="350">
          <div class="card-text">
            <h3 class="album">${this.album}</h3>
            <slot></slot>
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
              <summary>Quick Facts</summary>
              <div>
                <slot>${this.facts}</slot>
              </div>
            </details>
          </div>
          <div class="button">
            <a href=${this.link} target="_blank">
              <button><em>Details</em></button>
            </a>
          </div>
        </div>
      </div>
    `;
  }
  
  //this is for opening and closing the fancy state with the details
    openChanged(e) {
      console.log(e.newState);
      if (e.newState === "open") {
        this.fancy = true;
      }
      else {
        this.fancy= false;
      }
    }

  static get properties() {
    return {
      title: { type: String },
      album: { type: String },
      image: { type: String },
      facts: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }

    };
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);
