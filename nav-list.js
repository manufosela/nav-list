import { LitElement, html, css } from '/node_modules/lit-element/lit-element.js';

/**
 * `nav-list`
 * Nav List
 *
 * @customElement
 * @polymer
 * @litElement
 * @demo demo/index.html
 */
class NavList extends LitElement {
  static get properties() {
    return {
      list: { type: String },
      listValues: { type: Array },
      value: { type: String },
      title: { type: String },
      fixed: { type: Boolean },
    }
  }

  static get styles(){
    return css`
      @media screen and (max-width: 767px) {
        .navlist-labels {
          width: 100%;
        }
      }
      .navlist-labels__checkbox {
        display: none;
      }
      .navlist-labels__checkbox:checked + .navlist-labels__txt {
        border-color: #cc3743;
        padding: 10px 13px;
      }
      .navlist-labels__title {
        font-family: "Dosis", sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        font-size: 16px;
        margin-bottom: 10px;
      }
      .navlist-labels__group {
        display: flex;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 992px) {
        .navlist-labels__group {
          justify-content: center;
        }
      }
      .navlist-labels__group:last-child {
        margin-bottom: 0;
      }
      .navlist-labels__item {
        margin: 5px;
        cursor: pointer;
      }
      .navlist-labels__item:first-child {
        margin-left: 0;
      }
      .navlist-labels__txt {
        display: block;
        border: 2px solid transparent;
        font-size: 14px;
        padding: 10px 20px;
        padding-left: 0;
        border-radius: 50px;
        transition: all 0.3s;
        letter-spacing: 2px;
      }
    `;
  }

  constructor() {
    super();
    this.list = "0,1,2,3,4,5";
    this.listValues = this.list.split(",");
    this.value = null;
    this.title='TITLE';
    this.fixed = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.listValues = this.list.split(",");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated() {
    if (this.value) {
      this.renderRoot.querySelector("[id='navlist-item__"+this.value+"']").checked = true;
    }
  }

  _setValue(val) {
    this.value = val;
    this.dispatchEvent(new CustomEvent('navlist-changed', { detail: val }));
  }

  _getInput(val) {
    let inputStr = (!this.fixed)?html`<input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__${val}">`:html`<input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__${val}" disabled>`;
    return inputStr;
  }

  _getSpan(val) {
    let spanStr = (!this.fixed)?html`<span class="navlist-labels__txt" @click="${() => this._setValue(val)}">&nbsp;${val}&nbsp;</span>`:html`<span class="navlist-labels__txt">&nbsp;${val}&nbsp;</span>`
    return spanStr
  }

  _getListValues() {
    return this.listValues.map(val => html`
    <label class="navlist-labels__item">
      ${this._getInput(val)}
      ${this._getSpan(val)}
    </label>`);
  }

  render() {
    return html`
      <div class="navlist-labels">
        <div class="navlist-labels__title">${this.title}</div>
        <div class="navlist-labels__group">
          ${this._getListValues()}
        </div>
      </div>
    `;
  }
}

window.customElements.define('nav-list', NavList);
