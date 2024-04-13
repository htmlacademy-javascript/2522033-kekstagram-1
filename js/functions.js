// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  // Проверяем, меньше ли длина строки указанной максимальной длины
  if (str.length <= maxLength) {
    return true; // Если да, возвращаем true
  } else {
    return false; // Если нет, возвращаем false
  }
}
