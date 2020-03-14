import { LitElement, html, css } from 'lit-element';

/**
 * `nav-list`
 * Nav List
 *
 * @nav-list
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
      listenEvents: { type: Boolean, attribute: 'listen-events' }
    };
  }

  static get styles() {
    /* CSS CUSTOM VARS
      --width-list-element: auto;
      --height-list-element: auto;
      --border-radius-element: 0;
      --border-radius-selected-element: 0;
      --border-top-list-element: 2px solid transparent;
      --border-bottom-list-element: 2px solid transparent;
      --border-left-list-element: 2px solid transparent;
      --border-right-list-element: 2px solid transparent;
      --border-top-selected-element: 2px solid #cc3743;
      --border-bottom-selected-element: 2px solid #cc3743;
      --border-left-selected-element: 2px solid #cc3743;
      --border-right-selected-element: 2px solid #cc3743;
      --padding-list-element: 10px 20px;
      --padding-selected-element: 10px 13px;
    */
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
        border-radius: var(--border-radius-selected, 0);
        border-top: var(--border-top-selected-element, 2px solid #cc3743);
        border-bottom: var(--border-bottom-selected-element, 2px solid #cc3743);
        border-left: var(--border-left-selected-element, 2px solid #cc3743);
        border-right: var(--border-right-selected-element, 2px solid #cc3743);
        padding: var(--padding-selected-element, 10px 13px);
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
        border-top: var(--border-top-list-element, '2px solid transparent');
        border-bottom: var(--border-bottom-list-element, '2px solid transparent');
        border-right: var(--border-right-list-element, '2px solid transparent');
        border-left: var(--border-left-list-element, '2px solid transparent');
        font-size: 14px;
        padding: var(--padding-list-element, 10px 20px);
        border-radius: var(--border-radius-element, 0);
        transition: all 0.3s;
        letter-spacing: 2px;
        width: var(--width-list-element, 'auto');
        height: var(--height-list-element, 'auto');
        position: relative;
        top: var(calc(-1 * --height-list-element / 2), 0);
        left: var(calc(-1 * --width-list-element / 2), 0);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  constructor() {
    super();
    this.list = '0,1,2,3,4,5';
    this.listValues = this.list.split(',');
    this.value = null;
    this.title = 'TITLE';
    this.fixed = false;
    this.listenEvents = false;
  }

  _getNextVal() {
    const pos = this.listValues.indexOf(this.value);
    if (pos < this.listValues.length - 1) {
      this.value = this.listValues[pos + 1];
    }
  }

  _getLastVal() {
    const pos = this.listValues.indexOf(this.value);
    if (pos > 0) {
      this.value = this.listValues[pos - 1];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.listValues = this.list.split(',');
    if (this.listenEvents) {
      document.addEventListener('navlist-next', (ev) => {
        this._getNextVal();
      });
      document.addEventListener('navlist-last', (ev) => {
        this._getLastVal();
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.listenEvents) {
      document.removeEventListener('navlist-next', (ev) => {
        this._getNextVal();
      });
      document.removeEventListener('navlist-last', (ev) => {
        this._getLastVal();
      });
    }
  }

  updated() {
    if (this.value) {
      this.renderRoot.querySelector('[id=\'navlist-item__' + this.value + '\']').checked = true;
    }
  }

  _setValue(val) {
    this.value = val;
    const id = (this.id) ? this.id : 'no-id';
    const changeValEvent = new CustomEvent('navlist-changed', { 'detail': { 'value': this.value, 'pos': this.listValues.indexOf(this.value), id: id}});
    document.dispatchEvent(changeValEvent);
  }

  _getInput(val) {
    let inputStr = (!this.fixed) ? html`<input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__${val}">` : html`<input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__${val}" disabled>`;
    return inputStr;
  }

  _getSpan(val) {
    let spanStr = (!this.fixed) ? html`<span class="navlist-labels__txt" @click="${() => this._setValue(val)}">&nbsp;${val}&nbsp;</span>` : html`<span class="navlist-labels__txt">&nbsp;${val}&nbsp;</span>`
    return spanStr;
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
