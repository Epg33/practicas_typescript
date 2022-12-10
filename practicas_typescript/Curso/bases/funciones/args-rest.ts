(()=>{

  const fullName = ( firstName : String, ...restArgs: string[] ): string => {
    return `${ firstName } ${restArgs.join(' ')}`
  }

  const superman = fullName('Clark', 'Joseph', 'Kent')

  console.log({ superman })
})()