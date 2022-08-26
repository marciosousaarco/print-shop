import { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { api } from "../../api";

import { Col, FormGroup, Input, Button } from "reactstrap";

import * as Styler from "./style";

export const RegisterOrder = () => {
  const nav = useNavigate()
  const [clients, setClients] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [services, setServices] = useState([]);
  const [sendData, setSendData] = useState([]);

  const refForm = useRef();

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSendData({
      ...sendData,
      [name]: value,
    });
  };


  const registerOrder = () => {
    api
      .post("orders", sendData)
      .then((response) => nav(-1))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    api
      .get("clients")
      .then((response) => setClients(response.data))
      .catch((error) => console.log(error));
    api
      .get("services")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
    api
      .get("printers")
      .then((response) => setPrinters(response.data.res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Styler.FormContainer ref={refForm}>
      <form onChange={(e) => handleData(e)}>
        <FormGroup row className="form-group-style">
          <Col md={6} className="column-card-register">
            <Input
              name="client_id"
              bsSize="lg"
              type="select"
              className="input-register-style"
            >
              <option disabled selected value="">
                Selecione o cliente
              </option>
              {clients?.map((client) => {
                return (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                );
              })}
            </Input>

            <Input
              name="printer_id"
              bsSize="lg"
              type="select"
              className="input-register-style"
            >
              <option disabled selected value="">
                Selecione a impressora
              </option>
              {printers &&
                printers.map((printer) => {
                  return (
                    <option key={printer.id} value={printer.id}>
                      {printer.name}
                    </option>
                  );
                })}
            </Input>

            <Input
              name="service_id"
              bsSize="lg"
              type="select"
              className="input-register-style"
            >
              <option disabled selected value="">
                Selecione o serviço
              </option>
              {services?.map((service) => {
                return (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                );
              })}
            </Input>

            <Input
              placeholder="Quantidade"
              bsSize="lg"
              type="number"
              className="input-register-style"
              name="amount"
            />

            <Input
              placeholder="Preço"
              bsSize="lg"
              type="number"
              className="input-register-style"
              name="price"
            />
            <Input
              name="status"
              bsSize="lg"
              type="select"
              className="input-register-style"
            >
              <option selected disabled value="">
                status
              </option>
              <option value="Fechado">Fechado</option>
              <option value="Aberto">Aberto</option>
            </Input>

            <Input
              bsSize="lg"
              type="date"
              placeholder="data do pedido"
              className="input-register-style"
              name="delivery_date"
            />

            <Input
              bsSize="lg"
              type="date"
              placeholder="previsão de entrega"
              className="input-register-style"
              name="delivery_forecast"
            />

            <Button
              size="lg"
              onClick={registerOrder}
              className="button-register-style"
            >
              REGISTRAR PEDIDO
            </Button>
          </Col>
        </FormGroup>
      </form>
    </Styler.FormContainer>
  );
};
