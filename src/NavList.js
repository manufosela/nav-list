import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { NavListStyles } from "./nav-list-style";

/**
 * `nav-list`
 * Nav List
 *
 * @nav-list
 * @polymer
 * @litElement
 * @demo demo/index.html
 */
export class NavList extends LitElement {
  static get properties() {
    return {
      list: { type: String },
      listValues: { type: Array },
      value: { type: String },
      title: { type: String },
      fixed: { type: Boolean },
      listenEvents: { type: Boolean, attribute: 'listen-events' },
      cursorPointer: { type: Boolean }
    };
  }

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
  static get styles() {
    return [NavListStyles];
  }

  constructor() {
    super();
    this.list = '0,1,2,3,4,5';
    this.listValues = this.list.split(',');
    this.value = null;
    this.title = 'TITLE';
    this.fixed = false;
    this.listenEvents = false;
    this.cursorPointer = true;
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
    this.cursorPointer = !this.fixed;
    this.listValues = this.list.split(',');
    if (this.listenEvents) {
      this.cursorPointer = false;
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
      this.shadowRoot.querySelector('[id=\'navlist-item__' + this.value + '\']').checked = true;
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
    <label class="${classMap({'navlist-labels__item': true, 'cursor-pointer': this.cursorPointer})}">
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