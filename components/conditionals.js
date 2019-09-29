import React, { useState, useEffect } from "react";
import axios from "axios";

const conditionalsFoo = () => {
    const defaultState = {
        data: null,
        isLoading: true,
    };

    const [state, setState] = useState({
        ...defaultState
    })

    const fetchTodos = async () => {
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(fetchedTodos => {
                setState({
                    ...defaultState,
                    data: fetchedTodos,
                    isLoading: false,
                });
            }).catch(() => {
                setState({
                    ...defaultState,
                    isLoadig: false,
                });
            });
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    if (state.isLoading) {
        return <div data-testid="loading">Loading data...</div>;
    }

    return (
        <div data-testid="displayer">{JSON.stringify(state.data)}</div>
    );
};

export default conditionalsFoo;
