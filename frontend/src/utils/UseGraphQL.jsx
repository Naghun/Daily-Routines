import React, { useEffect, useState } from "react";

function UseGraphQL(csrfToken, query, variables) {

    const [data, setData] = useState(null)

    useEffect(()=> {
        if (csrfToken || !query) return;

        const getData = () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                credentials: 'include',
                body: JSON.stringify({
                    query: query,
                    variables: variables,
                }),
            }
            fetch('http://127.0.0.1:8000/api/graphql/', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.data.specificTasks);
                console.log(data.data.specificTasks);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }

        getData();
    }, [csrfToken, query])

    return data
}

export default UseGraphQL;
