import {useState} from 'react';

export function Figuras() {

    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [figura,setFigura] = useState('triangulo');
    const [area, setArea] = useState(null)

    const calcular = (e) => {
        e.preventDefault();
        const n1 = parseFloat(base);
        const n2 = parseFloat(altura);

        if (figura === 'cuadrado') {
            if (isNaN(n1) || !base) {
                setArea('Ingrese el lado');
                return;
            }
        } else {
            if (isNaN(n1) || !base || isNaN(n2) || !altura) {
                setArea('Ingrese los dos numeros');
                return;
            }
        }

        let res;
        switch(figura){
            case 'triangulo': res = (n1 * n2) / 2;
            break;
            case 'rectangulo': res = (n1 * n2);
            break;
            case 'cuadrado': res = (n1 * n1);
            break;
            default: res = 0;
        }
        setArea(res);
    }

return(
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-4">Áreas de Figuras en React</h2>
            <form
                onSubmit={calcular}>
                    {/* Selector de figura*/}
                    <select
                        className="form-select mb-3"
                        value={figura}
                        onChange={(e)=> {setFigura(e.target.value); setAltura('')}}>
                            <option value="triangulo">Triángulo</option>
                            <option value="rectangulo">Rectángulo</option>
                            <option value="cuadrado">Cuadrado</option>
                    </select>
 
                    <input 
                        type="number"
                        className="form-control mb-3"
                        placeholder={figura === 'cuadrado' ? 'Lado' : 'Base'}
                        value={base}
                        onChange={(e) => setBase(e.target.value)} />

                    {/* Solo muestra este input si NO es cuadrado */}
                    {figura !== 'cuadrado' && (
                        <input 
                            type="number"
                            className="form-control mb-3"
                            placeholder="Altura"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)} />
                    )}
                    {/* Botones de accion*/}
                    <button type="submit" className="btn btn-primary w-100">Calcular</button>
            </form>
            {/* Mostrar los resultados*/}
            <p className="text-center fw-bold mt-4">Resultado: {area}</p>
        </div>
    )
}