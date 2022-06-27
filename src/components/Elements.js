const Elements = {
    "label": <label></label>,
    "textarea":<input></input>,
    "textbox":<textarea></textarea>,
    "button":<button></button>,
    "div":<div></div>
}

export default function createElement(type,data=null){
    return Elements[type]
}