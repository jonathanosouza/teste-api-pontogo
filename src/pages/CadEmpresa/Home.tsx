import { CadEmpresaContainer, CadEmpresaHeader, HomeContainer } from "./Homestyles";
import { Buildings, ShoppingCart } from "phosphor-react";
import { useContext, useEffect } from "react";
import { AddToCartContex, Empresas } from "../../components/ChecoutContex/ContexCart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { api } from "../../service/api";



export function CadEmpresa() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { setCompany } = useContext(AddToCartContex)

  function handleAddCompany(CompanyData: Empresas) {
    api.post('register-company', CompanyData)
      .then(response => { setCompany(response.data), console.log(response.data) })
      .catch(error => console.log(error))
    console.log(CompanyData)

    reset()
    alert('Empresa cadastrada com sucesso')
  }

  return (
    <HomeContainer>
      <CadEmpresaHeader>
        <Buildings size={34} color="blue" /> <h2>Cadastrar Empresa</h2>
      </CadEmpresaHeader>

      <CadEmpresaContainer>
        <Form onSubmit={handleSubmit(handleAddCompany)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome Empresa: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Empresa:"
              {...register("name",
                { required: { value: true, message: "Campo Obrigatório" } }
              )} />
          </Form.Group>
          <span>{errors.name?.message}</span>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefone:"
              {...register("phone",
                { required: { value: true, message: "Campo Obrigatório" } })} />
          </Form.Group>
          <span>{errors.phone?.message}</span>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email:"
              {...register("email",
                { required: { value: true, message: "Campo Obrigatório" } })} />
          </Form.Group>
          <span>{errors.email?.message}</span>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CNPJ: </Form.Label>
            <Form.Control
              type="text"
              placeholder="CNPJ:"
              {...register("cnpj",
                { required: { value: true, message: "Campo Obrigatório" } })} />
          </Form.Group>
          <span>{errors.cnpj?.message}</span>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Razao Social: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Razao Social:"
              {...register("razaoSocial",
                { required: { value: true, message: "Campo Obrigatório" } })} />
          </Form.Group>
          <span>{errors.razaoSocial?.message}</span>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </CadEmpresaContainer>
    </HomeContainer>
  )
}