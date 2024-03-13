import type { PreRenderedAsset } from 'rollup'

type AssetOutputEntry = {
  regex: RegExp,
  output: string,
}

export const assetDir = 'assets'

export const entryFileNames = `${assetDir}/js/[name].js`
export const chunkFileNames = `${assetDir}/js/[name]-chunk-[hash].js`

const assetsRegexMap: AssetOutputEntry[] = [
  {
    regex: /\.(png|jpe?g|gif|svg|webp|avif)$/,
    output: `${assetDir}/img/[name][extname]`,
  },
  {
    regex: /\.css$/,
    output: `${assetDir}/css/[name][extname]`,
  },
]

export function assetFileNames(info: PreRenderedAsset): string {
  if (info && info.name) {
    const name = info.name as string
    const result = assetsRegexMap.find(a => a.regex.test(name))

    if (result) {
      return result.output
    }
  }

  return `${assetDir}/[name][extname]`
}
