function RenderizacaoCondicional(){
    const a = 10;
    const b = 20;
    
    // return <div>
    //     {a+a+a+b > b+a ? a+b+a : b+b+a}
    // </div>

    if(a+a+a+b > b+a){
        return <div>{b+a}</div>
    }

    return <div>{b+b+a}</div>
}


export default RenderizacaoCondicional;