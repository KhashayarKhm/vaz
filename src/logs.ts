export function help(): void {
  console.log('Usage: vaz <current path> <new path>')
  console.log('WARNING: THIS COMMAND ONLY WORKS ON JAVASCRIPT OR JAVASCRIPT BASE PROJECTS')
}

export const invalidFileExtension = () => {
  console.log('ERROR: Invalid file extension')
  help()
}
