import { Codec, Either, GetType, Left, Right, string } from 'purify-ts'
import { rootStateShcema } from '../store/reducers'

type LocalStorageState = Record<string, Codec<any>>

const localStorageSchema = {
  version: string,
  state: rootStateShcema,
}

class LocalStorageService<State extends LocalStorageState> {
  schema: State

  constructor(schema: State) {
    this.schema = schema
  }

  get<Key extends keyof State>(key: Key): Either<string, GetType<State[Key]>> {    
    try {
      const serializedState = localStorage.getItem(key as string)
  
      if (serializedState === null) {
        return Left(`Local storage get key: ${key} is null`)
      }
      const parsedSerializedState = JSON.parse(serializedState)

      const decode = this.schema[key].decode

      return decode(parsedSerializedState)
    } catch (err) {
      return Left(`Local storage get key: ${key} error`)
    }
  }

  set<
    Key extends keyof State,
    Value extends GetType<State[Key]>,  
  >(key: Key, value: Value): Either<string, Value> {
    try {
      const encode = this.schema[key].encode

      const serializedState = JSON.stringify(encode(value))
      localStorage.setItem((key as string), serializedState)
      
      return Right(value)
    } catch {
      return Left(`Local storage set key: ${key} error`)
    }
  }
}

export default new LocalStorageService(localStorageSchema)
