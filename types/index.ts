// THIS FILE HOLDS ALL THE TYPES FOR THE AUTH

// PAYLOADS
// export type RegisterPayloadType = 'hand' | 'heart' | 'emoji'

//
export type RegisterPayloadType = {
  email: String
  password: String
  payback_days: String
  interest_rate: String
}

//
export type LoginPayloadType = {
  email: String
  password: String
}

// PARAMS
// tokens
export type TokenParams = {
  token: String
}

export type kycPayloadTypes = {
  first_name: string
  last_name: string
  address: string
  nationality: string
  email: string
  power_of_attorney: string
  pep: string | null | ""
  international_passport: string
  selfie: string
  passport_number: string

  company_name: string
  company_reg_number: string
  company_country: string
  company_address: string
  aml_appropriate_regulation: string
  appropriate_prudential_supervision: string
  certificate_of_incorporation: string

  company_account_number: string
  company_account_name: string
  company_bank: string
  service_charge: number
  recaptchaToken: string
}
