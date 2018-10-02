import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

/**
 * `nav-list`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NavList extends PolymerElement {
  static get template() {
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
        <div class="navlist-labels__title">[[title]]</div>
        <div class="navlist-labels__group">
          <dom-repeat items="{{myItems}}">
            <template>
              <label class="navlist-labels__item">    
                <input type="radio" class="navlist-labels__checkbox" name="type1" id="navlist-item__{{item}}">
                <span class="navlist-labels__txt">&nbsp;{{item}}&nbsp;</span>
              </label>
            </template>
          </dom-repeat>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      myItems: {
        type: Array,
        computed: "getArray(start,end)",
      },
      start: {
        type: Number,
        value: 1,
      },
      end: {
        type: Number,
        value: 10,
      },
      value: {
        type: Number,
        value: null,
      },
      title:{
        type: String,
        value: 'TITLE',
      },
    };
  }

  constructor() {
    super();
    afterNextRender(this, function() {
      if (this.value) {
        this.root.querySelector("[id=navlist-item__"+this.value+"]").checked = true;
      }
    });
  }

  getArray() {
    let a = this.start;
    let b = this.end;
    return [...Array(b-a+1).keys()].map(v=>v+a);
  }
}

window.customElements.define('nav-list', NavList);
