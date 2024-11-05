export const getUserDatas = () => JSON.parse(localStorage.getItem("userDatas")) || [];

export const saveDatas = (userDatas) => {
  localStorage.setItem("userDatas", JSON.stringify(userDatas));
};
