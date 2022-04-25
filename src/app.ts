const SUPPORTED_FILES = ['vue', 'ts', 'js'];

const help = () => {
  console.log('Usage: vaz <current path | current name> <new path | new name>');
  console.log('WARNING: THIS COMMAND ONLY WORKS ON JAVASCRIPT OR JAVASCRIPT BASE PROJECTS');
}

const isInSupportedFiles = (file: string | File): boolean => {
  const fileName = typeof file === 'string' ? file : file.name;
  const lastIndexOfFileDot = fileName.lastIndexOf('.');
  const fileExt = fileName.slice(lastIndexOfFileDot);

  return
}
