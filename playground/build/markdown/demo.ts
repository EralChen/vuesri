import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
// @ts-ignore
import mdContainer from 'markdown-it-container'
import { highlight } from '../../utils/highlight'
// import { docRoot } from '../../utils/paths'
import { demosRoot } from '../../config/path'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
const localMd = MarkdownIt()
// const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}
const rSourceAttr = (m: RegExpMatchArray|null, sourceFileToken: Token) => {
  const description = m && m.length > 1 ? m[1] : ''
  let source = ''
  const sourceFile = sourceFileToken.children?.[0].content ?? ''

  if (sourceFileToken.type === 'inline') {
    source = fs.readFileSync(
      path.resolve(demosRoot, `${sourceFile}`),
      'utf-8',
    )
  }
  return {
    description,
    source,
    sourceFile
  }
}

const fixedSourceForProd = (source: string) => source.replace(
  /import(.+)from\s['|"]@vunk\/components\/(.+)['|"]/g, 
  function(a, p1, p2){
    return `import${p1}from 'vunk'`
  }
).replace(
  /import(.+)from\s['|"]@vunk\/echarts\/components\/(.+)['|"]/g, 
  function(a, p1, p2){
    return `import${p1}from 'vunk/echarts'`
  }
).replace(
  /import(.+)from\s['|"]@vunk\/shared\/(.+)['|"]/g, 
  function(a, p1, p2){
    return `import${p1}from 'vunk/shared/${p2}'`
  }
).replace(
  /import(.+)from\s['|"]@vunk\/element-plus\/components\/(.+)['|"]/g, 
  function(a, p1, p2){
    return `import${p1}from 'vunk/element-plus'`
  }
).replace(
  /import(.+)from\s['|"]@vunk\/element-plus\/(.+)['|"]/g, 
  function(a, p1, p2){
    return `import${p1}from 'vunk/element-plus/${p2}'`
  }
)

export const mdDemoPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate (params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        let {description, source, sourceFile} = rSourceAttr(m, tokens[idx + 2])
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        source = fixedSourceForProd(source)
        return `  <Suspense> <DemoContainer source="${encodeURIComponent(
          // source,
          highlight(source, 'vue'),
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(localMd.render(description))}">`

      } else {
        return '</DemoContainer></Suspense>'
      }
    },
  } as ContainerOpts)


  md.use(mdContainer, 'source', {
    validate (params) {
      return !!params.trim().match(/^source\s*(.*)$/)
    },

    render (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^source\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {

        let {description, source, sourceFile} = rSourceAttr(m, tokens[idx + 2])
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        source = fixedSourceForProd(source)
        const fileType = sourceFile.split('.').at(-1)
        return `<SourceContainer  source="${encodeURIComponent(
          // source,
          highlight(source, fileType || 'vue'),
        )}" path="${sourceFile}" type="${fileType}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(localMd.render(description))}">`

      } else {
        return '</SourceContainer>'
      }
    },
  } as ContainerOpts)
  
}
