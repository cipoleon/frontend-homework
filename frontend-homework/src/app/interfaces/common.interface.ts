export interface BrandsResponse {
  brands: Brand[];
  next: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface CategoriesResponse {
  brandId: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
}

export interface SizeResponse {
  sizes: Size[];
}

export interface Size {
  label: string;
}
