export function help(): void {
  console.log('Usage: vaz <current path | current name> <new path | new name>')
  console.log('WARNING: THIS COMMAND ONLY WORKS ON JAVASCRIPT OR JAVASCRIPT BASE PROJECTS')
}

export const invalidFileExtension = () => {
  console.log('ERROR: Invalid file extension')
  help()
}
