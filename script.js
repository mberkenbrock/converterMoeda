function converterMoeda(valor){
    var de_para = 'BRL_USD';
    var urlStr = 'https://free.currconv.com/api/v7/convert?q=' + de_para + '&compact=ultra&apiKey=7c6ecc8f4ff551b279be';

    const showData = (result)=>{
        for(const campo in result){
            valorDolar.value = result[campo];
        }
    }
    const option = {
        method: 'GET',
        mode : 'cors',
        cache : 'default'
    }
    fetch(urlStr,option)
    .then(response => { response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu erro'))
}
