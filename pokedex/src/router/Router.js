import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { PokedexPage } from "../Pages/PokedexPage";
import { DetailsPage } from "../Pages/DetailsPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/pokedex">
                    <PokedexPage />
                </Route>
                <Route exact path="/detalhe">
                    <DetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}