import '@testing-library/jest-dom';

import { render } from "@testing-library/react";
import Header  from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", async() => {
    //Load header component
    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    //console.log(header);
    //check if logo is loaded

    const logo = await header.findAllByAltText('logo');
    expect(logo[0]).toBeInTheDocument();


});
test("cart should be 2 on load", async() => {
    //Load header component
    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    //console.log(header);
    //check if logo is loaded

    const cartItems = await header.findByTestId('cartItems');

    //console.log(cartItems);
    
    expect(cartItems).toHaveTextContent("2");
});

