/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEditor } from './context'
import Combobox from './Combobox'

const defaultFonts = [
  'system-ui, sans-serif',
  '"Helvetica Neue", Helvetica, Arial, sans-serif',
  '"Avenir Next", Helvetica, Arial, sans-serif',
  'Verdana, sans-serif',
  'Inter, sans-serif',
  'Roboto, sans-serif',
  '"Roboto Condensed", sans-serif',
  '"Open Sans", sans-serif',
  'Georgia, serif',
  'Menlo, monospace',
  '"Roboto Mono", monospace',
]

export default ({ options = defaultFonts, ...props }) => {
  const context = useEditor()
  const { fonts = {} } = context.theme

  const onChange = key => val => {
    context.setTheme({
      fonts: {
        [key]: val,
      },
    })
  }

  return Object.keys(fonts).map(key => (
    <div key={key}>
      <Combobox
        label={key}
        name={'fonts.' + key}
        value={fonts[key]}
        onChange={onChange(key)}
        options={options}
      />
    </div>
  ))
}
