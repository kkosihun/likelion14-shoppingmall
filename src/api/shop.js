import axios from "axios"; 


//이 코드가 없으면 axios.get("http://localhost:3000 ~")
const api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
});

// async = 비동기 함수 - 동기식으로 처리하면 서버한테 응답을 받아오는 동안에 멈춰보림
//상품 목록 조회 (GET /{type})
export const getItems = async (type = "clothes", params = {}) => {
    const res = await api.get(`/${type}`, {params});
    return res.data;
    //데이터를 서버한테 반환
}

// 특정 상품 조회 (GET /{type}/{id})
export const getItem = async (type, id) => {
  const res = await api.get(`/${type}/${id}`);
  return res.data;
};


// 새 상품 등록 (POST /{type})
export const createItem = async (type, body) => {
  const res = await api.post(`/${type}`, body);
  return res.data;
};


// 상품 전체 수정 (PUT /{type}/{id})
export const updateItem = async (type, id, body) => {
  const res = await api.put(`/${type}/${id}`, body);
  return res.data;
};


// 상품 부분 수정 (PATCH /{type}/{id})
export const patchItem = async (type, id, body) => {
  const res = await api.patch(`/${type}/${id}`, body);
  return res.data;
};


// 상품 삭제 (DELETE /{type}/{id})
export const deleteItem = async (type, id) => {
  const res = await api.delete(`/${type}/${id}`);
  return res.data;
};
