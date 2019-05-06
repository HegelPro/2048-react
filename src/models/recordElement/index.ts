import { Record } from 'immutable'

import { VectorRecord } from '../vector'

import { IRecordElement } from './types'

const defaultRecordElementValue: IRecordElement = {
  position: new VectorRecord(),
  value: 0,
}

export class RecordElementRecord extends Record<IRecordElement>(defaultRecordElementValue) {}
