/**
 *
 * @param type
 * @returns styled type element
 */

export const getTypeColor = (type: string) => {
  switch (type) {
    case "PDF":
      return "bg-red-100 text-red-700";
    case "CSV":
      return "bg-green-100 text-green-700";
    case "DOCX":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
