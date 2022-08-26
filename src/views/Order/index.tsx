import { useEffect, useState } from "react";
import { api } from "../../api";

import { useNavigate } from "react-router-dom";
import * as Style from "./style";

import { FaPlus } from "react-icons/fa";

import { Table, Spinner } from "reactstrap";

export const ListOrder = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("orders", { page: 1 })
      .then((response) => {
        setOrders(response.data.rows);
        if (response.data.rows) setLoading(false);
      })
      .catch((error) => console.log("deu merda", error));
  }, []);

  return (
    <Style.Container>
      {loading && (
        <Spinner
          color="primary"
          style={{
            position: "absolute",
            right: "50%",
            top: "40%",
            height: "3rem",
            width: "3rem",
          }}
        />
      )}
      <Table>
        <thead>
          <tr>
            <th>ID PEDIDO</th>
            <th>CLIENTE</th>
            <th>SERVIÇO</th>
            <th>PREÇO</th>
            <th>PREVISÃO DE ENTREGA</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.client.name}</td>
                  <td>{item.service.name}</td>
                  <td>R$: {item.price}</td>
                  <td>{new Intl.DateTimeFormat('en-US').format(new Date(item.delivery_forecast))}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Style.ButtonAddOrder onClick={() => navigate("/register-order")}>
        <FaPlus size={35} color="#fff" />
      </Style.ButtonAddOrder>
    </Style.Container>
  );
};
