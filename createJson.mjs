import {readdirSync, writeFileSync} from 'fs'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dirPath = join(__dirname, 'public', 'images', 'photos')
const files = readdirSync(dirPath)

const json = JSON.stringify(files, null, 2)
writeFileSync(join(__dirname, 'public', 'images', 'photos.json'), json)
