import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../service/api";

export interface Empresas {
  companyId: string
  employeeId: String
  tokenCompanyForPontoGo: string
  userId: string
}


export interface Employers {
  email: string
  cpf: string
  firstName: string,
  lastName: string,
  admissionDate: string,
  birthdate: string,
  registration: string,
  companyAdmissionDate: string,
  pis: string,
  isCLT: boolean,
  id: string,
  name: string,
  pointWithPicture: boolean,
  journeyRuleId: string, // not mandatory
  shiftId: string, // not mandatory
  jobTitleId: string // not mandatory
}

export interface AddPointProps {
  createdAt: string,
  date: string,
  employee: string,
  id: string,
  latLng: {
    latitude: number,
    longitude: number
  },
  localDate: string,
  userData: {
    device: string,
    gatewayMac: string,
    ip: string,
    operatingSystem: string
  }
}


interface EmpresaProps {
  company?: Empresas,
  addpoint?: AddPointProps
  employer?: Employers,
  setCompany: any,
  setEmployer: any,
  setAddPoint: any,


}

interface EmpresaProvider {
  children: ReactNode
}

export const AddToCartContex = createContext({} as EmpresaProps);
export const CartProvider = ({ children }: EmpresaProvider) => {




  const [company, setCompany] = useState<Empresas>()
  const [employer, setEmployer] = useState<Employers>()
  const [addpoint, setAddPoint] = useState<AddPointProps>()





  return (
    <AddToCartContex.Provider
      value=
      {{
        employer,
        company,
        addpoint,
        setAddPoint,
        setCompany,
        setEmployer
      }}>{children}
    </AddToCartContex.Provider>
  );

}