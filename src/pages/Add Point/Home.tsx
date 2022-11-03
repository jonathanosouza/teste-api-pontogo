import { HomeContainer } from "./Homestyles";
import { MagnifyingGlassPlus } from "phosphor-react";
import { useContext } from "react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { CadEmpresaHeader } from "../CadFunc/Homestyles";
import { api } from "../../service/api";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";




export function AddPoint() {

  const { company, setCompany, employer, setEmployer, setAddPoint, addpoint } = useContext(AddToCartContex)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()


  function handleAddPoint(PointData) {
    const AddPointEmployer = {
      date: new Date(PointData.date).toISOString(),
      latitude: null,
      longitude: null,
      userData: {
        device: "iPhone 13",
        gatewayMac: null,
        ip: "192.168.15.13",
        operatingSystem: "iOS"
      }
    }

    api.post(`/add-point?company-token-pg=${company?.tokenCompanyForPontoGo}&employee-token-pg=${employer?.id}`, AddPointEmployer).then(response => {
      response.data, setAddPoint(response.data), console.log(response.data)
    }).catch(error => console.log(error))
    console.log(AddPointEmployer)


    reset()
    alert('Ponto Salvo com Sucesso')
  }

  return (
    <HomeContainer>
      <CadEmpresaHeader>
        <MagnifyingGlassPlus size={34} color="blue" /> <h2>Registrar Ponto</h2>
      </CadEmpresaHeader>
      <Form onSubmit={handleSubmit(handleAddPoint)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bater Ponto </Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Aniversario:"
            {...register("date",
              { required: { value: true, message: "Campo Obrigatório" } })} />
        </Form.Group>
        <span>{errors.companyAdmissionDate?.message}</span>

        <Button variant="primary" type="submit">
          Bater Ponto
        </Button>
      </Form>
    </HomeContainer>
  )
}