import { CadEmpresaContainer, CadEmpresaHeader, HomeContainer } from "./Homestyles";
import { Buildings, ShoppingCart, UserCircle } from "phosphor-react";
import { useContext, useState } from "react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export interface Employer {
  email: string,
  cpf: string,
  firstName: string,
  lastName: string,
  admissionDate: Date,
  birthdate: Date,
  registration: string,
  pis: null,
  pointWithPicture: boolean,
  companyAdmissionDate: Date,
  clt: boolean

}

export interface EmployerPrpos {
  employer: Employer[]
  setEmployer: Employer[]
  handleAddEmployer: (employerData: Employer) => void
}

export function CadFunc() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { setCompany, company, employer, setEmployer } = useContext(AddToCartContex)



  function AddUser() {
    const notify = () => toast(" Usuário Cadstrado com Sucesso !");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

  function handleAddEmployer(employerData: any) {
    const employers = {
      disableMandril: true,
      employees: [{
        ...employerData,
        clt: true,
        pis: null,
        pointWithPicture: false,
        birthdate: new Date(employerData.birthdate).toISOString(),
        admissionDate: new Date(employerData.admissionDate).toISOString(),
        companyAdmissionDate: new Date(employerData.companyAdmissionDate).toISOString()
      }]
    }

    api.post(`/register-employees?company-token-pg=${company?.tokenCompanyForPontoGo}`, employers)
      .then(response => { setEmployer(response.data.employees[0]), console.log(response.data.employees[0]) })
      .catch(error => console.log(error))

    console.log(employer)
    reset()
    alert('Cadastrado com sucesso')

  }

  return (
    <HomeContainer>
      <CadEmpresaHeader>
        <UserCircle size={34} color="blue" /> <h2>Cadastrar Funcionário</h2>
      </CadEmpresaHeader>

      <CadEmpresaContainer>
        <Form onClick={handleSubmit(handleAddEmployer)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              placeholder="email:"
              {...register("email")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="CPF:"
              {...register("cpf")}

            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Primeiro Nome:"
              {...register("firstName")} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Sobrenome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ultimo Nome:"
              {...register("lastName")} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de Admissao: </Form.Label>
            <Form.Control
              type="date"
              placeholder="Data Admissao:"
              {...register("admissionDate")} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de Aniversario: </Form.Label>
            <Form.Control
              type="date"
              placeholder="Aniversario:"
              {...register("birthdate")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Registration: </Form.Label>
            <Form.Control
              type="text"
              placeholder="registration:"
              {...register("registration")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data de Admissa na Compania: </Form.Label>
            <Form.Control
              type="date"
              placeholder="Aniversario:"
              {...register("companyAdmissionDate")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Adicionar Usuário
          </Button>
        </Form>
      </CadEmpresaContainer>
    </HomeContainer>
  )
}