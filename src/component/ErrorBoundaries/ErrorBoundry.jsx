import React from "react";

export class ErrorBoundary extends React.Component {
   constructor(props){
    super(props);
    this.state = { hasError:false}
   }

   static getDerivedStateFromError(error){
    return { hasError:true}
   }

   componentDidCatch(error){
   console.log("error",error.message)
   }

   render(){
    if(this.state.hasError){
      return this.props.fallback;
    }   
    return this.props.children;
   }
}