import { Subject } from './../models/subject.model'
import { AllFiliere } from './filiere.data'

export const complexiteAlgorithme = new Subject(
  'Complexite algorithme',
  AllFiliere.gl3
)

export const jee = new Subject('Dev. JEE', AllFiliere.gl3)
export const unix = new Subject('Unix', AllFiliere.gl3)
export const uml = new Subject('UML & Design patterns', AllFiliere.gl3)
export const architectureMat = new Subject(
  'Programmation Bas niveau',
  AllFiliere.gl3
)
