import Hiragana from './syllabary/Hiragana'
import Katakana from './syllabary/Katakana'

const DEFAULT_LIFE = 1000
const DEFAULT_DATA = Object.assign(Katakana, Hiragana)
const DATA_LENGTH = Object.keys({ ...DEFAULT_DATA }).length

export { DEFAULT_LIFE, DEFAULT_DATA, DATA_LENGTH, Hiragana, Katakana }
