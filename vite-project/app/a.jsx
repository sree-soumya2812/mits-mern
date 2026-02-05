import Navbar from "./component/Navbar"
const app=()=>{
    const element = <h1>hello!!</h1>
    return(
        <>
        <h1>Hello World</h1>
        <h2>Welcome to my app</h2>
        {element}
        <Navbar/>
        </>
    )
}
export default app;