import React, { useEffect } from 'react';

function Fetch() {
    useEffect(() => {
        const btn = document.getElementById('btn');
        const output = document.getElementById('output');
        if (btn && output) {
            const handleClick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(data => {
                        let outputData = '';
                        data.forEach(post => {
                            outputData += `<h3>${post.title}</h3><p>${post.body}</p>`;
                        });
                        output.innerHTML = outputData;
                    });
            };
            btn.addEventListener('click', handleClick);

            return () => {
                btn.removeEventListener('click', handleClick);
            };
        }
    }, []);

    return (
        <div>
            <h1>Fetch API</h1>
            <button id="btn">Buscar Dados</button>
            <div id="output"></div>
        </div>
    );
}

export default Fetch;
