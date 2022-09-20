import axios from "axios";
import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));{/* Esse Comando seta uma data pegando a data de hoje - 365 dias*/}
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(() => {
        axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data);
            });   
    }, []);


    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date:Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                </div>
                <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date:Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table"> {/*<!--Abre a Tabela--> */}
                    <thead> {/*<!--Esse é o cabeçalho da tabela -->*/}
                        <tr> {/*<!--Table roll é uma linha da tabela-->*/}
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th> {/*<!-- Cada "Th" é um item do cabeçalho da Table -->*/}
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>{/*<!--Esse é o Corpo da Tabela-->*/}
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/09/2022</td>
                            <td>Anakim</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/09/2022</td>
                            <td>Anakim</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/09/2022</td>
                            <td>Anakim</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;