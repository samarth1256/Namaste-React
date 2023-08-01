import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo should load on rendering header",()=>{
    const header=render(<Header/>);
})