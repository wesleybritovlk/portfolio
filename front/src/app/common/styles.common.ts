export class StylesCommon {
  static readonly mediaSmall = matchMedia('(min-width: 360px)')
  static readonly mediaMedium = matchMedia('(min-width: 600px)')
  static readonly mediaLarge = matchMedia('(min-width: 820px)')
  static readonly mediaExtraLarge = matchMedia('(min-width: 1340px)')
}

export const viewContainer = (): Record<string, string> => {
  let height = '650px'
  if (StylesCommon.mediaSmall.matches) height = '740px'
  if (StylesCommon.mediaMedium.matches) height = '820px'
  let media: Record<string, string> = {flexFlow: 'column-reverse nowrap', height: height}
  if (StylesCommon.mediaLarge.matches) media = {flexFlow: 'row nowrap', height: '780px'}
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...media,
    width: '100%',
  }
}

export const flexContainer = (width?: number): Record<string, string> => {
  let media: Record<string, string> = {
    height: '580px',
    padding: '1rem .5rem',
  }
  if (StylesCommon.mediaSmall.matches) media = {
    height: '670px', padding: '2rem 1rem',
  }
  if (StylesCommon.mediaMedium.matches) media = {
    height: '720px', padding: '2rem 1.5rem',
  }
  if (StylesCommon.mediaLarge.matches) media = {
    height: '640px', padding: '1.7rem',
  }
  return {
    display: 'flex',
    flexFlow: 'column',
    width: width ? `${width}px` : '85%',
    ...media
  }
}

export const innerRowContainer = (): Record<string, string> => {
  let media: Record<string, string> = {
    height: '175px',
  }
  if (StylesCommon.mediaSmall.matches) media = {
    height: '200px'
  }
  if (StylesCommon.mediaMedium.matches) media = {
    height: '225px'
  }
  if (StylesCommon.mediaLarge.matches) media = {
    height: '250px',
  }
  return {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    ...media
  }
}

export const commonIcon = (menuIcon?: boolean): Record<string, string> => {
  let size: number = 22
  let display: Record<string, string> = {display: 'inline-flex'}
  if (StylesCommon.mediaSmall.matches) size = 27
  if (StylesCommon.mediaMedium.matches) size = 30
  if (StylesCommon.mediaLarge.matches) {
    display = {display: menuIcon ? 'none' : 'inline-flex'}
    size = 30
  }
  let media: Record<string, string> = {
    height: `${size}px`, width: `${size}px`, backgroundSize: `${size + 13}px`, fontSize: `${size - 3}px`
  }
  return {
    ...display,
    ...media,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 2px',
    borderRadius: '100%',
    backgroundPosition: 'center',
  }
}
