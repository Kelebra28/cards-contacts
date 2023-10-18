export function formatPhoneNumber(phoneNumber) {
    // Elimina cualquier carácter que no sea un dígito
    const cleaned = phoneNumber.replace(/\D/g, '');
  
    // Verifica la longitud de la cadena para determinar el formato
    if (cleaned.length === 10) {
      // Formato para números de 10 dígitos (555-555-5555)
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (cleaned.length === 7) {
      // Formato para números de 7 dígitos (555-5555)
      return cleaned.replace(/(\d{3})(\d{4})/, '$1-$2');
    } else {
      // Devuelve el número sin formato si no coincide con ninguna longitud conocida
      return cleaned;
    }
  }