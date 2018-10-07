import { LitElement, html } from '@polymer/lit-element';
import {afterNextRender, beforeNextRender} from '@polymer/polymer/lib/utils/render-status.js';

/**
 * `nav-list`
 * 
 *
 * @customElement
 * @demo demo/index.html
 */
class NavList extends LitElement {
  static get properties() {
    return {
      list: { type: String },
      listValues: { type: Array },
      value: { type: String },
      title: { type: String },
    }
  }

  constructor() {
    super();
    beforeNextRender(this, function() {
      this.listValues = this.list.split(",");
    });
    afterNextRender(this, function() {
      if (this.value) {
        this.renderRoot.querySelector("[id=navlist-item__"+this.value+"]").checked = true;
      }
    });
  
    this.list = "0,1,2,3,4,5";
    this.listValues = this.list.split(",");
    this.value = null;
    this.title='TITLE';
  }

  _setValue(val) {
    this.value = val;
  }

  _getListValues() {
    return this.listValues.map(val => html`
    <label class="navlist-labels__item">
      <input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__${val}">
      <span class="navlist-labels__txt" @click="${() => this._setValue(val)}">&nbsp;${val}&nbsp;</span>
    </label>`);
  }

  render() {
    return html`
      <style>
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
      </style>
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
