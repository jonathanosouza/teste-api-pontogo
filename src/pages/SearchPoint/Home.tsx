import { HistoryList, HomeContainer } from "./Homestyles";
import { MagnifyingGlassPlus } from "phosphor-react";
import { useContext, useState } from "react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { CadEmpresaHeader } from "../CadFunc/Homestyles";
import { api } from "../../service/api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Moment from 'moment'
import { AddPoint } from "../Add Point/Home";


interface PointListProps {
  createdAt: string,
  date: string,
  id: string,
}

interface Search {
  pointlist: PointListProps[]
}

export function SearchPoint() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { company, employer, addpoint } = useContext(AddToCartContex)
  const [pointlist, setPointList] = useState<PointListProps[]>([])

  function handleListPoint(ListPointData: any) {
    const di = (new Date(ListPointData.initialDate).toLocaleDateString())
    const df = (new Date(ListPointData.endDate).toLocaleDateString())

    api.get(`/get-points?initialDate=${di}&endDate=${df}&company-token-pg=${company?.tokenCompanyForPontoGo}&employee-token-pg=${employer?.id}`).then(response => {
      setPointList(response.data)
    }).catch(error => console.log(error))


    console.log(pointlist)
  }


  return (
    <HomeContainer>
      <CadEmpresaHeader>
        <MagnifyingGlassPlus size={34} color="blue" /> <h2>Buscar Pontos</h2>
      </CadEmpresaHeader>

      <Form onSubmit={handleSubmit(handleListPoint)}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Data Inicial: </Form.Label>
          <Form.Control
            type="date"
            placeholder="Data Inicial:"
            {...register("initialDate",
              { required: { value: true, message: "Campo Obrigatório" } }
            )} />
        </Form.Group>
        <span>{errors.initialDate?.message}</span>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Data Final: </Form.Label>
          <Form.Control
            type="date"
            placeholder="Data Final:"
            {...register("endDate",
              { required: { value: true, message: "Campo Obrigatório" } })} />
        </Form.Group>
        <span>{errors.endDate?.message}</span>

        <Button variant="primary" type="submit">
          Consultar
        </Button>
      </Form>
      <HistoryList>
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Hora Ponto</th>
              </tr>
            </thead>
            <tbody>
              {
                pointlist.map(list => {
                  if (list.id) {
                    return (
                      <tr key={list.id}>
                        <td>{employer?.id}</td>
                        <td>{employer?.firstName}</td>
                        <td>{employer?.lastName}</td>
                        <td>{new Date(addpoint?.date).toLocaleString()}</td>

                      </tr>
                    )
                  }
                })
              }

            </tbody>
          </table>
        </>

      </HistoryList>
    </HomeContainer>
  )
}







