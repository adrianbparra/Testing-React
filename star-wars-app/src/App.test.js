import React from "react";
import App from "./App";
import axios from "axios"

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";



// jest.mock("axios", () => {
//     return {
//         get: jest.fn(()=> Promise.resolve({
//             data: {
//                 next: "link",
//                 previous: "link",
//                 results: [
//                     {name: "Adrian Parra"}
//                 ]
//             }

//         }))
//     }
// })

test("test App renders with img",()=>{
    const wrapper = rtl.render(<App/>)

    wrapper.getAllByAltText(/logo/i);
})

test("test character shown on axios call",async ()=>{
    const wrapper = rtl.render(<App/>)

    const characters = await wrapper.findAllByTestId("character");

    expect(characters[0]).toBeVisible
})


test("next button select", async ()=>{
    const wrapper =rtl.render(<App/>)

    await wrapper.findAllByTestId("character");


    // expect(wrapper.findByText(/next/i)).toBeVisible();
    console.log("find: ", wrapper.getByText(/next/i))

    const nextBtn = wrapper.getByText(/next/i);

    rtl.act(()=>{
        rtl.fireEvent.click(nextBtn)
        
        
        // expect(wrapper.findByText(/wilhuff/i)).toBeVisible()
    })
    
    await wrapper.findAllByTestId("character")
    
    expect(wrapper.getByText(/Anakin/i)).toBeVisible()


})