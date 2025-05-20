// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {


  return (
    <>
     {/*<ViteIntro/>*/}
     {/*<ClassComponent/>*/}
     {/*   <FunctionalComponent/>*/}
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="Is a ArrowFunctional Component with Props"/>
        <ArrowFunctionalComponentWithPropsType
            title="Is a Arrow Functional Component with Props!"
            description="this is a description"/>
    </>
  )
}

export default App
