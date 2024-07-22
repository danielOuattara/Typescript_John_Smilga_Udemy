mkdir -p src/features/cart src/features/theme src/features/user && touch src/features/cart/cartSlice.ts src/features/theme/themeSlice.ts src/features/user/userSlice.ts


mkdir -p src/pages && \
touch src/pages/{about,cart,checkout,error,home,landing,login,orders,products,register,single-product,index}.tsx && \
for file in src/pages/*.tsx; do \
  base_name=$(basename "$file" .tsx); \
  capitalized_name=$(echo "$base_name" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}'); \
  echo "export default function $capitalized_name() { 
  return <h1 className=\"text-4xl\">$capitalized_name Page</h1>; 
}" > "$file"; \
done
 
# Note: correct index.tsx as follow 

echo 'export { default as HomeLayout } from "./home";
export { default as Landing } from "./landing";
export { default as SingleProduct } from "./single-product";
export { default as Products } from "./products";
export { default as Cart } from "./cart";
export { default as Error } from "./error";
export { default as About } from "./about";
export { default as Login } from "./login";
export { default as Register } from "./register";
export { default as Checkout } from "./checkout";
export { default as Orders } from "./orders";' > src/pages/index.tsx