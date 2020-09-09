import {LitElement, html, css} from 'lit-element';

class ChildComponent extends LitElement{

    constructor(){
        super();
        this.color='green';
    }

    static get properties(){
        return {
            message:{type:String}
        }
    }

    static get styles(){
        return css`
            div{
                padding:5px;
                background-color:#10d210;
            }
            .input-message{
                width:100%;
                font-size:1.5em;
                font-family:Arial;
                text-align:center;
            }
            .button-change-color{
                display:block;
                font-size:1.58em;
                margin:5px auto;
                width:130px;
                height:50px;
                color:white;
                border:0px;
            }
            .red{background-color:red;}
            .blue{background-color:blue;}
            .green{background-color:green;}
        `;
    }

    inputMethod(event){
        this.message = event.target.value;
    }

    setColor(color){
        this.color = color;
    }

    changeParentBackgroundColor(color){
        this.setColor(color);
        this.dispatchEvent(
            new CustomEvent('change-background-color-parent', {detail: {
                bubble:true,
                color:this.color
            }})
        );
    }

    render(){
        return html`
            <div>
                <h1>Child component</h1>
                <h4>${this.message}</h4>  
                <input type="text" class="input-message" value=${this.message} @input="${this.inputMethod}" />
                <button class="button-change-color red" @click="${()=>this.changeParentBackgroundColor('red')}">Red</button>
                <button class="button-change-color blue" @click="${()=>this.changeParentBackgroundColor('blue')}">Blue</button>
                <button class="button-change-color green" @click="${()=>this.changeParentBackgroundColor('green')}">Green</button>
            </div>
        `;
    }
}

customElements.define('child-component', ChildComponent);