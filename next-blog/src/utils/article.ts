// 랜덤 색상
const pastelColors = [
  'bg-blue-300', 'bg-purple-300', 'bg-pink-400', 'bg-green-300', 'bg-yellow-300', 'bg-red-300', 'bg-teal-300',
  ];
  
// 랜덤색상 생성기
export const randomCategoryColorPicker = () => {
  const randomIdx = Math.floor(Math.random() * pastelColors.length);

  return pastelColors[randomIdx];
}