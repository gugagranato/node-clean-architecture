import { HttpResponse, HttpRequest } from '../protocols/https'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return badRequest(new MissingParamError('Something wrong happened...'))
  }
}
