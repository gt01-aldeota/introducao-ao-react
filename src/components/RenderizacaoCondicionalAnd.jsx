
export default function RenderizacaoCondicionalAnd() {
    const mostrarPreco = true;
    const preco = 20;

    // if (mostrarPreco) {
    //     return <div>
    //         <p>Nome: Tenis</p>
    //         <p>Preco: {preco}</p>
    //     </div>
    // }
    // return <div>
    //     <p>Nome: Tenis</p>
    // </div>

    return <div>
        <p>Nome: Tenis</p>
        {mostrarPreco && <p>Preco: {preco}</p>}
        {mostrarPreco ? <p>Preco: {preco}</p> : undefined}
    </div>
}