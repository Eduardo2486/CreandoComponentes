import {LitElement, css, html } from 'lit-element';

import './child-component.js';

class ParentComponent extends LitElement{
    
    static get properties(){
        return{
            childMessage:{ type: String } ,
            background:{type: String}
        }
    }

    constructor(){
        super();
    }


    static get styles(){
        return css`
        div{
            
            text-align:center;
            padding:5px;
            
        }
        h3{
            color:white;
        }
        `;
    }
    requestUpdate() {
        console.log("Changed");
    }

    changecolor(event){
        this.background = event.detail.color;
    }

    render(){
        return html`
        <div style="background-color:${this.background}">
            <h1>Parent component</h1>
            <h3>Jugando con colores</h3>
            <child-component message=${this.childMessage} @change-background-color-parent=${this.changecolor}><child-component>
        </div>`;
    }

}

customElements.define('parent-component', ParentComponent);