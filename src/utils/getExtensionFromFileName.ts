export default function getExtensionFromFileName(fileName: string): string {
  const splittedParts = fileName.split(".");

  return splittedParts[splittedParts.length - 1];
}
