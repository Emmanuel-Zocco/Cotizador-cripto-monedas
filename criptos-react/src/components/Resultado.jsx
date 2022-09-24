import styled from "@emotion/styled"

const Result = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items:center;
    gap: 1rem;
    margin-top:30px;

`
const Imagen = styled.img`
    display: block;
    width:120px;
`
const Text = styled.p`
     font-size: 18px;
    span{
        font-weight:700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight:700;
    }
`

const Resultado = ({resultado}) => {
   
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}= resultado
  return (
    <Result>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
    <div>
    <Precio>El precio es de: <span>{PRICE}</span></Precio>
    <Text>El precio mas alto del dia: <span>{HIGHDAY}</span></Text>
    <Text>El precio mas bajo del dia: <span>{LOWDAY}</span></Text>
    <Text>Variacion ultimas 24 hs: <span>{CHANGEPCT24HOUR}</span></Text>
    <Text>Ultima actualizacion: <span>{LASTUPDATE}</span></Text>
    </div>
    </Result>
  )
}

export default Resultado
