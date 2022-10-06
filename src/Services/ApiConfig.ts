export class ApiConfig {
  static ApiUrl: string = 'https://localhost:7129/api/';
  static ItemEndPoints: any = {
    ProductGetByIdAsync: 'Product/GetByIdAsync' as string,
    ProductGetById: 'Product/GetById' as string,
    ProductGetAll: 'Product/GetAll' as string,
    ProductGetAllAsync: 'Product/GetAllAsync' as string,
    GetRealatedItems: 'Product/GetRelatedItems' as string,
  };
}
