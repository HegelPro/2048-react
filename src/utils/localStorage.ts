import { Either, Left, Right } from 'purify-ts'

class LocalStorageService {
  static get<Value>(key: string, decode: (value: unknown) => Either<string, Value>): Either<string, Value> {    
    try {
      const serializedState = localStorage.getItem(key)
  
      if (serializedState === null) {
        return Left(`Local storage get key: ${key} is null`)
      }
      const parsedSerializedState = JSON.parse(serializedState)
  
      return decode(parsedSerializedState)
    } catch (err) {
      return Left(`Local storage get key: ${key} error`)
    }
  }

  static set<Value>(key: string, value: Value, encode: (value: Value) => unknown): Either<string, Value> {
    try {
      const serializedState = JSON.stringify(encode(value))
      localStorage.setItem(key, serializedState)
      
      return Right(value)
    } catch {
      return Left(`Local storage set key: ${key} error`)
    }
  }
}

export default LocalStorageService
