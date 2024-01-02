export class StylesCommon {
  static readonly mediaMobile = matchMedia('(min-width: 360px)');
  static readonly mediaTablet = matchMedia('(min-width: 600px)');
  static readonly mediaLaptop = matchMedia('(min-width: 820px)');
}

export const viewContainer = (): Record<string, string> => {
  let height = '650px';
  if (StylesCommon.mediaMobile.matches) height = '740px';
  if (StylesCommon.mediaTablet.matches) height = '820px';
  let media: Record<string, string> = {flexFlow: 'column-reverse nowrap', height: height};
  if (StylesCommon.mediaLaptop.matches) media = {flexFlow: 'row nowrap', height: '780px'};
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...media,
    width: '100%',
  }
};

export const flexContainer = (width?: number): Record<string, string> => {
  let media: Record<string, string> = {
    height: '580px', padding: '.5rem',
  }
  if (StylesCommon.mediaMobile.matches) media = {
    height: '670px', padding: '1rem',
  }
  if (StylesCommon.mediaTablet.matches) media = {
    height: '720px', padding: '1.5rem',
  }
  if (StylesCommon.mediaLaptop.matches) media = {
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
  if (StylesCommon.mediaMobile.matches) media = {
    height: '200px'
  }
  if (StylesCommon.mediaTablet.matches) media = {
    height: '225px'
  }
  if (StylesCommon.mediaLaptop.matches) media = {
    height: '250px',
  }
  return {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    ...media
  }
}

export const commonButton = (disabled?: boolean, bkgColor?: string, color?: string): Record<string, string> => {
  let media: Record<string, string> = {
    width: '70px', height: '35px', fontSize: 'var(--text-size-smaller)'
  }
  if (StylesCommon.mediaMobile.matches) media = {
    width: '80px', height: '40px', fontSize: 'var(--text-size)'
  }
  if (StylesCommon.mediaTablet.matches) media = {
    width: '85px', height: '45px',
  }
  if (StylesCommon.mediaLaptop.matches) media = {
    width: '87px', height: '47px',
  }
  return {
    cursor: disabled ? 'not-allowed' : 'pointer',
    background: bkgColor ?? 'var(--bkg-color)',
    color: color ?? 'var(--text-color)',
    border: `2px solid ${color ?? 'var(--text-color)'}`,
    borderRadius: '25px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...media
  }
}

export const commonIcon = (menuIcon?: boolean): Record<string, string> => {
  let size: number = 23;
  let display: Record<string, string> = {display: 'inline-flex'}
  if (StylesCommon.mediaMobile.matches) size = 30
  if (StylesCommon.mediaTablet.matches) size = 35
  if (StylesCommon.mediaLaptop.matches) {
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
