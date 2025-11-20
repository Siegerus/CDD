import React from "react"
// render-prop
// Передача функции с условным рендеринго нижестоящему к-ту

const boolean = true;

const RenderProp = () => {
    return (
        <>
            <div>OuterComponent</div>
            <InnerComponent render={(boolean) => boolean ? <div>true html from InnerComponent</div> : <div>false html from InnerComponent</div>  } />
        </>
    )
}

const InnerComponent = ({render}) => {
    return (
        <div>InnerComponent {render(boolean)}</div>
    )
}

export default RenderProp;
