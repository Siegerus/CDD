/* import "https://unpkg.com/react@18/umd/react.development.js"; */

// let HellowWorldHeading = <h1 className="my-class">Hellow World!Hellow World!Hellow World!Hellow World!ascasc</h1>;
// let container = document.getElementById("react-app");
// let root = ReactDOM.createRoot(container);
// root.render(HellowWorldHeading);

// function createLayout() {
//       return <div>
//                   <div className="inner">inner div</div>
//             </div>
// }
// root.render(createLayout());
// function f() {
//       return (
//             <div>
//                   <div className="inner">inner div</div>
//                   <div className="inner">inner div</div>
//             </div>
//       )
// }
// root.render(f());

// let App = ({buttonText, buttonClass}) => {
//       let [targetText , setButtonText] =  React.useState(buttonText);
//       let [targetClass, setButtonClass] = React.useState(buttonClass);
//       let [buttonType, setButtonType] = React.useState('')
//       /* let [bgColor, setBgColor] = React.useState(``); */

//       let onButtonclick = () => {
//             setButtonText(`Clicked!`);
//             if(!targetClass) setButtonClass(`green`);
//             else setButtonClass(``);

//       }
//       let mouseEnter = () => {
//             setButtonType(`button`);
//       }

//       let mouseLeave = () => {
//             setButtonType(``);
//       }
//       /* function changeColor() {
//             setBgColor(`green`);
//         } */
//       return (
//             <div className="app">
//                   <button className={targetClass} type={buttonType}
//                   onClick={onButtonclick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} /* style={{color: {bgColor}}} */><span>{targetText}</span></button>
//             </div>
//       )
// }
//   ReactDOM.createRoot(document.getElementById("react-app")).render(<App buttonText="Click!" buttonClass="" />);
