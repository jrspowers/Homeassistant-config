import { LitElement, html, css } from "card-tools/src/lit-element.js";
import { hass } from "card-tools/src/hass.js";
import { DOMAINS_HIDE_MORE_INFO, createEntityRow } from "card-tools/src/lovelace-element.js";

class FoldEntityRow extends LitElement {
  static get properties() {
    return {
      open: Boolean,
      rows: {},
    };
  }

  setConfig(config) {
    const defaults = {
      open: false,
      padding: 20,
      group_config: {},
    };

    this._config = Object.assign({}, defaults, config);
    this.open = this.open || this._config.open;

    let head = this._config.head;
    if (this._config.entity)
      head = this._config.entity;
    if(!head) {
      throw new Error("No fold head specified");
    }
    if (typeof head === "string")
      head = {entity: head};

    // Items are taken from the first available of the following
    // - The group specified as head
    // - config entities: (this allows auto-population of the list)
    // - config items: (for backwards compatibility - not recommended)
    let items = this._config.items;
    if (this._config.entities !== undefined)
      items = this._config.entities;
    if (head.entity && head.entity.startsWith("group.") && items === undefined)
      items = hass().states[head.entity].attributes.entity_id;
    else
      if(items === undefined)
        throw new Error("No entities specified.");
      else if(!items || items.length === undefined)
        throw new Error("Entities must be a list.");

    const fix_config = (config) => {
      if(typeof config === "string")
        config = {entity: config};
      return Object.assign({}, this._config.group_config, config);
    }

    this.head = createEntityRow(head);
    this.head.hass = hass();
    this.head.addEventListener("click", (ev) => {
      if(!this.hasMoreInfo(head) && !head.tap_action)
      this.toggle(ev);
    });
    this.head.setAttribute('head', 'head');
    this.applyStyle(this.head, head);
    if(this.head.tagName === "HUI-SECTION-ROW") {
      customElements.whenDefined(this.head.localName).then(async () => {
        await this.updateComplete;
        await this.head.updateComplete;
          this.head.shadowRoot.querySelector(".divider").style.marginRight = "-56px";
      });
    }

    this.rows = items.map((i) => {
      const row = createEntityRow(fix_config(i));
      row.hass = hass();
      if(this.hasMoreInfo(i))
        row.classList.add("state-card-dialog");
      this.applyStyle(row, fix_config(i));
      return row;
    });
  }

  async applyStyle(root, config) {
    if(!config.style) return;

    //await customElements.whenDefined("card-mod");
    if(root.updateComplete)
      await root.updateComplete;

    const cm = document.createElement("card-mod");
    cm.template = {
      template: config.style,
      variables: {config},
      entity_ids: config.entity_ids,
    };
    customElements.whenDefined(root.localName).then(() => {
      if(root.shadowRoot)
        root.shadowRoot.appendChild(cm);
    });
  }

  toggle(ev) {
    if(ev)
      ev.stopPropagation();
    this.open = !this.open;
  }

  hasMoreInfo(config) {
    const entity = config.entity || (typeof config === "string" ? config : null);
    if(entity && !DOMAINS_HIDE_MORE_INFO.includes(entity.split(".",1)[0]))
      return true;
    return false;
  }

  set hass(hass) {
    this.rows.forEach((e) => e.hass = hass);
    this.head.hass = hass;
  }

  render() {
    return html`
    <div id="head" ?open=${this.open}>
      ${this.head}
      <ha-icon
        @click=${this.toggle}
        icon=${this.open ? "mdi:chevron-up" : "mdi:chevron-down"}
      ></ha-icon>
    </div>

    <div id="items"
      ?open=${this.open}
      style=
        ${this._config.padding
          ? `padding-left: ${this._config.padding}px;`
          : ''
        }
    >
      ${this.rows}
    </div>
    `;
  }

  static get styles() {
    return css`
      #head {
        --toggle-icon-width: 40px;
        display: flex;
        cursor: pointer;
        align-items: center;
      }
      #head :not(ha-icon) {
        flex-grow: 1;
        max-width: calc(100% - var(--toggle-icon-width));
      }
      #head ha-icon {
        width: var(--toggle-icon-width);
        cursor: pointer
      }

      #items {
        padding: 0;
        margin: 0;
        overflow: hidden;
        max-height: 0;
      }
      #items[open] {
        overflow: visible;
        max-height: none;
      }
      .state-card-dialog {
        cursor: pointer;
      }
    `;
  }

}


if(!customElements.get("fold-entity-row")) {
  customElements.define('fold-entity-row', FoldEntityRow);
  const pjson = require('../package.json');
  console.info(`%cFOLD-ENTITY-ROW ${pjson.version} IS INSTALLED`,
  "color: green; font-weight: bold",
  "");
}
